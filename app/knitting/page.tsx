import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knitting",
  description:
    "16.5 tons of knit fabric a day on European circular knitting machines: single jersey, rib, interlock, fleece and jacquard for global apparel brands.",
  alternates: { canonical: "/knitting" },
  openGraph: { url: "/knitting" },
};

export default function KnittingPage() {
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
                "clamp(32px,5vw,80px) clamp(20px,3vw,56px) clamp(32px,5vw,80px) 0",
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
              ·{" "}
              <Link
                href="/capabilities"
                style={{ color: "var(--color-neutral-600)" }}
              >
                Capabilities
              </Link>{" "}
              · Knitting
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "18px",
                marginBottom: "14px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(40px,5.4vw,86px)",
                  fontWeight: 900,
                  lineHeight: ".8",
                  letterSpacing: "-.05em",
                  color: "var(--color-accent)",
                }}
              >
                01
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(34px,5vw,72px)",
                lineHeight: ".96",
                fontWeight: 900,
                letterSpacing: "-.04em",
                margin: "0 0 20px",
                animation: "cClip .9s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Knitting
            </h1>
            <p
              style={{
                fontSize: "clamp(16px,1.4vw,20px)",
                lineHeight: 1.5,
                color: "var(--color-neutral-800)",
                margin: "0 0 26px",
                maxWidth: "44ch",
                animation: "cUp .8s .15s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Flexible production runs across a wide variety of fabric styles,
              on European knitting technology.
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                animation: "cUp .8s .25s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Request fabric specs
              </Link>
              <Link href="/capabilities" className="btn btn-secondary">
                All departments
              </Link>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--color-divider)",
              minHeight: "clamp(240px,30vw,420px)",
              overflow: "hidden",
            }}
          >
            <img
              src="/uploads/texgen-images-optimized/05-factory/kn1.jpg"
              alt="Circular knitting machines with yarn cones in the Texgen knitting hall"
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
            padding:
              "clamp(36px,5vw,88px) clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(28px,4vw,72px)",
            alignItems: "start",
          }}
        >
          <div
            style={{
              animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 60%",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px,2.4vw,34px)",
                fontWeight: 900,
                letterSpacing: "-.03em",
                margin: "0 0 20px",
              }}
            >
              How the department runs
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 16px",
                maxWidth: "56ch",
              }}
            >
              Our knitting operations are driven by customer needs, offering
              flexible production runs and a wide variety of fabric styles.
              Premium yarns and precisely calibrated processes create fabrics
              that meet exact specifications for texture, strength, and colour,
              while upholding eco-friendly practices.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 24px",
                maxWidth: "56ch",
              }}
            >
              Whether for large orders or specialty designs, we deliver reliable
              quality and on-time service trusted by global brands. Texgen was
              among the first in Bangladesh to adopt European circular knitting
              technology, and that machine base still sets our tolerance for
              fabric consistency.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span className="tag tag-outline">Single jersey</span>
              <span className="tag tag-outline">Rib</span>
              <span className="tag tag-outline">Interlock</span>
              <span className="tag tag-outline">Fleece</span>
              <span className="tag tag-outline">Jacquard</span>
              <span className="tag tag-outline">Waffle</span>
              <span className="tag tag-outline">Pique</span>
            </div>
          </div>
          <div
            style={{
              border: "2px solid var(--color-text)",
              animation: "cUp .9s .1s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 60%",
            }}
          >
            <div
              style={{
                background: "var(--color-text)",
                color: "var(--color-bg)",
                padding: "14px clamp(16px,2vw,24px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                Specification
              </span>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  opacity: 0.6,
                }}
              >
                Placeholder values
              </span>
            </div>
            <table
              className="table"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                      width: "52%",
                    }}
                  >
                    Daily capacity
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    16.5 tons
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    Machine count
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    38 circular knitting machines
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    Gauges
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    18G – 32G
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    Diameters
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    18&quot; – 38&quot;
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    GSM range
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    110 – 380
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    Collars &amp; cuffs
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    8,500 sets / day
                  </td>
                </tr>
                <tr>
                  <th
                    style={{
                      textAlign: "left",
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    Yarn sources
                  </th>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "13px clamp(16px,2vw,24px)",
                    }}
                  >
                    Organic, BCI, recycled, conventional
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                borderTop: "1px solid var(--color-divider)",
                padding: "14px clamp(16px,2vw,24px)",
                fontSize: "12px",
                color: "var(--color-neutral-600)",
              }}
            >
              Machine list and gauge chart to be confirmed by the client before
              publishing.
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              borderLeft: "1px solid var(--color-divider)",
              borderRight: "1px solid var(--color-divider)",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                aspectRatio: "4/3",
                animation: "cCell .7s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/05-factory/kn1.jpg"
                alt="Knitting hall overview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                overflow: "hidden",
                aspectRatio: "4/3",
                animation: "cCell .7s .08s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/05-factory/kn2.jpg"
                alt="Circular knitting machine in operation"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                overflow: "hidden",
                aspectRatio: "4/3",
                animation: "cCell .7s .16s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/05-factory/kn3.jpg"
                alt="Yarn creel feeding the knitting machine"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
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
            padding:
              "clamp(32px,4vw,64px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "24px",
            }}
          >
            Next in the line
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
            }}
          >
            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                padding: "clamp(18px,2vw,26px)",
                display: "block",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  marginBottom: "8px",
                }}
              >
                02
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                Sample &amp; Development
              </div>
            </Link>
            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                padding: "clamp(18px,2vw,26px)",
                display: "block",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  marginBottom: "8px",
                }}
              >
                03
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                Cutting
              </div>
            </Link>
            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                padding: "clamp(18px,2vw,26px)",
                display: "block",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--color-accent)",
                  marginBottom: "8px",
                }}
              >
                04
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                Sewing
              </div>
            </Link>
            <Link
              href="/capabilities"
              style={{
                background: "var(--color-text)",
                color: "var(--color-bg)",
                padding: "clamp(18px,2vw,26px)",
                display: "block",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--color-accent-500)",
                  marginBottom: "8px",
                }}
              >
                Index
              </div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                All seven departments →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
