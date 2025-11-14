import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";

import { auth } from "./services/auth";
import LoginPage from "./pages/login/Login";
import HomePage from "./pages/home/home";
import NotFoundPage from "./pages/notFound/NotFound";

async function privateLoader() {
  const isLogged = await auth.isAuthenticated();
  if (!isLogged) return redirect("/login");
  return null;
}

async function publicLoader() {
  const isLogged = await auth.isAuthenticated();
  if (isLogged) return redirect("/");
  return null;
}

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    loader: publicLoader,
    children: [
      { path: "/login", element: <LoginPage /> },
    ],
  },

  {
    element: <PrivateLayout />,
    loader: privateLoader,
    children: [
      { index: true, element: <HomePage /> }, 
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);
