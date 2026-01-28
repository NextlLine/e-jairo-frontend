import { router } from "@/router";
import { auth } from "@/services/auth";

export const signInAction = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email e senha são obrigatórios");
  }

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const response = await fetch(`${baseUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Falha ao realizar login");
  }

  const data = await response.json();

  const accessToken = data.authenticationResult?.AccessToken;

  if (!accessToken) {
    throw new Error("Token não recebido do servidor");
  }

  auth.signIn(accessToken);
};
