"use client";

import { useState, type CSSProperties } from "react";

type Item = {
  cat: string;
  key: string;
  src: string;
  name: string;
  alt: string;
};

type Filter = "all" | "Baby" | "Kids" | "Women's" | "Men's";

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

export default function ProductsFilter({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const count = (cat: string) => items.filter((i) => i.cat === cat).length;
  const shown = filter === "all" ? items : items.filter((i) => i.cat === filter);

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
            gap: 0,
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          <button type="button" onClick={() => setFilter("all")} style={tab("all")}>
            All <span style={{ opacity: 0.55 }}>{items.length}</span>
          </button>
          <button type="button" onClick={() => setFilter("Baby")} style={tab("Baby")}>
            Baby <span style={{ opacity: 0.55 }}>{count("Baby")}</span>
          </button>
          <button type="button" onClick={() => setFilter("Kids")} style={tab("Kids")}>
            Kids <span style={{ opacity: 0.55 }}>{count("Kids")}</span>
          </button>
          <button type="button" onClick={() => setFilter("Women's")} style={tab("Women's")}>
            Women&apos;s <span style={{ opacity: 0.55 }}>{count("Women's")}</span>
          </button>
          <button type="button" onClick={() => setFilter("Men's")} style={tab("Men's")}>
            Men&apos;s <span style={{ opacity: 0.55 }}>{count("Men's")}</span>
          </button>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(24px,3vw,44px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
            }}
          >
            {shown.map((item) => (
              <article
                key={item.name}
                style={{
                  background: "#fff",
                  animation: "cCell .55s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#fff" }}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    padding: "14px 16px",
                    borderTop: "1px solid var(--color-divider)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "-.01em" }}>
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-accent)",
                    }}
                  >
                    {item.cat}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
