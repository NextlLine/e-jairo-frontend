import { MainHeader } from "@/components/main-header";
import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { Outlet } from "react-router-dom";

export default function PrivateLayout() {
  return (
    <div style={styles.app}>
      <MainHeader />
      <main style={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  app: {
    height: "100dvh",
    width: "100dvw",
    display: "flex",
    flexDirection: "column",
    background: colors.background,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    width: "100%",
    overflowY: "auto",
  },
};
