export async function confirmCodeAction(email: string, code: string) {
  if (!email || !code) {
    throw new Error("Email e código são obrigatórios");
  }
  
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const response = await fetch(`${baseUrl}/auth/confirm-code`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "Erro ao confirmar conta");
  }
}
