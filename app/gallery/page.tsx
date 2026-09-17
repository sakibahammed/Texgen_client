import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Buyer visits and employee engagement at Texgen Group and Radiance Knitwears, Ashulia, Dhaka.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "/gallery" },
};

const G = "/uploads/texgen-images-optimized/09-gallery/";

type Shot = { key: string; tag: string; src: string; caption: string };

const SHOTS: Shot[] = [
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({
    key: "buyer",
    tag: "Buyer visit",
    src: `${G}byer${n}.jpg`,
    caption: `Buyer visit ${String(n).padStart(2, "0")} — brand and date to be supplied`,
  })),
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    key: "team",
    tag: "Our people",
    src: `${G}emp${n}.jpg`,
    caption: `Employee engagement ${String(n).padStart(2, "0")} — event and date to be supplied`,
  })),
];

const tabStyleActive: React.CSSProperties = {
  appearance: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  border: 0,
  borderRight: "1px solid var(--color-divider)",
  padding: "15px clamp(14px,1.8vw,26px)",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "var(--color-accent)",
  color: "#fff",
};

const tabStyleInactive: React.CSSProperties = {
  appearance: "none",
  cursor: "pointer",
  fontFamily: "inherit",
  border: 0,
  borderRight: "1px solid var(--color-divider)",
  padding: "15px clamp(14px,1.8vw,26px)",
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "transparent",
  color: "var(--color-text)",
};

export default function GalleryPage() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding:
              "clamp(32px,5vw,80px) clamp(12px,2vw,28px) clamp(24px,3vw,40px)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-neutral-600)",
              marginBottom: "20px",
            }}
          >
            <Link href="/" style={{ color: "var(--color-neutral-600)" }}>
              Home
            </Link>{" "}
            · Gallery
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "28px",
              flexWrap: "wrap",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(34px,5.4vw,84px)",
                lineHeight: ".94",
                fontWeight: 900,
                letterSpacing: "-.04em",
                margin: 0,
                maxWidth: "13ch",
              }}
            >
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                On the floor
              </span>
            </h1>
            <p
              style={{
                maxWidth: "38ch",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-neutral-700)",
                margin: 0,
                animation: "cUp .8s .15s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Buyer visits and the people who make the goods. Click any frame to
              open it; use ← → to move and Esc to close.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "sticky",
          top: "62px",
          zIndex: 50,
          background: "var(--color-bg)",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 clamp(12px,2vw,28px)",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <button type="button" style={tabStyleActive}>
            All <span style={{ opacity: 0.55 }}>15</span>
          </button>
          <button type="button" style={tabStyleInactive}>
            Buyer visits <span style={{ opacity: 0.55 }}>9</span>
          </button>
          <button type="button" style={tabStyleInactive}>
            Employee engagement <span style={{ opacity: 0.55 }}>6</span>
          </button>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(24px,3vw,40px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
            }}
          >
            {SHOTS.map((shot, i) => (
              <button
                key={i}
                type="button"
                style={{
                  appearance: "none",
                  border: 0,
                  padding: 0,
                  background: "var(--color-bg)",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "block",
                  fontFamily: "inherit",
                  animation: "cCell .55s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "14px 16px",
                    borderTop: "1px solid var(--color-divider)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.4,
                      color: "var(--color-text)",
                    }}
                  >
                    {shot.caption}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                      flex: "none",
                    }}
                  >
                    {shot.tag}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-neutral-600)",
              margin: "18px 0 0",
            }}
          >
            Captions are placeholders. Real dates and, where permitted, brand
            names should replace them — an unlabelled photo of a buyer visit
            proves nothing.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-accent)", color: "#fff" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding:
              "clamp(40px,6vw,100px) clamp(12px,2vw,28px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "28px",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(26px,4.2vw,64px)",
              lineHeight: 1,
              fontWeight: 900,
              letterSpacing: "-.04em",
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            Photos are fine. A visit is better.
          </h2>
          <Link
            href="/contact"
            className="btn"
            style={{ background: "#fff", color: "var(--color-accent)" }}
          >
            Book an audit visit
          </Link>
        </div>
      </section>
    </>
  );
}
