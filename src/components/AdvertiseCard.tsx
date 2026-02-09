import { useRef } from "react";
import { colors } from "@/styles/colors";
import { FaBell, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Advertisement } from "@/types/advertisement";

export function AdvertisementCarroussel({ advertisements }: { advertisements: Advertisement[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;

    const cardWidth = 220;
    const scrollAmount = cardWidth * 2;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  const sortedAds = [...advertisements].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  const showArrows = sortedAds.length > 3;

  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>
        <FaBell /> Avisos
      </h2>

      <div style={styles.wrapper}>
        {showArrows && (
          <button style={{...styles.arrows, ...styles.arrowLeft}} onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
        )}

        <div style={styles.cardRow} ref={scrollRef}>
          {sortedAds.length === 0 ? (
            <div style={styles.simpleCard}>Nenhum aviso</div>
          ) : (
            sortedAds.map((ad) => (
              <div key={ad.id} style={styles.simpleCard}>
                <div>{ad.message}</div>
                <div style={styles.adDate}>
                  {formatDate(ad.createdAt)}
                </div>
                
              </div>
            ))
          )}
        </div>

        {showArrows && (
          <button style={{...styles.arrows, ...styles.arrowRight}} onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}

function formatDate(date: Date) {
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
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
  },

  arrowLeft: {
    left: 0,
    background: `linear-gradient(to right, ${colors.background} 50%, rgba(255, 255, 255, 0))`,
  },

  arrowRight: {
    right: 0,
    background: `linear-gradient(to left, ${colors.background} 50%, rgba(255, 255, 255, 0))`,
  },
};
