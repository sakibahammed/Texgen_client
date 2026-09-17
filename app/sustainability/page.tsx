import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sustainability & Compliance",
  description:
    "Fifteen certifications across quality, environment, chemical safety and social accountability — GOTS, GRS, OEKO-TEX, WRAP, amfori BSCI, SEDEX, ISO 9001 and 14001.",
  alternates: { canonical: "/sustainability" },
  openGraph: { url: "/sustainability" },
};

export default function SustainabilityPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          }}
        >
          <div
            style={{
              padding:
                "clamp(32px,5vw,88px) clamp(20px,3vw,56px) clamp(32px,5vw,88px) 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
              · Sustainability & Compliance
            </div>
            <h1
              style={{
                fontSize: "clamp(32px,4.6vw,72px)",
                lineHeight: ".98",
                fontWeight: 900,
                letterSpacing: "-.04em",
                margin: "0 0 22px",
              }}
            >
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                Audited, certified,
              </span>
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s .1s cubic-bezier(.2,.8,.2,1) both",
                  color: "var(--color-accent)",
                }}
              >
                open to inspection.
              </span>
            </h1>
            <p
              style={{
                fontSize: "clamp(15px,1.2vw,17px)",
                lineHeight: 1.6,
                color: "var(--color-neutral-800)",
                margin: "0 0 26px",
                maxWidth: "48ch",
                animation: "cUp .8s .2s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Five pillars — environment, social, material, governance and
              certification. We hold our facilities and our suppliers to
              international social and environmental standards.
            </p>
            <a
              href="#certifications"
              className="btn btn-primary"
              style={{
                alignSelf: "flex-start",
                animation: "cUp .8s .3s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Jump to certifications
            </a>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--color-divider)",
              minHeight: "clamp(240px,30vw,440px)",
              overflow: "hidden",
            }}
          >
            <img
              src="/uploads/texgen-images-optimized/07-sustainability/Sustainability3.jpg"
              alt="Cotton growing in the field"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                animation: "cPan linear both",
                animationTimeline: "view()",
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,90px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "20px",
            }}
          >
            Environment
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
            }}
          >
            <article
              style={{
                background: "var(--color-bg)",
                animation: "cCell .7s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/07-sustainability/Sustainability11.jpg"
                  alt="Sustainable fashion illustration"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Recycled fashion
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--color-neutral-700)",
                    margin: 0,
                  }}
                >
                  By choosing high-quality recycled fabrics, yarns and trims, we
                  give materials a second life — creating garments that unite
                  style with sustainability.
                </p>
              </div>
            </article>
            <article
              style={{
                background: "var(--color-bg)",
                animation: "cCell .7s .08s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/07-sustainability/Sustainability2.jpg"
                  alt="Solar panels and wind turbines"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Solar energy project
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 12px",
                  }}
                >
                  By harnessing solar power we meet a significant portion of our
                  daily energy needs through renewable sources — reducing
                  operational costs and supporting our long-term goal of
                  carbon-neutral manufacturing.
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--color-neutral-600)",
                    margin: 0,
                  }}
                >
                  Installed capacity (kW) and share of load to be supplied by
                  the client.
                </p>
              </div>
            </article>
            <article
              style={{
                background: "var(--color-bg)",
                animation: "cCell .7s .16s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/07-sustainability/Sustainability5.jpg"
                  alt="Cotton bolls on the plant"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Sustainable fibre & cotton
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 12px",
                  }}
                >
                  Organic, BCI and U.S. Cotton Trust Protocol fibres sourced
                  through verified suppliers, with chain-of-custody
                  documentation available per order.
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--color-neutral-600)",
                    margin: 0,
                  }}
                >
                  Placeholder copy — the live site is missing this section
                  entirely. Client to supply.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        style={{
          borderBottom: "1px solid var(--color-divider)",
          background: "var(--color-neutral-100)",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,90px) clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "clamp(28px,4vw,64px)",
          }}
        >
          <div
            style={{
              animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 60%",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "20px",
              }}
            >
              Social
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,2.6vw,36px)",
                fontWeight: 900,
                letterSpacing: "-.03em",
                margin: "0 0 20px",
                maxWidth: "18ch",
              }}
            >
              2,300 people, and the community around them
            </h2>
            <div
              style={{
                borderTop: "2px solid var(--color-text)",
                paddingTop: "20px",
                marginBottom: "22px",
              }}
            >
              <h3
                style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 8px" }}
              >
                Community investment
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-800)",
                  margin: 0,
                  maxWidth: "52ch",
                }}
              >
                We extend care beyond our workplace by supporting education for
                underprivileged students, assisting autism and special-needs
                schools, and contributing to social welfare activities.
              </p>
            </div>
            <div
              style={{
                borderTop: "1px solid var(--color-divider)",
                paddingTop: "20px",
              }}
            >
              <h3
                style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 8px" }}
              >
                Equal opportunity
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-800)",
                  margin: 0,
                  maxWidth: "52ch",
                }}
              >
                Our focus on equal opportunity ensures all individuals have fair
                access to career advancement, skills development and
                decision-making roles, with ongoing awareness programmes and
                supportive policies.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
              alignContent: "start",
            }}
          >
            <div style={{ overflow: "hidden", aspectRatio: "1" }}>
              <img
                src="/uploads/texgen-images-optimized/07-sustainability/Sustainability1.png"
                alt="Equal opportunity illustration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  background: "#fff",
                }}
              />
            </div>
            <div style={{ overflow: "hidden", aspectRatio: "1" }}>
              <img
                src="/uploads/texgen-images-optimized/09-gallery/emp2.jpg"
                alt="Employee engagement event"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ overflow: "hidden", aspectRatio: "1" }}>
              <img
                src="/uploads/texgen-images-optimized/09-gallery/emp5.jpg"
                alt="Annual employee outing"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ overflow: "hidden", aspectRatio: "1" }}>
              <img
                src="/uploads/texgen-images-optimized/09-gallery/emp1.jpg"
                alt="Employee awards ceremony"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(36px,5vw,90px) clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "1px",
            background: "var(--color-divider)",
            border: "1px solid var(--color-divider)",
          }}
        >
          <article
            style={{
              background: "var(--color-bg)",
              display: "grid",
              gridTemplateRows: "auto 1fr",
            }}
          >
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <img
                src="/uploads/texgen-images-optimized/07-sustainability/VIGNETTE-OEKO-TEX.jpg"
                alt="OEKO-TEX Standard 100 on green fabric"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(18px,2vw,30px)" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "12px",
                }}
              >
                Material
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                  margin: "0 0 10px",
                }}
              >
                OEKO-TEX®
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-700)",
                  margin: 0,
                }}
              >
                OEKO-TEX® ensures textiles are free from a wide range of harmful
                substances, including chemicals, pesticides and heavy metals. We
                have undergone rigorous testing and inspection to confirm full
                compliance.
              </p>
            </div>
          </article>
          <article
            style={{
              background: "var(--color-bg)",
              display: "grid",
              gridTemplateRows: "auto 1fr",
            }}
          >
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <img
                src="/uploads/texgen-images-optimized/05-factory/store3.jpg"
                alt="Yarn and fabric store"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(18px,2vw,30px)" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "12px",
                }}
              >
                Material
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                  margin: "0 0 10px",
                }}
              >
                Recycled yarn & fibre
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-700)",
                  margin: 0,
                }}
              >
                Textile waste recycling cuts waste generation, conserves
                resources and lowers carbon footprint. We source recycled yarn
                from approved mills and use it in production to manufacture
                fabrics and garments with reduced environmental impact.
              </p>
            </div>
          </article>
          <article
            style={{
              background: "var(--color-bg)",
              display: "grid",
              gridTemplateRows: "auto 1fr",
            }}
          >
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <img
                src="/uploads/texgen-images-optimized/07-sustainability/Corporate-Governance.jpg"
                alt="Governance building blocks"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(18px,2vw,30px)" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "12px",
                }}
              >
                Governance
              </div>
              <h2
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                  margin: "0 0 10px",
                }}
              >
                How decisions get made
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-700)",
                  margin: 0,
                }}
              >
                Strong governance is the foundation of sustainable growth. Our
                management practices emphasise transparency, accountability and
                ethical decision-making at every level, backed by clear policies
                and compliance.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="certifications"
        style={{ background: "var(--color-accent)", color: "#fff" }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "28px",
              flexWrap: "wrap",
              marginBottom: "clamp(26px,3vw,44px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px,4.6vw,72px)",
                lineHeight: ".98",
                fontWeight: 900,
                letterSpacing: "-.04em",
                margin: 0,
                maxWidth: "15ch",
                animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 55%",
              }}
            >
              Fifteen standards. Audit us on any of them.
            </h2>
            <p
              style={{
                maxWidth: "32ch",
                fontSize: "14px",
                lineHeight: 1.6,
                opacity: 0.9,
                margin: 0,
              }}
            >
              Filter by what your compliance team is checking. Certificates and
              expiry dates supplied on request.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0,
              border: "1px solid rgba(255,255,255,.45)",
              marginBottom: "clamp(20px,2.4vw,32px)",
              width: "max-content",
              maxWidth: "100%",
            }}
          >
            <button
              type="button"
              style={{
                appearance: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                border: 0,
                borderRight: "1px solid rgba(255,255,255,.45)",
                padding: "12px clamp(14px,1.6vw,22px)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                background: "#fff",
                color: "var(--color-accent)",
              }}
            >
              All
            </button>
            <button
              type="button"
              style={{
                appearance: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                border: 0,
                borderRight: "1px solid rgba(255,255,255,.45)",
                padding: "12px clamp(14px,1.6vw,22px)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              Quality
            </button>
            <button
              type="button"
              style={{
                appearance: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                border: 0,
                borderRight: "1px solid rgba(255,255,255,.45)",
                padding: "12px clamp(14px,1.6vw,22px)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              Environment
            </button>
            <button
              type="button"
              style={{
                appearance: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                border: 0,
                borderRight: "1px solid rgba(255,255,255,.45)",
                padding: "12px clamp(14px,1.6vw,22px)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              Social
            </button>
            <button
              type="button"
              style={{
                appearance: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                border: 0,
                borderRight: "1px solid rgba(255,255,255,.45)",
                padding: "12px clamp(14px,1.6vw,22px)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                background: "transparent",
                color: "#fff",
              }}
            >
              Material
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))",
              gap: "1px",
              background: "rgba(255,255,255,.4)",
              border: "1px solid rgba(255,255,255,.4)",
            }}
          >
            {[
              {
                group: "Material",
                name: "GOTS",
                note: "Global Organic Textile Standard — organic fibre processing and chain of custody.",
              },
              {
                group: "Material",
                name: "OCS / Organic 100",
                note: "Organic Content Standard, verifying organic material content.",
              },
              {
                group: "Material",
                name: "OEKO-TEX® Standard 100",
                note: "Tested for harmful substances across all components.",
              },
              {
                group: "Environment",
                name: "GRS",
                note: "Global Recycled Standard — recycled content, chain of custody and social criteria.",
              },
              {
                group: "Social",
                name: "WRAP",
                note: "Worldwide Responsible Accredited Production.",
              },
              {
                group: "Social",
                name: "amfori BSCI",
                note: "Social compliance auditing across the supply chain.",
              },
              {
                group: "Social",
                name: "SEDEX",
                note: "Membership — responsible sourcing data platform.",
              },
              {
                group: "Social",
                name: "RSC",
                note: "RMG Sustainability Council — successor to the Accord programme.",
              },
              {
                group: "Environment",
                name: "Higg FEM + FSLM",
                note: "Facility Environmental and Social & Labor Modules.",
              },
              {
                group: "Quality",
                name: "ISO 9001",
                note: "Quality management system.",
              },
              {
                group: "Environment",
                name: "ISO 14001",
                note: "Environmental management system.",
              },
              {
                group: "Material",
                name: "Cotton USA™ / U.S. Cotton Trust Protocol",
                note: "Verified U.S. cotton sourcing.",
              },
              {
                group: "Quality",
                name: "GMP",
                note: "Good Manufacturing Practices.",
              },
              {
                group: "Social",
                name: "ACCORD",
                note: "Fire and Building Safety in Bangladesh.",
              },
              {
                group: "Quality",
                name: "TQCSI",
                note: "Third-party certification body — ISO 9001:2015.",
              },
            ].map((c) => (
              <div
                key={c.name}
                style={{
                  background: "#fff",
                  color: "var(--color-text)",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  animation: "cCell .5s cubic-bezier(.2,.8,.2,1) both",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  {c.group}
                </div>
                <div
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "var(--color-neutral-700)",
                  }}
                >
                  {c.note}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(96px,1fr))",
              gap: "1px",
              background: "rgba(255,255,255,.4)",
              border: "1px solid rgba(255,255,255,.4)",
              borderTop: 0,
              marginBottom: "24px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((n) => (
              <div
                key={n}
                style={{
                  background: "#fff",
                  aspectRatio: "1",
                  display: "grid",
                  placeItems: "center",
                  padding: "12px",
                }}
              >
                <img
                  src={`/uploads/texgen-images-optimized/03-certifications/expertise-image-${n}.jpg`}
                  alt="Certification badge"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", opacity: 0.85, margin: 0 }}>
            Client must confirm which certifications are currently valid and
            supply expiry dates before publishing.
          </p>
        </div>
      </section>
    </div>
  );
}
