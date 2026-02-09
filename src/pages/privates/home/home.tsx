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
  FaSearch,
} from "react-icons/fa";
import { IconCard } from "@/components/card";
import { AdvertisementCarroussel } from "@/components/AdvertiseCard";
import type { Advertisement } from "@/types/advertisement";

export default function HomePage() {
  const advertisements: Advertisement[] = [
    { id: "1", message: "Campanha de Vacinação contra a Gripe - 15 a 30 de Abril", createdAt: new Date("2024-04-15") },
    { id: "2", message: "Atualização do Calendário de Vacinação Infantil", createdAt: new Date("2024-04-10") },
    { id: "3", message: "Novas Diretrizes para Gestantes - Consulte seu Posto de Saúde", createdAt: new Date("2024-04-12") },
    { id: "4", message: "Importância da Vacinação em Idosos - Proteja-se!", createdAt: new Date("2024-04-18") },
    { id: "5", message: "Vacinação contra o HPV - Disponível para Adolescentes", createdAt: new Date("2024-04-20") },
    { id: "6", message: "Campanha de Vacinação contra a Febre Amarela - Verifique sua Zona de Risco", createdAt: new Date("2024-04-22") },
      { id: "1", message: "Campanha de Vacinação contra a Gripe - 15 a 30 de Abril", createdAt: new Date("2024-04-15") },
    { id: "2", message: "Atualização do Calendário de Vacinação Infantil", createdAt: new Date("2024-04-10") },
    { id: "3", message: "Novas Diretrizes para Gestantes - Consulte seu Posto de Saúde", createdAt: new Date("2024-04-12") },
    { id: "4", message: "Importância da Vacinação em Idosos - Proteja-se!", createdAt: new Date("2024-04-18") },
    { id: "5", message: "Vacinação contra o HPV - Disponível para Adolescentes", createdAt: new Date("2024-04-20") },
    { id: "6", message: "Campanha de Vacinação contra a Febre Amarela - Verifique sua Zona de Risco", createdAt: new Date("2024-04-22") },
  ];

  
  return (
    <div style={customStyle.page}>

     <AdvertisementCarroussel advertisements={advertisements} />

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}><FaSearch /> Pesquisa Rápida</h2>
        <div style={styles.searchBox}>
          <input placeholder="Nome, SUS, CPF..." style={styles.input} />
          <input placeholder="Tipo de observação..." style={styles.input} />
          <button
            style={styles.searchBtn}
            onMouseDown={(e) => e.preventDefault()}
            onFocus={(e) => e.currentTarget.style.outline = "none"}
          >Pesquisar</button>
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

const styles: Record<string, React.CSSProperties> = {
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
};
