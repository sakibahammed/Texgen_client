import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

const navItemStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "16px clamp(12px,1.6vw,22px)",
  borderRight: "1px solid var(--color-divider)",
  fontSize: 12,
  flex: "none",
  whiteSpace: "nowrap",
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: "var(--color-text)",
};

const ctaStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  padding: "16px clamp(14px,1.8vw,24px)",
  background: "var(--color-accent)",
  flex: "none",
  marginLeft: "auto",
  whiteSpace: "nowrap",
  color: "#fff",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: ".1em",
  textTransform: "uppercase",
};

const navLinks: { href: string; label: string }[] = [
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/products", label: "Products" },
  { href: "/sustainability", label: "Compliance" },
  { href: "/csr", label: "CSR" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          padding: "0 clamp(12px,2vw,28px)",
          display: "flex",
          alignItems: "stretch",
          minHeight: 62,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "14px clamp(14px,2vw,24px) 14px 0",
            borderRight: "1px solid var(--color-divider)",
            flex: "none",
          }}
          aria-label="Texgen Group — home"
        >
          <Image
            src="/uploads/texgen-images-optimized/01-brand-ui/logo1.svg"
            alt="Texgen Group"
            width={120}
            height={30}
            priority
            style={{ height: 30, width: "auto", filter: "brightness(0)" }}
          />
        </Link>

        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} style={navItemStyle}>
            {link.label}
          </Link>
        ))}

        <Link href="/contact" style={ctaStyle}>
          Request a quote <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
