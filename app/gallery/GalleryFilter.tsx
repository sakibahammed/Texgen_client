"use client";

import { useState, type CSSProperties } from "react";

type Shot = { key: string; tag: string; src: string; caption: string };
type Filter = "all" | "buyer" | "team";

const TAB_BASE: CSSProperties = {
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
};

export default function GalleryFilter({ shots }: { shots: Shot[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const count = (key: string) => shots.filter((s) => s.key === key).length;
  const shown = filter === "all" ? shots : shots.filter((s) => s.key === filter);

  const tab = (key: Filter): CSSProperties => {
    const on = filter === key;
    return on
      ? { ...TAB_BASE, background: "var(--color-accent)", color: "#fff" }
      : { ...TAB_BASE, background: "transparent", color: "var(--color-text)" };
  };

  return (
    <>
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
          <button type="button" onClick={() => setFilter("all")} style={tab("all")}>
            All <span style={{ opacity: 0.55 }}>{shots.length}</span>
          </button>
          <button type="button" onClick={() => setFilter("buyer")} style={tab("buyer")}>
            Buyer visits <span style={{ opacity: 0.55 }}>{count("buyer")}</span>
          </button>
          <button type="button" onClick={() => setFilter("team")} style={tab("team")}>
            Employee engagement <span style={{ opacity: 0.55 }}>{count("team")}</span>
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
            {shown.map((shot, i) => (
              <button
                key={shot.src + i}
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
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                  <span style={{ fontSize: "13px", lineHeight: 1.4, color: "var(--color-text)" }}>
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
            Captions are placeholders. Real dates and, where permitted, brand names should replace
            them — an unlabelled photo of a buyer visit proves nothing.
          </p>
        </div>
      </section>
    </>
  );
}
