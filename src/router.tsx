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
import RegisterPage from "./pages/register/Register";

async function privateLoader() {
  const isLogged = await auth.isAuthenticated();
  if (!isLogged) return redirect("/");
  return null;
}

async function publicLoader() {
  const isLogged = await auth.isAuthenticated();
  if (isLogged) return redirect("/home");
  return null;
}

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    loader: publicLoader,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },

  {
    element: <PrivateLayout />,
    loader: privateLoader,
    children: [
      { path: "home", element: <HomePage /> }, 
    ],
  },

  { path: "*", element: <NotFoundPage /> },
]);
