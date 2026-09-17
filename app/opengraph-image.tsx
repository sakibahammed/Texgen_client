import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Texgen Group — Precision knitwear, engineered.";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f3f2f2",
          display: "flex",
          flexDirection: "column",
          padding: "72px",
          fontFamily: "sans-serif",
          color: "#201e1d",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#ec3013",
            fontWeight: 700,
          }}
        >
          Knit fabric &amp; garment manufacturing · Dhaka
        </div>
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Precision knitwear,
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              color: "#ec3013",
            }}
          >
            engineered.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: "#605d5d",
              display: "flex",
              gap: 24,
            }}
          >
            <span>Texgen Group</span>
            <span>·</span>
            <span>Since 1999</span>
            <span>·</span>
            <span>16.5 t/day fabric</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
