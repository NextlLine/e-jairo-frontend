import { colors } from "@/styles/colors";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div style={styles.app}>
      <Outlet />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    minHeight: "100dvh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background: colors.background,
  },

};
