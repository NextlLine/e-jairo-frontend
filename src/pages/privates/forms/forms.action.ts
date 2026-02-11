import type { CustomDocument } from "@/types/document";

export function fetchDocumentos(setDocumentos: React.Dispatch<React.SetStateAction<CustomDocument[]>>) {
  return fetch("/result/created_docs.json")
    .then(res => res.json())
    .then(data => setDocumentos(data))
    .catch(() => console.error("Erro ao carregar documentos"));
}