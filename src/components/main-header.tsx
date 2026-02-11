import {
    FaFilePdf,
    FaBookMedical,
    FaMapMarkedAlt,
    FaPills,
    FaHome,
} from "react-icons/fa";
import { IconButton } from "@/components/icon-button";
import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import { router } from "@/router";
import { auth } from "@/services/auth";
import Favicon from "@/utils/exportFavIcon";

export function MainHeader() {
    function handleLogout() {
        auth.signOut();
        router.navigate("/");
    }

    const handleProtocolClick = () => {
        window.open(
            "https://www.saude.df.gov.br/web/guest/busca?q=protocolos+aprovados",
            "_blank"
        );
    };

    const handleNavigationToHome = () => {
        router.navigate("/home");
    }

    return (
        <header style={styles.header}>
            <div style={styles.topRow}>
                <div style={styles.logo}>E-JAIRO</div>

                <img src={Favicon} style={styles.logoImg}  onClick={handleNavigationToHome}/>

                <button style={styles.logoutButton} onClick={handleLogout}>
                    Sair
                </button>
            </div>

            <div style={styles.shortcutsWrapper}>
                <div style={styles.shortcutsScroll}>
                    <IconButton icon={<FaHome />} label="Página Inicial" onClick={handleNavigationToHome}/>
                    <IconButton icon={<FaFilePdf />} label="PDFs" />
                    <IconButton icon={<FaPills />} label="Farmácia" />
                    <IconButton icon={<FaMapMarkedAlt />} label="UBSs" />
                    <IconButton
                        icon={<FaBookMedical />}
                        label="Protocolos"
                        onClick={handleProtocolClick}
                    />
                </div>
            </div>
        </header>
    );
}

const styles: Record<string, CSSProperties> = {
    header: {
        width: "100%",
        borderBottom: `1px solid ${colors.border}`,
        background: colors.cardBG,
        display: "flex",
        flexDirection: "column",
        borderRadius: "0 0 15px 15px",
    },
    topRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
    },
    logo: {
        fontSize: 20,
        fontWeight: 800,
        color: colors.primaryDark,
        letterSpacing: 1,
    },
    logoImg: {
        height: '40px'
    },
    logoutButton: {
        backgroundColor: colors.danger,
        color: colors.textButton,
        border: "none",
        padding: "8px 14px",
        borderRadius: 8,
        cursor: "pointer",
        fontWeight: 600,
    },
    shortcutsWrapper: {
        padding: "10px 0",
    },
    shortcutsScroll: {
        display: "flex",
        gap: 12,
        padding: "0 16px",
        overflowX: "auto",
        scrollBehavior: "smooth",
    },

};