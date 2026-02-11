import { auth } from "@/services/auth";
import type { Advertisement } from "@/types/advertisement";
import { z } from "zod";

const createAdvertisementSchema = z.object({
    message: z.string().min(1, "Mensagem do aviso é obrigatória"),
});

export const createAddAdvertisementAction = async (message: string): Promise<Advertisement> => {
    const parsed = createAdvertisementSchema.safeParse({ message });

    if (!parsed.success) {
        throw new Error(parsed.error.issues[0].message);
    }

    const baseUrl = import.meta.env.VITE_BASE_URL;
    if (!baseUrl) throw new Error("URL da API não configurada");

    const response = await fetch(`${baseUrl}/advertisement/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.getToken()}`,
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        let errorMessage = "Falha ao criar aviso";
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
        } catch {}
        throw new Error(errorMessage);
    }

    return await response.json(); 
};


export const loadAdvertisementsAction = async (): Promise<Advertisement[]> => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    if (!baseUrl) throw new Error("URL da API não configurada");

    const response = await fetch(`${baseUrl}/advertisement/get`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${auth.getToken()}`,
        },
    });

    if (!response.ok) {
        let errorMessage = "Falha ao carregar avisos";
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
        } catch {}
        throw new Error(errorMessage);
    }

    return await response.json();
};
