import { router } from "@/router";

export const signInAction = async (email: string, password: string) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const response = await fetch(`${baseUrl}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Sign in failed: ${text}`);
    }
    
    router.navigate("/home");
    // return await response.json();
};

