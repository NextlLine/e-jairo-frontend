import { auth } from "@/services/auth";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});


export const signInAction = async (email: string, password: string) => {
  const parsed = signInSchema.safeParse({ email, password });

if (!parsed.success) {
  throw new Error(parsed.error.issues[0].message);
}

  const baseUrl = import.meta.env.VITE_BASE_URL;

  if (!baseUrl) {
    throw new Error("URL da API não configurada");
  }

  let response: Response;

  try {
    response = await fetch(`${baseUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  } catch {
    throw new Error("Erro de conexão com o servidor");
  }

  if (!response.ok) {
    let message = "Falha ao realizar login";

    try {
      const errorData = await response.json();
      message = errorData.message || message;
    } catch {
    }

    throw new Error(message);
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Resposta inválida do servidor");
  }

  let data: any;
  try {
    data = await response.json();
  } catch {
    throw new Error("Erro ao processar resposta do servidor");
  }

  const accessToken = data.authenticationResult?.AccessToken;

  if (!accessToken) {
    throw new Error("Token não recebido do servidor");
  }

  auth.signIn(accessToken);
};
