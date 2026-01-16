import { router } from "@/router";
import { signUpAction } from "./signup.action";
import React, { type CSSProperties } from "react";
import { colors } from "@/styles/colors";
import logo from "@/styles/assets/logo.png";

export default function SignUpPage() {

    function handleSignUp() {
        signUpAction(email, password, confirmPassword);
    }
    function handleSignIn() {
        router.navigate("/");
    }

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmHash] = React.useState('');
    const [corem, setCorem] = React.useState('');


    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <form style={styles.form}>
                    <img src={logo} style={styles.logo} />

                    <label style={styles.label}>
                        Email
                        <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} style={styles.input} placeholder="Digite seu email" />
                    </label>

                    <label style={styles.label}>
                        Coren
                        <input type="text" value={corem} onChange={(e) => setCorem(e.currentTarget.value)} style={styles.input} placeholder="Digite seu coren" />
                    </label>

                    <label style={styles.label}>
                        Senha
                        <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} style={styles.input} placeholder="Digite sua senha" />
                    </label>

                    <label style={styles.label}>
                        Confirmar Senha
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmHash(e.currentTarget.value)} style={styles.input} placeholder="Confirme sua senha" />
                    </label>

                    <button type="button" style={styles.button} onClick={handleSignUp}>
                        Entrar
                    </button>

                    <label style={{ ...styles.label, flexDirection: "row" }}>
                        Já tem uma conta?
                        <button style={styles.registerButton} onClick={handleSignIn}>
                            Entrar
                        </button>
                    </label>
                </form>
            </div>
        </div>
    );
}
const styles: Record<string, CSSProperties> = {
    container: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colors.background,
    },
    card: {
        width: "100%",
        maxWidth: "360px",
        padding: "32px",
        borderRadius: "12px",
        background: colors.cardBG,
        boxShadow: "0 0 20px rgba(0,0,0,0.08)",
        textAlign: "center",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        width: "100%",
    },
    logo: {
        marginBottom: "16px",
        width: "120px",
    },
    title: {
        marginBottom: "4px",
        fontSize: "22px",
        fontWeight: "bold",
        color: colors.text,
    },
    subtitle: {
        marginBottom: "20px",
        color: colors.textLight,
        fontSize: "14px",
    },
    label: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        fontSize: "14px",
        fontWeight: 500,
        color: colors.text,
    },
    input: {
        width: "100%",
        marginTop: "6px",
        padding: "10px 12px",
        borderRadius: "8px",
        border: `1px solid ${colors.border}`,
        color: colors.text,
        background: colors.inputBG,
        fontSize: "14px",
        boxSizing: "border-box",
    },
    button: {
        marginTop: "12px",
        padding: "12px",
        background: colors.primary,
        color: colors.textButton,
        border: "none",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: 600,
        cursor: "pointer",
        width: "100%",
    },
    registerButton: {
        background: "none",
        border: "none",
        color: colors.primary,
        marginLeft: "4px",
        cursor: "pointer",
        padding: 0,
        fontSize: "14px",
        fontWeight: 500,
    }
};
