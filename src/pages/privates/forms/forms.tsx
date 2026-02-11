import { useEffect, useMemo, useState } from "react";
import type { CustomDocument } from "@/types/document";
import { fetchDocumentos } from "./forms.action";
import { customStyle } from "@/styles/custom-style";
import { colors } from "@/styles/colors";

export function FormsPage() {
    const [busca, setBusca] = useState("");
    const [documentos, setDocumentos] = useState<CustomDocument[]>([]);

    useEffect(() => {
        fetchDocumentos(setDocumentos);
    }, []);

    const documentosFiltrados = useMemo(() => {
        return documentos.filter(doc =>
            doc.nome.toLowerCase().includes(busca.toLowerCase())
        );
    }, [busca, documentos]);

    return (
        <div style={styles.page}>

            <input
                type="text"
                placeholder="Digite o nome do arquivo"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                style={customStyle.input}
            />

            <div style={styles.card}>
                <table style={styles.table}>
                    <thead>
                        <tr style={styles.theadRow}>
                            <th style={styles.thIndex}>#</th>
                            <th style={styles.thDoc}>Documento</th>
                        </tr>
                    </thead>

                    <tbody>
                        {documentosFiltrados.map((doc, index) => (
                            <tr key={doc.arquivo} style={styles.tr}>
                                <td style={styles.indexCell}>
                                    <span style={styles.badge}>{index + 1}</span>
                                </td>

                                <td>
                                    <a
                                        href={`/docs/${doc.arquivo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.link}
                                    >
                                        {doc.nome.toUpperCase()}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {documentosFiltrados.length === 0 && (
                    <div style={styles.empty}>
                        Nenhum documento encontrado
                    </div>
                )}
            </div>
        </div>
    );
}

const styles: Record<string, React.CSSProperties> = {
    page: {
        padding: 30,
        maxWidth: 1000,
        margin: "0 auto",
    },

    card: {
        marginTop: 25,
        background: colors.cardBG,
        borderRadius: 14,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
    },

    theadRow: {
        background: colors.primaryDark,
        color: "white",
        textAlign: "left",
    },

    thIndex: {
        padding: "14px 18px",
        width: 70,
    },

    thDoc: {
        padding: "14px 18px",
    },

    tr: {
        borderBottom: `1px solid ${colors.border}`,
        transition: "background 0.2s ease",
    },

    indexCell: {
        padding: "12px 18px",
    },

    badge: {
        background: colors.primaryDark,
        color: "white",
        padding: "4px 10px",
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 600,
    },

    link: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 18px",
        textDecoration: "none",
        fontWeight: 600,
        color: colors.text,
    },

    docIcon: {
        fontSize: 18,
    },

    empty: {
        padding: 30,
        textAlign: "center",
        color: colors.textLight,
        fontWeight: 500,
    },
};
