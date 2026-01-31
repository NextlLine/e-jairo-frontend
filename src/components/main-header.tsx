import {
    FaFilePdf,
    FaBookMedical,
    FaMapMarkedAlt,
    FaPills,
} from "react-icons/fa";
import { IconButton } from "@/components/icon-button";
import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { router } from "@/router";
import { auth } from "@/services/auth";

export function MainHeader() {
    function handleLogout() {
        auth.signOut();
        router.navigate("/");
    }

    const handleProtocolClick = () => {
        window.open("https://www.saude.df.gov.br/web/guest/busca?q=protocolos+aprovados", "_blank");
    };
    return (
        <header style={styles.header}>
            <div style={styles.headerContent}>
                <section style={styles.section}>
                    <IconButton icon={<FaFilePdf />} label="PDFs" />
                    <IconButton icon={<FaPills />} label="Pedidos" />
                    <IconButton icon={<FaMapMarkedAlt />} label="Endereços UBSs" />
                    <IconButton
                        icon={<FaBookMedical />}
                        label="Protocolos Saúde-DF"
                        onClick={handleProtocolClick}
                    />
                </section>

                <button style={styles.logoutButton} onClick={handleLogout}>
                    Sair
                </button>
            </div>
        </header>
    )
}

const styles: Record<string, CSSProperties> = {
    header: {
        width: "100%",
        borderBottom: `1px solid ${colors.border}`,
        background: colors.cardBG,
    },
    headerContent: {
        maxWidth: 1400,
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
    },
    logoutButton: {
        backgroundColor: colors.danger,
        color: colors.textButton,
        border: "none",
        padding: "10px 16px",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 600,
        height: 42,
    },
    section: {
        display: "flex",
        alignItems: "center",
        gap: 12,
    },
    sectionTitle: {
        marginBottom: 12,
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: colors.primaryDark,
        fontWeight: 700,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 16,
    },
};
