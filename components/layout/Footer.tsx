import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

const colTitleStyle: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  opacity: 0.45,
  marginBottom: 14,
};

const linkListStyle: CSSProperties = {
  display: "grid",
  gap: 9,
  fontSize: 14,
};

const linkStyle: CSSProperties = {
  color: "var(--color-bg)",
  opacity: 0.8,
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-text)", color: "var(--color-bg)" }}>
      <div
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          padding:
            "clamp(36px,5vw,72px) clamp(12px,2vw,28px) clamp(22px,3vw,36px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "clamp(22px,3vw,44px)",
        }}
      >
        <div>
          <Image
            src="/uploads/texgen-images-optimized/01-brand-ui/logo1.svg"
            alt="Texgen Group"
            width={140}
            height={34}
            style={{
              height: 34,
              width: "auto",
              filter: "brightness(0) invert(1)",
              marginBottom: 16,
            }}
          />
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.55,
              opacity: 0.6,
              margin: 0,
              maxWidth: "32ch",
            }}
          >
            From fabric to finished goods — every stitch reflects our promise to
            deliver better.
          </p>
        </div>

        <div>
          <div style={colTitleStyle}>Company</div>
          <div style={linkListStyle}>
            <Link href="/about" style={linkStyle}>About</Link>
            <Link href="/about#leadership" style={linkStyle}>Leadership</Link>
            <Link href="/gallery" style={linkStyle}>Gallery</Link>
            <Link href="/careers" style={linkStyle}>Careers</Link>
            <Link href="/csr" style={linkStyle}>CSR &amp; Community</Link>
          </div>
        </div>

        <div>
          <div style={colTitleStyle}>Capabilities</div>
          <div style={linkListStyle}>
            <Link href="/knitting" style={linkStyle}>Knitting</Link>
            <Link href="/capabilities" style={linkStyle}>Cutting &amp; Sewing</Link>
            <Link href="/capabilities" style={linkStyle}>Testing Lab</Link>
            <Link href="/products" style={linkStyle}>Products</Link>
          </div>
        </div>

        <div>
          <div style={colTitleStyle}>Contact</div>
          <div style={{ ...linkListStyle, opacity: 0.8 }}>
            <a href="mailto:info@texgengroup.com" style={{ color: "var(--color-bg)" }}>
              info@texgengroup.com
            </a>
            <span>+88 02-223371436-38</span>
            <a
              href="https://www.facebook.com/TexgenGroup"
              style={{ color: "var(--color-bg)" }}
              target="_blank"
              rel="noreferrer noopener"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(243,242,242,.16)" }}>
        <div
          style={{
            maxWidth: 1600,
            margin: "0 auto",
            padding: "16px clamp(12px,2vw,28px)",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 12,
            opacity: 0.5,
          }}
        >
          <span>© {new Date().getFullYear()} Texgen Group. Radiance Knitwears Limited.</span>
          <span>Made in Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}
