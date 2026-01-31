import React from "react";
import { colors } from "@/styles/colors";

export function Card({ label }: { label: string }) {
  return <div style={styles.simpleCard}>{label}</div>;
}

export function IconCard({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div style={styles.iconCard} onClick={onClick}>
      <div style={styles.icon}>{icon}</div>
      <span style={styles.iconLabel}>{label}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  simpleCard: {
    background: colors.cardBG,
    padding: 20,
    borderRadius: 12,
    border: `1px solid ${colors.border}`,
    boxShadow: "0 2px 6px rgba(15, 23, 42, 0.05)",
    minWidth: 200,
    fontWeight: 600,
    color: colors.text,
  },
  iconCard: {
    background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryDark})`,
    color: colors.textButton,
    borderRadius: 14,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    boxShadow: "0 6px 14px rgba(37, 99, 235, 0.25)",
    cursor: "pointer",
  },
  icon: {
    fontSize: 30,
    marginBottom: 10,
  },
  iconLabel: {
    fontWeight: 600,
    textAlign: "center",
  },
};
