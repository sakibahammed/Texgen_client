import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 1999, Texgen Group is a vertically integrated knit fabric and garment manufacturer in Ashulia, Dhaka, producing 16.5 tons of fabric and 23,000 garments a day.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about" },
};

export default function AboutPage() {
  return (
    <>
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
                animation: "cUp .6s both",
              }}
            >
              <Link href="/" style={{ color: "var(--color-neutral-600)" }}>
                Home
              </Link>{" "}
              · About
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
                Twenty-seven years
              </span>
              <span
                style={{
                  display: "block",
                  animation: "cClip .9s .1s cubic-bezier(.2,.8,.2,1) both",
                  color: "var(--color-accent)",
                }}
              >
                of knit.
              </span>
            </h1>
            <p
              style={{
                fontSize: "clamp(15px,1.2vw,17px)",
                lineHeight: 1.6,
                color: "var(--color-neutral-800)",
                margin: 0,
                maxWidth: "48ch",
                animation: "cUp .8s .2s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              From a single knit fabric unit in 1999 to a vertically integrated
              composite and garment manufacturer serving global brands.
            </p>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--color-divider)",
              minHeight: "clamp(240px,30vw,440px)",
              overflow: "hidden",
            }}
          >
            <img
              src="/uploads/texgen-images-optimized/02-about/about-us-img-1.jpg"
              alt="Texgen Group corporate building exterior"
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
            padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(28px,4vw,72px)",
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
              Our story
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,3.4vw,48px)",
                lineHeight: 1.04,
                fontWeight: 900,
                letterSpacing: "-.035em",
                margin: "0 0 24px",
                maxWidth: "16ch",
              }}
            >
              From fabric to fashion, powered by commitment
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
              Founded in 1999 with strong entrepreneurship and skilled expertise,
              Texgen Group began as a knit fabric manufacturer serving global
              markets. It has since grown into a composite and garment
              manufacturer, pioneering the use of European knitting technology
              in Bangladesh.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 16px",
                maxWidth: "56ch",
              }}
            >
              Starting with a 3.0-ton daily capacity, Texgen now produces 16.5
              tons of knit fabric and 8,500 sets of collars and cuffs a day, and
              operates two garment units with 442 machines producing 15,000
              T-shirts and 8,000 polo shirts daily.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 20px",
                maxWidth: "56ch",
              }}
            >
              We are not the largest manufacturer in Bangladesh, and we don't
              try to be. Our strength is quality, commitment, and the ability to
              adapt to what each customer actually needs.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.6,
                color: "var(--color-neutral-700)",
                margin: 0,
                maxWidth: "56ch",
                borderLeft: "2px solid var(--color-accent)",
                paddingLeft: "16px",
              }}
            >
              Our manufacturing operations run through Radiance Knitwears
              Limited, our production facility in Ashulia, Dhaka.
            </p>
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
            <div
              style={{
                background: "var(--color-bg)",
                padding: "clamp(18px,2vw,28px)",
                animation: "cCell .7s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px,2.8vw,40px)",
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  lineHeight: 1,
                }}
              >
                1999
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginTop: "8px",
                }}
              >
                Founded
              </div>
            </div>
            <div
              style={{
                background: "var(--color-bg)",
                padding: "clamp(18px,2vw,28px)",
                animation: "cCell .7s .06s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px,2.8vw,40px)",
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  lineHeight: 1,
                }}
              >
                2,300
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginTop: "8px",
                }}
              >
                People
              </div>
            </div>
            <div
              style={{
                background: "var(--color-text)",
                color: "var(--color-bg)",
                padding: "clamp(18px,2vw,28px)",
                animation: "cCell .7s .12s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px,2.8vw,40px)",
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  lineHeight: 1,
                }}
              >
                16.5<span style={{ color: "var(--color-accent-500)" }}>t</span>
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  opacity: .6,
                  marginTop: "8px",
                }}
              >
                Knit fabric / day
              </div>
            </div>
            <div
              style={{
                background: "var(--color-bg)",
                padding: "clamp(18px,2vw,28px)",
                animation: "cCell .7s .18s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px,2.8vw,40px)",
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  lineHeight: 1,
                }}
              >
                8,500
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginTop: "8px",
                }}
              >
                Collar &amp; cuff sets / day
              </div>
            </div>
            <div
              style={{
                background: "var(--color-bg)",
                padding: "clamp(18px,2vw,28px)",
                animation: "cCell .7s .24s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px,2.8vw,40px)",
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  lineHeight: 1,
                }}
              >
                442
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginTop: "8px",
                }}
              >
                Machines · 2 units
              </div>
            </div>
            <div
              style={{
                background: "var(--color-bg)",
                padding: "clamp(18px,2vw,28px)",
                animation: "cCell .7s .3s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(26px,2.8vw,40px)",
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  lineHeight: 1,
                  color: "var(--color-accent)",
                }}
              >
                23,000
              </div>
              <div
                style={{
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--color-neutral-600)",
                  marginTop: "8px",
                }}
              >
                Garments / day
              </div>
            </div>
            <div
              style={{
                background: "var(--color-bg)",
                gridColumn: "1/-1",
                overflow: "hidden",
                aspectRatio: "16/7",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-growth-img.jpg"
                alt="Texgen Group production growth"
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
            padding: "0 clamp(12px,2vw,28px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          }}
        >
          <div
            style={{
              minHeight: "clamp(260px,32vw,480px)",
              overflow: "hidden",
              order: 1,
            }}
          >
            <img
              src="/uploads/texgen-images-optimized/02-about/mission-vission.jpg"
              alt="Texgen Group mission and vision"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                animation: "cPan linear both",
                animationTimeline: "view()",
              }}
            />
          </div>
          <div
            style={{
              padding:
                "clamp(36px,5vw,90px) 0 clamp(36px,5vw,90px) clamp(20px,3vw,56px)",
              borderLeft: "1px solid var(--color-divider)",
              order: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
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
                marginBottom: "22px",
              }}
            >
              Mission &amp; commitment
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,2.8vw,40px)",
                lineHeight: 1.1,
                fontWeight: 900,
                letterSpacing: "-.03em",
                margin: "0 0 22px",
                maxWidth: "20ch",
              }}
            >
              Meet the exact standard each customer sets
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 18px",
                maxWidth: "50ch",
              }}
            >
              <b>Our mission</b> is to deliver products that meet the exact
              standard each customer sets — verified at every stage, from yarn
              sourcing through final inspection.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.65,
                color: "var(--color-neutral-800)",
                margin: "0 0 20px",
                maxWidth: "50ch",
              }}
            >
              <b>Our commitment</b> extends past product quality. We hold our
              facilities and our suppliers to international social and
              environmental standards, and we have adopted the SA8000 social
              accountability standard as the workplace code of conduct across
              our production network.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-neutral-600)",
                margin: 0,
                maxWidth: "50ch",
              }}
            >
              Client to confirm the SA8000 reference before publishing.
            </p>
          </div>
        </div>
      </section>

      <section
        id="leadership"
        style={{ borderBottom: "1px solid var(--color-divider)" }}
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
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "clamp(28px,4vw,52px)",
              animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 60%",
            }}
          >
            <div>
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
                Leadership
              </div>
              <h2
                style={{
                  fontSize: "clamp(26px,3.6vw,52px)",
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing: "-.035em",
                  margin: 0,
                  maxWidth: "16ch",
                }}
              >
                The people accountable for it
              </h2>
            </div>
            <p
              style={{
                maxWidth: "34ch",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-neutral-700)",
                margin: 0,
              }}
            >
              Three directors, one operating standard. Reach any of them through
              the enquiry desk.
            </p>
          </div>

          <article
            style={{
              borderTop: "2px solid var(--color-text)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: "clamp(20px,3vw,56px)",
              padding: "clamp(24px,3vw,44px) 0",
              animation: "cUp .8s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 55%",
            }}
          >
            <div>
              <div
                style={{
                  aspectRatio: "1",
                  background: "var(--color-neutral-200)",
                  border: "1px dashed var(--color-neutral-400)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "20px",
                  gap: "8px",
                  maxWidth: "280px",
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
                  Portrait placeholder
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.5,
                    color: "var(--color-neutral-700)",
                  }}
                >
                  Individual headshot required — the supplied file is one
                  combined 1667×1667 image of all three directors.
                </span>
              </div>
              <h3
                style={{
                  fontSize: "clamp(20px,2vw,28px)",
                  fontWeight: 900,
                  letterSpacing: "-.02em",
                  margin: "20px 0 4px",
                }}
              >
                SK. Abdus Salam
              </h3>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                }}
              >
                Managing Director
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "var(--color-neutral-800)",
                  margin: "0 0 16px",
                  maxWidth: "58ch",
                }}
              >
                At Texgen Group, we measure success not only by the garments we
                produce, but by the relationships we build and the positive
                impact we create. Over the past two decades, we have transformed
                from a small knit fabric producer into a vertically integrated
                textile and garment manufacturer serving global brands.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "var(--color-neutral-800)",
                  margin: "0 0 16px",
                  maxWidth: "58ch",
                }}
              >
                This journey has been possible because of our dedicated team,
                trusted partners, and a shared commitment to innovation,
                transparency, and ethical practices. Looking ahead, my priority
                is to strengthen that foundation — investing in new technology,
                empowering our workforce, and adopting sustainable processes
                that safeguard the environment for future generations.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: "var(--color-neutral-800)",
                  margin: 0,
                  maxWidth: "58ch",
                }}
              >
                I invite you to grow with us as we continue to deliver
                world-class quality with a conscience.
              </p>
            </div>
          </article>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "clamp(20px,3vw,48px)",
              borderTop: "1px solid var(--color-divider)",
              paddingTop: "clamp(24px,3vw,44px)",
            }}
          >
            <article
              style={{
                animation: "cUp .8s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  aspectRatio: "4/3",
                  background: "var(--color-neutral-200)",
                  border: "1px dashed var(--color-neutral-400)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
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
                  Portrait placeholder
                </span>
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  letterSpacing: "-.02em",
                  margin: "18px 0 4px",
                }}
              >
                SK. Yamin
              </h3>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "14px",
                }}
              >
                Director
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-800)",
                  margin: 0,
                }}
              >
                Since 1999 our vision has been to create textiles and garments
                that combine quality, innovation and responsible practice.
                Success is measured not just by capacity, but by the impact we
                create for customers, employees and the environment.
              </p>
            </article>
            <article
              style={{
                animation: "cUp .8s .1s cubic-bezier(.2,.8,.2,1) both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 50%",
              }}
            >
              <div
                style={{
                  aspectRatio: "4/3",
                  background: "var(--color-neutral-200)",
                  border: "1px dashed var(--color-neutral-400)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
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
                  Portrait placeholder
                </span>
              </div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  letterSpacing: "-.02em",
                  margin: "18px 0 4px",
                }}
              >
                SK. Sabbir Hossain
              </h3>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "14px",
                }}
              >
                Director
              </div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--color-neutral-800)",
                  margin: 0,
                }}
              >
                True success goes beyond production numbers — it lies in the
                trust we earn and the long-term relationships we nurture. Our
                priority is modern technology, continuous skill development and
                responsible manufacturing.
              </p>
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
            padding: "clamp(36px,5vw,80px) clamp(12px,2vw,28px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "clamp(22px,3vw,40px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px,2.6vw,34px)",
                fontWeight: 900,
                letterSpacing: "-.03em",
                margin: 0,
              }}
            >
              Brands we produce for
            </h2>
            <p
              style={{
                fontSize: "12px",
                color: "var(--color-neutral-600)",
                margin: 0,
                maxWidth: "40ch",
              }}
            >
              Programme details and volumes available on request under NDA.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: "1px",
              background: "var(--color-divider)",
              border: "1px solid var(--color-divider)",
            }}
          >
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-1.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s .05s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-2.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s .1s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-3.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s .15s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-4.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s .2s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-5.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s .25s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-6.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                background: "#fff",
                aspectRatio: "5/2",
                display: "grid",
                placeItems: "center",
                padding: "18px",
                animation: "cCell .6s .3s both",
                animationTimeline: "view()",
                animationRange: "entry 0% entry 45%",
              }}
            >
              <img
                src="/uploads/texgen-images-optimized/02-about/company-logo-7.png"
                alt="Buyer brand logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-accent)", color: "#fff" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px)",
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
              maxWidth: "17ch",
              animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 55%",
            }}
          >
            Come and see the floor for yourself.
          </h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="btn"
              style={{ background: "#fff", color: "var(--color-accent)" }}
            >
              Book an audit visit
            </Link>
            <Link
              href="/capabilities"
              className="btn btn-secondary"
              style={{ borderColor: "rgba(255,255,255,.6)", color: "#fff" }}
            >
              See capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
