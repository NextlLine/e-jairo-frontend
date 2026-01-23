import React from "react";
import { router } from "@/router";
import { confirmCodeAction } from "./confirm-code.action";
import { customStyle } from "@/styles/custom-style";
import logo from "@/styles/assets/logo.png";

export default function ConfirmCodePage() {
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleConfirm() {
    try {
      setError(null);
      setLoading(true);

      await confirmCodeAction(email, code);

      router.navigate("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={customStyle.container}>
      <div style={customStyle.card}>
        <form
          style={customStyle.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <img src={logo} style={customStyle.logo} />
          <h2 style={customStyle.title}>Confirmar conta</h2>

          <label style={customStyle.label}>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              style={customStyle.input}
              placeholder="Digite seu email"
              autoComplete="email"
            />
          </label>

          <label style={customStyle.label}>
            Código de confirmação
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.currentTarget.value)}
              style={customStyle.input}
              placeholder="Digite o código recebido"
            />
          </label>

          {error && <div style={customStyle.error}>{error}</div>}

          <button
            type="button"
            style={{ ...customStyle.button, opacity: loading ? 0.7 : 1 }}
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Confirmando..." : "Confirmar"}
          </button>
        </form>
      </div>
    </div>
  );
}
