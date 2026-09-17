import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Texgen Group in Ashulia, Dhaka. Open roles in merchandising, quality assurance and industrial engineering, plus learning and development programmes.",
  alternates: { canonical: "/careers" },
  openGraph: { url: "/careers" },
};

export default function CareersPage() {
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
              · Careers
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
                2,300 people
              </span>
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s .1s cubic-bezier(.2,.8,.2,1) both",
                  color: "var(--color-accent)",
                }}
              >
                and counting.
              </span>
            </h1>
            <p
              style={{
                fontSize: "clamp(15px,1.2vw,17px)",
                lineHeight: 1.6,
                color: "var(--color-neutral-800)",
                margin: "0 0 26px",
                maxWidth: "50ch",
                animation: "cUp .8s .2s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              At Texgen Group, our people are our greatest asset. We offer a
              dynamic, inclusive and growth-oriented environment where
              innovation, teamwork and excellence are valued.
            </p>
            <a
              href="mailto:careers@texgengroup.com?subject=Application%3A%20Texgen%20Group"
              className="btn btn-primary"
              style={{
                alignSelf: "flex-start",
                animation: "cUp .8s .3s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Apply now
            </a>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--color-divider)",
              minHeight: "clamp(240px,30vw,420px)",
              overflow: "hidden",
            }}
          >
            <img
              src="/uploads/texgen-images-optimized/09-gallery/emp2.jpg"
              alt="Texgen Group team at an annual outing"
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "clamp(24px,3vw,40px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(24px,3vw,44px)",
                fontWeight: 900,
                letterSpacing: "-.035em",
                margin: 0,
              }}
            >
              Open positions
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--color-neutral-700)",
                margin: 0,
                maxWidth: "38ch",
              }}
            >
              Roles listed below are placeholders. If nothing fits, send your CV
              anyway — we keep a live pool.
            </p>
          </div>
          <div style={{ borderTop: "2px solid var(--color-text)" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "clamp(8px,1.6vw,24px)",
                alignItems: "center",
                padding: "clamp(16px,2vw,24px) clamp(8px,1.2vw,16px)",
                borderBottom: "1px solid var(--color-divider)",
                animation: "cUp .6s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(17px,1.8vw,22px)",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                Senior Merchandiser
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-neutral-700)",
                }}
              >
                Merchandising · Banani, Dhaka
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-neutral-700)",
                }}
              >
                Full time · 5+ years
              </div>
              <a
                href="mailto:careers@texgengroup.com?subject=Application%3A%20Senior%20Merchandiser"
                className="btn btn-secondary"
                style={{ justifySelf: "start", fontSize: "12px" }}
              >
                Apply
              </a>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "clamp(8px,1.6vw,24px)",
                alignItems: "center",
                padding: "clamp(16px,2vw,24px) clamp(8px,1.2vw,16px)",
                borderBottom: "1px solid var(--color-divider)",
                animation: "cUp .6s .06s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(17px,1.8vw,22px)",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                QA Manager
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-neutral-700)",
                }}
              >
                Quality · Ashulia, Savar
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-neutral-700)",
                }}
              >
                Full time · 7+ years
              </div>
              <a
                href="mailto:careers@texgengroup.com?subject=Application%3A%20QA%20Manager"
                className="btn btn-secondary"
                style={{ justifySelf: "start", fontSize: "12px" }}
              >
                Apply
              </a>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: "clamp(8px,1.6vw,24px)",
                alignItems: "center",
                padding: "clamp(16px,2vw,24px) clamp(8px,1.2vw,16px)",
                borderBottom: "2px solid var(--color-text)",
                animation: "cUp .6s .12s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(17px,1.8vw,22px)",
                  fontWeight: 800,
                  letterSpacing: "-.02em",
                }}
              >
                Industrial Engineer
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-neutral-700)",
                }}
              >
                IE · Ashulia, Savar
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--color-neutral-700)",
                }}
              >
                Full time · 3+ years
              </div>
              <a
                href="mailto:careers@texgengroup.com?subject=Application%3A%20Industrial%20Engineer"
                className="btn btn-secondary"
                style={{ justifySelf: "start", fontSize: "12px" }}
              >
                Apply
              </a>
            </div>
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-neutral-700)",
              margin: "18px 0 0",
            }}
          >
            No open roles right now? Send your CV to{" "}
            <a href="mailto:careers@texgengroup.com">careers@texgengroup.com</a>{" "}
            — address to be confirmed by the client;{" "}
            <span style={{ whiteSpace: "nowrap" }}>info@</span> is not
            appropriate for applications.
          </p>
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
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "1px",
            background: "var(--color-divider)",
            border: "1px solid var(--color-divider)",
          }}
        >
          <article
            style={{
              background: "var(--color-bg)",
              padding: "clamp(22px,3vw,44px)",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "16px",
              }}
            >
              Quality assurance
            </div>
            <h2
              style={{
                fontSize: "clamp(20px,2.2vw,30px)",
                fontWeight: 900,
                letterSpacing: "-.03em",
                margin: "0 0 16px",
                maxWidth: "20ch",
              }}
            >
              Kaizen, TQM and root-cause discipline
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: 0,
              }}
            >
              We operate with a strong commitment to Quality Assurance and
              continuous improvement, guided by Kaizen principles. QA is
              integrated at every stage of production. We practise Total Quality
              Management, where teams collaborate to identify problems, analyse
              root causes, and implement corrective and preventive action —
              driving measurable gains in productivity, quality, cost and
              workplace safety.
            </p>
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
                src="/uploads/texgen-images-optimized/08-career/learning.jpg"
                alt="Learning and development programme"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(22px,3vw,44px)" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "16px",
                }}
              >
                Learning &amp; development
              </div>
              <h2
                style={{
                  fontSize: "clamp(20px,2.2vw,30px)",
                  fontWeight: 900,
                  letterSpacing: "-.03em",
                  margin: "0 0 16px",
                  maxWidth: "20ch",
                }}
              >
                Careers that grow with the business
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "var(--color-neutral-800)",
                  margin: 0,
                }}
              >
                Continuous learning is essential to both employee growth and
                organisational success. Our development programmes build
                technical expertise, leadership qualities and positive work
                practices, aligning individual career growth with business
                needs.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(30px,4vw,60px) clamp(12px,2vw,28px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(20px,2.2vw,30px)",
              fontWeight: 900,
              letterSpacing: "-.03em",
              margin: "0 0 20px",
            }}
          >
            Programmes
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
            }}
          >
            <article style={{ background: "var(--color-bg)" }}>
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/08-career/progrm1.jpg"
                  alt="Training session in the factory meeting room"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  Programme title
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: 0,
                  }}
                >
                  Placeholder — the image exists with no accompanying copy on
                  the live site. Client to supply the programme name and
                  description, or the section gets cut.
                </p>
              </div>
            </article>
            <article style={{ background: "var(--color-bg)" }}>
              <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                <img
                  src="/uploads/texgen-images-optimized/08-career/program2.jpg"
                  alt="Award presentation at an industry event"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    margin: "0 0 8px",
                  }}
                >
                  Programme title
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: "var(--color-neutral-700)",
                    margin: 0,
                  }}
                >
                  Placeholder — client to supply the programme name and
                  description.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="apply"
        style={{ borderBottom: "1px solid var(--color-divider)" }}
      >
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
                "clamp(36px,5vw,90px) clamp(20px,3vw,56px) clamp(36px,5vw,90px) 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px,3.6vw,52px)",
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-.035em",
                margin: "0 0 20px",
                maxWidth: "13ch",
              }}
            >
              Send us your CV
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 28px",
                maxWidth: "44ch",
              }}
            >
              Tell us the role you&apos;re after. HR reviews applications weekly
              and replies to shortlisted candidates within two weeks.
            </p>
            <div
              style={{
                borderTop: "2px solid var(--color-text)",
                paddingTop: "20px",
                display: "grid",
                gap: "16px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "6px",
                  }}
                >
                  Factory
                </div>
                <div style={{ fontSize: "14px", lineHeight: 1.5 }}>
                  Radiance Knitwears Ltd., Dewan Idris Road, Zirabo, Ashulia,
                  Savar, Dhaka 1341
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "var(--color-neutral-600)",
                    marginBottom: "6px",
                  }}
                >
                  HR email
                </div>
                <a
                  href="mailto:careers@texgengroup.com"
                  style={{ fontSize: "14px" }}
                >
                  careers@texgengroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
