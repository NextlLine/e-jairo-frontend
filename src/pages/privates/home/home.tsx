import React from "react";
import { colors } from "@/styles/colors";
import { customStyle } from "@/styles/custom-style";
import {
  FaUsers,
  FaBaby,
  FaUserInjured,
  FaNotesMedical,
  FaClipboardList,
  FaExclamationTriangle,
  FaFileAlt,
  FaSyringe,
  FaChartPie,
  FaBell,
  FaSearch,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1 style={customStyle.title}>Dashboard E-JAIRO</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><FaBell /> Avisos</h2>
        <div style={styles.cardRow}>
          <Card label="Avisos Ativos" />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><FaSearch /> Pesquisa Rápida</h2>
        <div style={styles.searchBox}>
          <input placeholder="Nome, SUS, CPF..." style={styles.input} />
          <input placeholder="Tipo de observação..." style={styles.input} />
          <button style={styles.searchBtn}>Pesquisar</button>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><FaChartPie /> Grupos / Estatísticas</h2>
        <div style={styles.grid}>
          <IconCard icon={<FaBaby />} label="Crianças < 2 anos" />
          <IconCard icon={<FaUserInjured />} label="Gestantes" />
          <IconCard icon={<FaNotesMedical />} label="Comorbidades" />
          <IconCard icon={<FaUsers />} label="Grupo Diversos" />
          <IconCard icon={<FaClipboardList />} label="Consolidado Geral" />
          <IconCard icon={<FaChartPie />} label="Tabela de Grupos" />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><FaExclamationTriangle /> Pendências</h2>
        <div style={styles.grid}>
          <IconCard icon={<FaFileAlt />} label="Pendências Ativas" />
          <IconCard icon={<FaClipboardList />} label="Pendências Arquivadas" />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><FaSyringe /> Área Clínica</h2>
        <div style={styles.grid}>
          <IconCard icon={<FaNotesMedical />} label="Prontuários" />
          <IconCard icon={<FaSyringe />} label="Vacinação" />
          <IconCard icon={<FaFileAlt />} label="Receituário" />
          <IconCard icon={<FaClipboardList />} label="Formulários" />
        </div>
      </section>
    </div>
  );
}

function IconCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div style={styles.iconCard}>
      <div style={styles.icon}>{icon}</div>
      <span style={styles.iconLabel}>{label}</span>
    </div>
  );
}

function Card({ label }: { label: string }) {
  return <div style={styles.simpleCard}>{label}</div>;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: 20,
    background: colors.background,
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    overflowX: "hidden",
    scrollbarWidth: "none",
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: colors.primaryDark,
    fontWeight: 700,
  },
  cardRow: {
    display: "flex",
    gap: 20,
  },
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
  searchBox: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  input: {
    padding: 12,
    borderRadius: 10,
    border: `1px solid ${colors.border}`,
    background: colors.inputBG,
    minWidth: 220,
    fontSize: 14,
    color: colors.text,
    outline: "none",
  },
  searchBtn: {
    padding: "12px 22px",
    borderRadius: 10,
    border: "none",
    background: colors.primary,
    color: colors.textButton,
    cursor: "pointer",
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
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
