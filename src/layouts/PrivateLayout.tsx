import { auth } from "@/services/auth";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    auth.logout();
    navigate("/login", { replace: true });
  }

  return (
    <div>
      <header>
        <button onClick={handleLogout}>Sair</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
