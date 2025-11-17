import { router } from "@/router";

export const loginAction = async (email: string, hash: string) => {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const response = await fetch(`${baseUrl}/auth/sign-in`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, hash }),
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Login failed: ${text}`);
    }
    
    router.navigate("/home");
    // return await response.json();
};

