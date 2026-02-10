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
import { AdvertisementCarroussel } from "@/pages/privates/home/components/AdvertisementSection";
import type { Advertisement } from "@/types/advertisement";

export default function HomePage() {
  const advertisements: Advertisement[] = [
    { id: "1", message: "Campanha de vacinação contra a gripe: 15 a 30 de abril"},
    { id: "2", message: "Atualização do calendário de vacinação infantil disponível"},
    { id: "3", message: "Pré-natal: novas orientações para gestantes no SUS"},
    { id: "4", message: "Vacinação em idosos: reforços recomendados para 60+"},
    { id: "5", message: "HPV: vacinação liberada para adolescentes de 9 a 14 anos"},
    { id: "6", message: "Febre amarela: verifique se sua região é de risco"},
    { id: "7", message: "Mutirão de saúde: exames e atualizações de cadastro"},
    { id: "8", message: "Campanha de doação de sangue: participe no posto central"},
    { id: "9", message: "Dia D da vacinação: atendimento ampliado no sábado"},
    { id: "10", message: "Atualização do prontuário eletrônico: leve documento com foto"},
    { id: "11", message: "Saúde da mulher: agendamento de preventivo disponível"},
    { id: "12", message: "COVID-19: reforço bivalente para grupos prioritários"},
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
    background: colors.primaryDark,
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
