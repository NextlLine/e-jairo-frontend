import { router } from "@/router";

export const signUpAction = async (
    email: string,
    password: string,
    confirmPassword: string,
    name: string,
    teamId: string,
) => {
    if (!email || !password || !confirmPassword || !name || !teamId) {
        throw new Error("Preencha todos os campos");
    }

    if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem");
    }

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const response = await fetch(`${baseUrl}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            name,
            teamId,
        }),
    });

    if (!response.ok) {
        await response.text();
        throw new Error("Erro ao criar conta");
    }

    router.navigate("/auth/confirmCode");
};
