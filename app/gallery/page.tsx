import type { Metadata } from "next";
import Link from "next/link";
import GalleryFilter from "./GalleryFilter";

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

      <GalleryFilter shots={SHOTS} />

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
