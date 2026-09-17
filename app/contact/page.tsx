import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";
import { localBusinessJsonLd, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Corporate office in Banani, Dhaka and factory in Ashulia, Savar. Tell us what you're sourcing and we'll come back within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(localBusinessJsonLd)}
      />
      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding:
              "clamp(32px,5vw,80px) clamp(12px,2vw,28px) clamp(24px,3vw,44px)",
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
            · Contact
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
                fontSize: "clamp(32px,5vw,80px)",
                lineHeight: ".94",
                fontWeight: 900,
                letterSpacing: "-.04em",
                margin: 0,
                maxWidth: "15ch",
              }}
            >
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                Tell us what
              </span>
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s .1s cubic-bezier(.2,.8,.2,1) both",
                  color: "var(--color-accent)",
                }}
              >
                you&apos;re sourcing.
              </span>
            </h1>
            <p
              style={{
                maxWidth: "36ch",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-neutral-700)",
                margin: 0,
                animation: "cUp .8s .2s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              We&apos;ll come back within one business day. For factory audits
              and visits, please give us two weeks&apos; notice.
            </p>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          }}
        >
          <div
            style={{
              padding:
                "clamp(32px,5vw,80px) clamp(20px,3vw,56px) clamp(32px,5vw,80px) 0",
            }}
          >
            <div
              style={{
                borderTop: "2px solid var(--color-text)",
                paddingTop: "22px",
                marginBottom: "26px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "12px",
                }}
              >
                Corporate office
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.55,
                  margin: "0 0 14px",
                  maxWidth: "36ch",
                }}
              >
                5A-5B, Concord Rafat Qamar, House 143, Road 4 &amp; 27, Block A,
                Banani, Dhaka 1213, Bangladesh
              </p>
              <a
                href="https://maps.google.com/?q=Concord+Rafat+Qamar+Banani+Dhaka"
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Open in maps →
              </a>
            </div>
            <div
              style={{
                borderTop: "1px solid var(--color-divider)",
                paddingTop: "22px",
                marginBottom: "26px",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "12px",
                }}
              >
                Factory
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.55,
                  margin: "0 0 14px",
                  maxWidth: "36ch",
                }}
              >
                Radiance Knitwears Ltd., Dewan Idris Road, Zirabo, Ashulia,
                Savar, Dhaka 1341, Bangladesh
              </p>
              <a
                href="https://maps.google.com/?q=Zirabo+Ashulia+Savar+Dhaka"
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                }}
              >
                Open in maps →
              </a>
            </div>
            <div
              style={{
                borderTop: "1px solid var(--color-divider)",
                paddingTop: "22px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </div>
                <a href="mailto:info@texgengroup.com" style={{ fontSize: "15px" }}>
                  info@texgengroup.com
                </a>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "8px",
                  }}
                >
                  Phone
                </div>
                <div style={{ fontSize: "15px" }}>+88 02-223371436-38</div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "8px",
                  }}
                >
                  Social
                </div>
                <a
                  href="https://www.facebook.com/TexgenGroup"
                  style={{ fontSize: "15px" }}
                >
                  Facebook
                </a>
              </div>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-neutral-600)",
                margin: "22px 0 0",
                maxWidth: "44ch",
              }}
            >
              LinkedIn matters most to this audience — client to supply a real
              URL. The other social icons on the current site are dead links and
              have been removed.
            </p>
          </div>

          <div
            style={{
              borderLeft: "1px solid var(--color-divider)",
              padding:
                "clamp(32px,5vw,80px) 0 clamp(32px,5vw,80px) clamp(20px,3vw,56px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ContactForm />
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "1px",
            background: "var(--color-divider)",
            borderLeft: "1px solid var(--color-divider)",
            borderRight: "1px solid var(--color-divider)",
          }}
        >
          <div style={{ background: "var(--color-bg)" }}>
            <div
              style={{
                padding: "16px clamp(14px,2vw,24px)",
                borderBottom: "1px solid var(--color-divider)",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Corporate office
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--color-neutral-600)",
                }}
              >
                Banani, Dhaka
              </span>
            </div>
            <div
              style={{
                aspectRatio: "16/10",
                background: "var(--color-neutral-200)",
                border: "1px dashed var(--color-neutral-400)",
                margin: "clamp(14px,2vw,24px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "20px",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                }}
              >
                Map embed
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "var(--color-neutral-700)",
                  maxWidth: "34ch",
                }}
              >
                Google Maps iframe goes here in build. Placeholder shown so the
                mockup loads without a third-party request.
              </span>
            </div>
          </div>
          <div style={{ background: "var(--color-bg)" }}>
            <div
              style={{
                padding: "16px clamp(14px,2vw,24px)",
                borderBottom: "1px solid var(--color-divider)",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                Factory
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--color-neutral-600)",
                }}
              >
                Zirabo, Ashulia
              </span>
            </div>
            <div
              style={{
                aspectRatio: "16/10",
                background: "var(--color-neutral-200)",
                border: "1px dashed var(--color-neutral-400)",
                margin: "clamp(14px,2vw,24px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "20px",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                }}
              >
                Map embed
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "var(--color-neutral-700)",
                  maxWidth: "34ch",
                }}
              >
                Google Maps iframe goes here in build.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
