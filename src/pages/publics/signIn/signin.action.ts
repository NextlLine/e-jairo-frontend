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
    await response.text();
    throw new Error( "Falha ao realizar login");
  }

  return await response.json();
};
