import { router } from "@/router";
import { auth } from "@/services/auth";
import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {

  function handleLogout() {
    auth.signOut();
    router.navigate("/")
  }

  return (
    <div>
      <header>
        <button style={style.logoutButton} onClick={handleLogout}>Sair</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const style: Record<string, CSSProperties> = {
  logoutButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: "10px 15px",
    backgroundColor: colors.danger,
    color: colors.textButton,
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
  },
}