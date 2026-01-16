import { colors } from "@/styles/colors";
import type { CSSProperties } from "react";
import logo from "@/styles/assets/logo.png";
import { signInAction } from "./signin.action";
import React from "react";
import { router } from "@/router";

export default function SignInPage() {
  function handleSignIn() {
    signInAction(email, password);
  }
  function handleSignUp() {
    router.navigate("/signup");
  }

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <form style={styles.form}>
          <img src={logo} style={styles.logo} />

          <p style={styles.title}>Bem-vindo ao E-JAIRO!</p>
          <h1 style={styles.subtitle}>Por favor, faça login para continuar.</h1>

          <label style={styles.label}>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} style={styles.input} placeholder="Digite seu email" />
          </label>

          <label style={styles.label}>
            Senha
            <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} style={styles.input} placeholder="Digite sua senha" />
          </label>

          <button type="button" style={styles.button} onClick={handleSignIn}>
            Entrar
          </button>

          <label style={{ ...styles.label, flexDirection: "row" }}>
            Não tem uma conta?
            <button style={styles.registerButton} onClick={handleSignUp}>
              Cadastre-se
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
