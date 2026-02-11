import { useRef, useState } from "react";
import { colors } from "@/styles/colors";
import { FaBell, FaChevronLeft, FaChevronRight, FaPlus } from "react-icons/fa";
import type { Advertisement } from "@/types/advertisement";
import Modal from "@/components/modal";
import { createAddAdvertisementAction, loadAdvertisementsAction } from "../home.action";
import { customStyle } from "@/styles/custom-style";

export function AdvertisementCarroussel({ advertisements }: { advertisements: Advertisement[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const showArrows = advertisements.length > 3;
    const [showModal, setShowModal] = useState(false);
    const [advertisementMessage, setAdvertisementMessage] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function scroll(direction: "left" | "right") {
        if (!scrollRef.current) return;

        const cardWidth = 220;
        const scrollAmount = cardWidth * 2;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    }

    function handleAddAdvertisement() {
        setShowModal(true);
    }

    async function handleSubmitNewAd() {
        try {
            setError(null);
            setLoading(true)

            await createAddAdvertisementAction(advertisementMessage);
            await loadAdvertisementsAction();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro inesperado");
        }
        finally {
            setLoading(false);
            setShowModal(false);
        }
    }

    return (
        <section style={styles.section}>

            <div style={styles.header}>
                <h2 style={styles.sectionTitle}>
                    <FaBell /> Avisos
                </h2>

                <button
                    style={styles.addAdvBtn}
                    onMouseDown={(e) => e.preventDefault()}
                    onFocus={(e) => e.currentTarget.style.outline = "none"}
                    onClick={handleAddAdvertisement}
                >
                    <FaPlus /> Adicionar Aviso
                </button>

            </div>

            <div style={styles.wrapper}>
                {showArrows && (
                    <button
                        style={{ ...styles.arrows, ...styles.arrowLeft }}
                        onClick={() => scroll("left")}
                        onMouseDown={(e) => e.preventDefault()}
                        onFocus={(e) => e.currentTarget.style.outline = "none"}
                    >
                        <FaChevronLeft />
                    </button>
                )}

                <div style={styles.cardRow} ref={scrollRef}>
                    {advertisements.length === 0 ? (
                        <div style={styles.simpleCard}>Nenhum aviso no momento</div>
                    ) : (
                        advertisements.map((ad) => (
                            <div key={ad.id} style={styles.simpleCard}>
                                <div>{ad.message}</div>
                            </div>
                        ))
                    )}
                </div>

                {showArrows && (
                    <button
                        style={{ ...styles.arrows, ...styles.arrowRight }}
                        onClick={() => scroll("right")}
                        onMouseDown={(e) => e.preventDefault()}
                        onFocus={(e) => e.currentTarget.style.outline = "none"}
                    >
                        <FaChevronRight />
                    </button>
                )}
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <section style={styles.modalSectionTitle}>
                    <h2 >Adicionar Novo Aviso</h2>
                </section >

                <form style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
                    <textarea
                        placeholder="Mensagem do aviso"
                        style={styles.input}
                        value={advertisementMessage}
                        onChange={(e) => setAdvertisementMessage(e.currentTarget.value)}
                    />

                    {error && <div style={customStyle.error}>{error}</div>}

                    <div style={{ display: "flex", justifyContent: "space-between", }}>
                        <button
                            type="button"
                            style={{ ...styles.cancelBtn, alignSelf: "flex-end" }}
                            onMouseDown={(e) => e.preventDefault()}
                            onFocus={(e) => e.currentTarget.style.outline = "none"}
                            onClick={() => setShowModal(false)}
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            style={{ ...styles.addAdvBtn, alignSelf: "flex-end" }}
                            onMouseDown={(e) => e.preventDefault()}
                            onFocus={(e) => e.currentTarget.style.outline = "none"}
                            onClick={handleSubmitNewAd}
                        >
                            {loading ? "Criando..." : "Adicionar Aviso"}
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}

const styles: Record<string, React.CSSProperties> = {
    section: {
        marginBottom: 40,
        scrollbarColor: `${colors.primaryDark} ${colors.scrollbarBG}`,
    },
    sectionTitle: {
        marginBottom: 15,
        display: "flex",
        alignItems: "center",
        gap: 10,
        color: colors.primaryDark,
        fontWeight: 700,
    },
    modalSectionTitle: {
        display: "flex",
        justifyContent: "center",
        color: colors.primaryDark,
        fontWeight: 700,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    wrapper: {
        position: "relative",
        display: "flex",
        alignItems: "center",
    },

    cardRow: {
        display: "flex",
        gap: 20,
        overflowX: "auto",
        scrollBehavior: "smooth",
        padding: "10px 40px",
    },
    simpleCard: {
        background: colors.cardBG,
        padding: 20,
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        boxShadow: "0 2px 6px rgba(15, 23, 42, 0.05)",
        minWidth: 200,
        fontWeight: 600,
        color: colors.text,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    arrows: {
        height: "100%",
        background: "transparent",
        color: colors.primaryDark,
        border: "none",
        cursor: "pointer",
        position: "absolute",
        borderRadius: "0%",
    },
    arrowLeft: {
        left: 0,
        background: `linear-gradient(to right, ${colors.background} 50%, rgba(255, 255, 255, 0))`,
    },

    arrowRight: {
        right: 0,
        background: `linear-gradient(to left, ${colors.background} 50%, rgba(255, 255, 255, 0))`,
    },
    addAdvBtn: {
        padding: "12px 22px",
        borderRadius: 10,
        border: "none",
        background: colors.primaryDark,
        color: colors.textButton,
        cursor: "pointer",
        fontWeight: 600,
    },
    cancelBtn: {
        padding: "12px 22px",
        borderRadius: 10,
        border: "none",
        background: colors.danger,
        color: colors.textButton,
        cursor: "pointer",
        fontWeight: 600,
    },
    input: {
        width: "100%",
        height: 100,
        padding: 10,
        borderRadius: 8,
        border: `1px solid ${colors.border}`,
        color: colors.text,
        background: colors.background,
        fontSize: 14,
        resize: "none",
        boxSizing: "border-box",
    }
};
