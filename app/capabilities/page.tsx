import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Seven in-house departments: knitting, sample development, cutting, sewing, finishing, testing lab and store — 16.5 tons of fabric and 23,000 garments a day.",
  alternates: { canonical: "/capabilities" },
  openGraph: { url: "/capabilities" },
};

export default function CapabilitiesPage() {
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
              · Capabilities
            </div>
            <h1
              style={{
                fontSize: "clamp(34px,5vw,76px)",
                lineHeight: ".96",
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
                Seven departments,
              </span>
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s .1s cubic-bezier(.2,.8,.2,1) both",
                  color: "var(--color-accent)",
                }}
              >
                one roof.
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
              Yarn arrives at our store and inspected cartons leave it. Nothing
              critical is subcontracted, so nothing critical is outside your
              audit.
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                animation: "cUp .8s .3s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Request the capacity sheet
              </Link>
            </div>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--color-divider)",
              minHeight: "clamp(240px,30vw,440px)",
              overflow: "hidden",
            }}
          >
            <img
              src="/uploads/texgen-images-optimized/05-factory/Sewing1.jpg"
              alt="Sewing floor at Radiance Knitwears"
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

      <section
        style={{
          borderBottom: "1px solid var(--color-divider)",
          background: "var(--color-text)",
          color: "var(--color-bg)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(28px,4vw,56px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--color-accent-500)",
              marginBottom: "22px",
            }}
          >
            Process flow
          </div>
          <div
            style={{
              display: "flex",
              gap: 0,
              flexWrap: "wrap",
              alignItems: "stretch",
              borderTop: "2px solid rgba(243,242,242,.25)",
              borderLeft: "1px solid rgba(243,242,242,.18)",
            }}
          >
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                01
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>Yarn in</div>
            </div>
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                02
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>Knitting</div>
            </div>
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                03
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>Sampling</div>
            </div>
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                04
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>Cutting</div>
            </div>
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                05
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>Sewing</div>
            </div>
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                06
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>
                Finishing &amp; QC
              </div>
            </div>
            <div
              style={{
                flex: "1 1 130px",
                borderRight: "1px solid rgba(243,242,242,.18)",
                padding: "16px 14px",
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
                07
              </div>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>
                Carton out
              </div>
            </div>
          </div>
          <div
            style={{
              height: "3px",
              background: "rgba(243,242,242,.18)",
              marginTop: "2px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--color-accent)",
                transformOrigin: "0 50%",
                animation: "cGrow linear both",
                animationTimeline: "view()",
                animationRange: "entry 0% cover 60%",
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
            padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
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
                display: "block",
                animation: "cCell .7s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/kn1.jpg"
                  alt="Circular knitting machines with yarn cones"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    01
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    16.5 t/day
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Knitting
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  Flexible production runs across a wide variety of fabric
                  styles.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                display: "block",
                animation: "cCell .7s .06s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/Sample1.jpg"
                  alt="Sample and development room"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    02
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    7-day turnaround
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Sample &amp; Development
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  Prototypes that let buyers confirm fit, style and finish
                  before bulk.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                display: "block",
                animation: "cCell .7s .12s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/cutting1.jpg"
                  alt="Automated fabric spreading table"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    03
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    12 tables
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Cutting
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  Automated cutting with precise pattern alignment and minimal
                  waste.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                display: "block",
                animation: "cCell .7s .18s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/Sewing2.jpg"
                  alt="Sewing line with operators"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    04
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    47+ lines
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Sewing
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  442 machines across two garment units, 23,000 pieces a day.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                display: "block",
                animation: "cCell .7s .24s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/Finishing1.jpg"
                  alt="Finishing and packing section"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    05
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    23,000 pcs/day
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Finishing
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  Pressing, trimming and final QC before shipment.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                display: "block",
                animation: "cCell .7s .3s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/TestingLab1.jpg"
                  alt="In-house testing laboratory"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    06
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    In-house
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Testing Lab
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  Colour fastness, shrinkage, strength and durability testing.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <Link
              href="/knitting"
              style={{
                background: "var(--color-bg)",
                color: "var(--color-text)",
                display: "block",
                animation: "cCell .7s .36s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/05-factory/store1.jpg"
                  alt="Climate-controlled store"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "clamp(18px,2vw,28px)" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                    }}
                  >
                    07
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--color-neutral-600)",
                    }}
                  >
                    Real-time tracking
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2vw,28px)",
                    fontWeight: 800,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  Store &amp; Inventory
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: "0 0 14px",
                  }}
                >
                  Climate-controlled storage with real-time inventory tracking.
                </p>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)",
                  }}
                >
                  View department →
                </span>
              </div>
            </Link>

            <div
              style={{
                background: "var(--color-accent)",
                color: "#fff",
                padding: "clamp(20px,2.4vw,36px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "16px",
                animation: "cCell .7s .42s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                }}
              >
                Need the numbers?
              </div>
              <p
                style={{
                  fontSize: "clamp(17px,1.8vw,24px)",
                  lineHeight: 1.25,
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                  margin: 0,
                }}
              >
                Machine lists, gauges and per-department capacity are available
                on request.
              </p>
              <Link
                href="/contact"
                className="btn"
                style={{
                  background: "#fff",
                  color: "var(--color-accent)",
                  alignSelf: "flex-start",
                }}
              >
                Ask us
              </Link>
            </div>
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "var(--color-neutral-600)",
              margin: "18px 0 0",
            }}
          >
            All seven detail pages share one template. Knitting is built out as
            the reference; the rest follow once the client supplies machine
            lists and capacities.
          </p>
        </div>
      </section>
    </div>
  );
}
