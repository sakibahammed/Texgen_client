import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Texgen Group — Precision knitwear, engineered for global brands",
  },
  description: "Texgen Group — Precision knitwear, engineered for global brands",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <section id="top" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", borderLeft: "1px solid var(--color-divider)" }}>

            <div style={{ gridColumn: "span 2", borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", padding: "clamp(28px,4vw,64px) clamp(20px,2.4vw,40px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "clamp(240px,32vw,420px)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "22px", animation: "cUp .7s both" }}>Knit fabric &amp; garment manufacturing · Dhaka</div>
              <h1 style={{ fontSize: "clamp(36px,5.2vw,80px)", lineHeight: ".94", fontWeight: 900, letterSpacing: "-.04em", margin: 0 }}>
                <span style={{ display: "block", animation: "cClip 1s cubic-bezier(.2,.8,.2,1) both" }}>Precision</span>
                <span style={{ display: "block", animation: "cClip 1s .1s cubic-bezier(.2,.8,.2,1) both" }}>knitwear,</span>
                <span style={{ display: "block", animation: "cWide 1.1s .2s cubic-bezier(.2,.8,.2,1) both", color: "var(--color-accent)" }}>engineered.</span>
              </h1>
            </div>

            <div style={{ borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", overflow: "hidden", minHeight: "200px", animation: "cCell .8s .15s cubic-bezier(.2,.8,.2,1) both" }}>
              <img src="/uploads/texgen-images-optimized/05-factory/kn3.jpg" alt="Circular knitting machine in operation" style={{ width: "100%", height: "100%", objectFit: "cover", animation: "cPan linear both", animationTimeline: "view()" }} />
            </div>

            <div style={{ borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", padding: "clamp(20px,2.2vw,32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "var(--color-text)", color: "var(--color-bg)", minHeight: "200px", animation: "cCell .8s .25s cubic-bezier(.2,.8,.2,1) both" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", opacity: .55 }}>Monthly output</div>
              <div><div style={{ fontSize: "clamp(38px,4.6vw,68px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: ".9" }}>2.3<span style={{ color: "var(--color-accent-500)" }}>M</span></div><div style={{ fontSize: "12px", opacity: .6, marginTop: "8px" }}>pieces / month</div></div>
            </div>

            <div style={{ borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", padding: "clamp(20px,2.2vw,32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "200px", animation: "cCell .8s .3s cubic-bezier(.2,.8,.2,1) both" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>Knit fabric</div>
              <div><div style={{ fontSize: "clamp(38px,4.6vw,68px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: ".9" }}>16.5<span style={{ color: "var(--color-accent)" }}>t</span></div><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", marginTop: "8px" }}>per day, up from 3.0 in 1999</div></div>
            </div>

            <div style={{ gridColumn: "span 2", borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", padding: "clamp(20px,2.4vw,40px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", animation: "cCell .8s .35s cubic-bezier(.2,.8,.2,1) both" }}>
              <p style={{ fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.6, color: "var(--color-neutral-800)", margin: 0, maxWidth: "48ch" }}>Since 1999, Texgen Group has grown from a single knit fabric unit into a vertically integrated manufacturer — 16.5 tons of fabric and 23,000 garments a day, produced to international standards.</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}><a href="#ask" className="btn btn-primary">Request a quote</a><a href="#index" className="btn btn-secondary">Capability profile (PDF)</a></div>
            </div>

            <div style={{ borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", padding: "clamp(20px,2.2vw,32px)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "180px", animation: "cCell .8s .4s cubic-bezier(.2,.8,.2,1) both" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>In operation</div>
              <div><div style={{ fontSize: "clamp(34px,4vw,58px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: ".9", color: "var(--color-accent)" }}>27</div><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", marginTop: "8px" }}>years · est. 1999</div></div>
            </div>

            <div style={{ borderRight: "1px solid var(--color-divider)", borderBottom: "1px solid var(--color-divider)", overflow: "hidden", minHeight: "180px", animation: "cCell .8s .45s cubic-bezier(.2,.8,.2,1) both" }}>
              <img src="/uploads/texgen-images-optimized/05-factory/Sewing3.jpg" alt="Sewing line at Radiance Knitwears" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)", overflow: "hidden", background: "#fff" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(16px,1.8vw,24px) clamp(12px,2vw,28px)", display: "flex", alignItems: "center", gap: "clamp(20px,4vw,52px)" }}>
          <span style={{ flex: "none", fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)" }}>Producing for</span>
          <div style={{ flex: 1, overflow: "hidden", maskImage: "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)" }}>
            <div style={{ display: "flex", gap: "clamp(36px,5vw,80px)", width: "max-content", animation: "cTape 30s linear infinite", alignItems: "center" }}>
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-1.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-2.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-3.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-4.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-5.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-6.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-7.png" alt="Buyer brand logo" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-1.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-2.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-3.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-4.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-5.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-6.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
              <img src="/uploads/texgen-images-optimized/02-about/company-logo-7.png" alt="" style={{ height: "24px", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="story" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
          <div style={{ padding: "clamp(40px,6vw,110px) clamp(20px,3vw,60px) clamp(40px,6vw,110px) 0", animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 60%" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "22px" }}>The company</div>
            <h2 style={{ fontSize: "clamp(28px,3.6vw,52px)", lineHeight: 1.02, fontWeight: 900, letterSpacing: "-.035em", margin: "0 0 26px", maxWidth: "15ch" }}>From fabric to fashion, powered by commitment</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: "0 0 16px", maxWidth: "52ch" }}>Founded in 1999, Texgen Group began as a knit fabric manufacturer and has since grown into a composite and garment manufacturer, pioneering European knitting technology in Bangladesh.</p>
            <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: "0 0 28px", maxWidth: "52ch" }}>We are not the largest manufacturer in Bangladesh, and we don’t try to be. Our strength is quality, commitment, and the ability to adapt to what each customer actually needs.</p>
            <div style={{ borderTop: "2px solid var(--color-text)", paddingTop: "22px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", gap: "20px" }}>
              <div><div style={{ fontSize: "clamp(22px,2.4vw,34px)", fontWeight: 900, letterSpacing: "-.03em" }}>2,300</div><div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginTop: "4px" }}>People</div></div>
              <div><div style={{ fontSize: "clamp(22px,2.4vw,34px)", fontWeight: 900, letterSpacing: "-.03em" }}>47+</div><div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginTop: "4px" }}>Lines</div></div>
              <div><div style={{ fontSize: "clamp(22px,2.4vw,34px)", fontWeight: 900, letterSpacing: "-.03em" }}>442</div><div style={{ fontSize: "11px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginTop: "4px" }}>Machines</div></div>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--color-neutral-700)", margin: "26px 0 0", maxWidth: "52ch", borderLeft: "2px solid var(--color-accent)", paddingLeft: "14px" }}>Our manufacturing operations run through Radiance Knitwears Limited, our production facility in Ashulia, Dhaka.</p>
          </div>
          <div style={{ position: "relative", minHeight: "clamp(300px,40vw,600px)", overflow: "hidden", borderLeft: "1px solid var(--color-divider)" }}>
            <img src="/uploads/texgen-images-optimized/02-about/about-us-img-22.jpg" alt="Texgen Group campus in Ashulia" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", animation: "cPan linear both", animationTimeline: "view()" }} />
          </div>
        </div>
      </section>

      <section id="index" style={{ borderBottom: "1px solid var(--color-divider)", background: "var(--color-neutral-100)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px) clamp(20px,3vw,40px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "20px" }}>Capabilities index</div>
              <h2 style={{ fontSize: "clamp(28px,3.8vw,56px)", lineHeight: 1, fontWeight: 900, letterSpacing: "-.035em", margin: 0, maxWidth: "16ch" }}>Seven departments, one roof</h2>
            </div>
            <p style={{ maxWidth: "34ch", fontSize: "15px", lineHeight: 1.6, color: "var(--color-neutral-700)", margin: 0 }}>Every stage is in-house and auditable. Keep scrolling for the floor-by-floor walkthrough.</p>
          </div>
        </div>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px) clamp(40px,6vw,90px)" }}>
          <div style={{ borderTop: "2px solid var(--color-text)" }}>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "1px solid var(--color-divider)", color: "var(--color-text)", animation: "cUp .6s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>01</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Knitting</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>16.5 t/day</span>
            </Link>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "1px solid var(--color-divider)", color: "var(--color-text)", animation: "cUp .6s .04s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>02</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Sample &amp; Development</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>7-day turnaround</span>
            </Link>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "1px solid var(--color-divider)", color: "var(--color-text)", animation: "cUp .6s .08s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>03</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Cutting</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>12 tables</span>
            </Link>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "1px solid var(--color-divider)", color: "var(--color-text)", animation: "cUp .6s .12s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>04</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Sewing</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>47+ lines</span>
            </Link>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "1px solid var(--color-divider)", color: "var(--color-text)", animation: "cUp .6s .16s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>05</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Finishing</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>23,000 pcs/day</span>
            </Link>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "1px solid var(--color-divider)", color: "var(--color-text)", animation: "cUp .6s .2s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>06</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Testing Lab</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>In-house</span>
            </Link>
            <Link href="/capabilities" style={{ display: "grid", gridTemplateColumns: "56px 1fr auto", gap: "clamp(12px,2vw,32px)", alignItems: "center", padding: "clamp(16px,2vw,26px) clamp(8px,1.4vw,20px)", borderBottom: "2px solid var(--color-text)", color: "var(--color-text)", animation: "cUp .6s .24s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 45%" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-accent)" }}>07</span>
              <span style={{ fontSize: "clamp(20px,2.4vw,34px)", fontWeight: 800, letterSpacing: "-.025em" }}>Store &amp; Inventory</span>
              <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", opacity: .6 }}>Real-time tracking</span>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-bg)", borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/kn2.jpg" alt="Circular knitting machines running yarn" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>01</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>16.5 tons / day</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Knitting</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>Flexible production runs across a wide variety of fabric styles. Premium yarns and precisely calibrated processes create fabrics that meet exact specifications for texture, strength and colour.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}><span className="tag tag-outline">Single jersey</span><span className="tag tag-outline">Rib &amp; interlock</span><span className="tag tag-outline">Fleece</span><span className="tag tag-outline">Jacquard</span></div>
          </div>
        </article>

        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-neutral-100)", borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/Sample2.jpg" alt="Sample development room with pattern tables" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>02</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>7-day turnaround</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Sample &amp; Development</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>From colour matching to texture testing, each prototype lets customers review fit, style and finish before placing final orders — shortening lead times and starting every run from a tested design.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}><span className="tag tag-outline">Colour matching</span><span className="tag tag-outline">Fit sets</span><span className="tag tag-outline">PP samples</span></div>
          </div>
        </article>

        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-bg)", borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/cutting2.jpg" alt="Cutting floor with band knife and fabric panels" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>03</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>12 spreading tables</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Cutting</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>State-of-the-art automated machines with skilled technical oversight — precise pattern alignment that turns premium fabric into perfectly shaped panels with minimal waste.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}><span className="tag tag-outline">Auto spreader</span><span className="tag tag-outline">Marker efficiency 87%</span></div>
          </div>
        </article>

        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-neutral-100)", borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/Sewing2.jpg" alt="Sewing line with operators at machines" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>04</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>47+ lines · 442 machines</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Sewing</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>Two garment units combining skilled craftsmanship with advanced machinery — 15,000 T-shirts and 8,000 polo shirts a day, with attention to seam alignment, durability and consistency.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}><span className="tag tag-outline">Unit 1 · 24 lines</span><span className="tag tag-outline">Unit 2 · 23 lines</span></div>
          </div>
        </article>

        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-bg)", borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/Finishing2.jpg" alt="Finishing and hangtag section" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>05</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>23,000 pcs / day</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Finishing</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>Pressing, trimming and refinement, then rigorous quality checks — including needle and metal detection — before cartons are sealed for shipment.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}><span className="tag tag-outline">Metal-free zone</span><span className="tag tag-outline">Final QC table</span></div>
          </div>
        </article>

        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-neutral-100)", borderTop: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/TestingLab2.jpg" alt="In-house textile testing laboratory" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>06</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>In-house lab</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Testing Lab</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>Colour fastness, shrinkage, strength and durability tested under controlled conditions, giving reliable data that supports consistent quality and regulatory compliance.</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}><span className="tag tag-outline">Colour fastness</span><span className="tag tag-outline">Shrinkage</span><span className="tag tag-outline">Tensile</span></div>
          </div>
        </article>

        <article style={{ position: "sticky", top: 0, height: "100vh", minHeight: "560px", background: "var(--color-bg)", borderTop: "2px solid var(--color-text)", borderBottom: "2px solid var(--color-text)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "stretch" }}>
          <div style={{ overflow: "hidden", minHeight: "220px" }}><img src="/uploads/texgen-images-optimized/05-factory/store2.jpg" alt="Finished goods store with palletised cartons" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
          <div style={{ padding: "clamp(24px,4vw,72px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", boxSizing: "border-box" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}><span style={{ fontSize: "clamp(46px,6.4vw,104px)", fontWeight: 900, lineHeight: .8, letterSpacing: "-.05em", color: "var(--color-accent)" }}>07</span><span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-neutral-600)" }}>Real-time tracking</span></div>
            <h3 style={{ fontSize: "clamp(26px,3vw,44px)", fontWeight: 900, letterSpacing: "-.03em", margin: 0 }}>Store &amp; Inventory</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: 0, maxWidth: "46ch" }}>From accessories and yarn to grey fabric and completed goods, every item is catalogued and stored in a climate-controlled environment with movement tracked in real time.</p>
            <a href="#ask" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: "6px" }}>Request the full capacity sheet</a>
          </div>
        </article>
      </section>

      <section id="swatches" style={{ borderBottom: "1px solid var(--color-divider)", overflowX: "clip" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px) clamp(24px,3vw,44px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "20px" }}>Products</div>
            <h2 style={{ fontSize: "clamp(28px,3.8vw,56px)", lineHeight: 1, fontWeight: 900, letterSpacing: "-.035em", margin: 0, maxWidth: "16ch" }}>Swatch book</h2>
          </div>
          <p style={{ maxWidth: "32ch", fontSize: "15px", lineHeight: 1.6, color: "var(--color-neutral-700)", margin: 0 }}>Scroll the rail. Baby, kids, women’s and men’s, all on the same line.</p>
        </div>
        <div style={{ height: "320vh", position: "relative", viewTimelineName: "--rail", viewTimelineAxis: "block" }}>
          <div style={{ position: "sticky", top: 0, height: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
            <div style={{ display: "flex", gap: "1px", background: "var(--color-divider)", paddingLeft: "clamp(12px,2vw,28px)", width: "max-content", animation: "cSlide linear both", animationTimeline: "--rail", animationRange: "contain 0% contain 100%" }}>
              <article style={{ flex: "none", width: "clamp(240px,26vw,360px)", background: "var(--color-bg)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#fff" }}><img src="/uploads/texgen-images-optimized/06-products/baby7.jpg" alt="Baby waffle henley in sage green" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ padding: "clamp(16px,1.8vw,24px)", borderTop: "1px solid var(--color-divider)" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}><h3 style={{ fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Baby</h3><span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent)" }}>01</span></div><p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--color-neutral-700)", margin: "0 0 12px" }}>Gentle, organic knits that keep little ones cozy and cared for.</p><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", display: "grid", gap: "3px" }}><span><b>GSM</b> 140–220</span><span><b>MOQ</b> 3,000 / colour</span><span><b>Lead</b> 60–75 days</span></div></div>
              </article>
              <article style={{ flex: "none", width: "clamp(240px,26vw,360px)", background: "var(--color-bg)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#fff" }}><img src="/uploads/texgen-images-optimized/06-products/kids3.jpg" alt="Kids' royal blue printed t-shirt" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ padding: "clamp(16px,1.8vw,24px)", borderTop: "1px solid var(--color-divider)" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}><h3 style={{ fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Kids</h3><span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent)" }}>02</span></div><p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--color-neutral-700)", margin: "0 0 12px" }}>Play-ready, sustainable styles built for comfort and colour.</p><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", display: "grid", gap: "3px" }}><span><b>GSM</b> 150–240</span><span><b>MOQ</b> 3,000 / colour</span><span><b>Lead</b> 60–75 days</span></div></div>
              </article>
              <article style={{ flex: "none", width: "clamp(240px,26vw,360px)", background: "var(--color-bg)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#fff" }}><img src="/uploads/texgen-images-optimized/06-products/ladies2.jpg" alt="Women's white printed crop tee" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ padding: "clamp(16px,1.8vw,24px)", borderTop: "1px solid var(--color-divider)" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}><h3 style={{ fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Women’s</h3><span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent)" }}>03</span></div><p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--color-neutral-700)", margin: "0 0 12px" }}>Soft, planet-friendly fashion that moves from casual to chic.</p><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", display: "grid", gap: "3px" }}><span><b>GSM</b> 130–260</span><span><b>MOQ</b> 2,500 / colour</span><span><b>Lead</b> 65–80 days</span></div></div>
              </article>
              <article style={{ flex: "none", width: "clamp(240px,26vw,360px)", background: "var(--color-bg)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#fff" }}><img src="/uploads/texgen-images-optimized/06-products/men2.jpg" alt="Men's blue paisley camp-collar shirt" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ padding: "clamp(16px,1.8vw,24px)", borderTop: "1px solid var(--color-divider)" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}><h3 style={{ fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Men’s</h3><span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent)" }}>04</span></div><p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--color-neutral-700)", margin: "0 0 12px" }}>Timeless, eco-conscious essentials combining durability with style.</p><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", display: "grid", gap: "3px" }}><span><b>GSM</b> 160–280</span><span><b>MOQ</b> 2,500 / colour</span><span><b>Lead</b> 65–80 days</span></div></div>
              </article>
              <article style={{ flex: "none", width: "clamp(240px,26vw,360px)", background: "var(--color-bg)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", background: "#fff" }}><img src="/uploads/texgen-images-optimized/06-products/ladies5.jpg" alt="Women's floral rib leggings" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                <div style={{ padding: "clamp(16px,1.8vw,24px)", borderTop: "1px solid var(--color-divider)" }}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}><h3 style={{ fontSize: "clamp(18px,1.8vw,24px)", fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Rib &amp; print</h3><span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-accent)" }}>05</span></div><p style={{ fontSize: "13px", lineHeight: 1.5, color: "var(--color-neutral-700)", margin: "0 0 12px" }}>All-over print and rib constructions developed in-house.</p><div style={{ fontSize: "12px", color: "var(--color-neutral-700)", display: "grid", gap: "3px" }}><span><b>Print</b> AOP · placement</span><span><b>Lab dips</b> 5 days</span></div></div>
              </article>
              <article style={{ flex: "none", width: "clamp(240px,28vw,380px)", background: "var(--color-accent)", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(24px,3vw,44px)", gap: "18px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", opacity: .8 }}>Next step</div>
                <p style={{ fontSize: "clamp(18px,2vw,26px)", lineHeight: 1.2, fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>Send us a tech pack and we’ll come back with a costing.</p>
                <a href="#ask" className="btn" style={{ background: "#fff", color: "var(--color-accent)", alignSelf: "flex-start" }}>Request a quote</a>
              </article>
            </div>
            <div style={{ position: "absolute", left: 0, bottom: "clamp(20px,5vh,52px)", width: "100%", padding: "0 clamp(12px,2vw,28px)", boxSizing: "border-box" }}>
              <div style={{ height: "2px", background: "var(--color-divider)", position: "relative" }}><div style={{ position: "absolute", inset: 0, background: "var(--color-accent)", transformOrigin: "0 50%", animation: "cGrow linear both", animationTimeline: "--rail", animationRange: "contain 0% contain 100%" }}></div></div>
            </div>
          </div>
        </div>
        <p style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px) clamp(24px,3vw,40px)", fontSize: "12px", color: "var(--color-neutral-600)" }}>Specification figures shown are placeholders pending client confirmation.</p>
      </section>

      <section id="proof" style={{ background: "var(--color-accent)", color: "#fff", borderBottom: "1px solid var(--color-divider)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(48px,7vw,120px) clamp(12px,2vw,28px)" }}>
          <h2 style={{ fontSize: "clamp(30px,5.6vw,86px)", lineHeight: .98, fontWeight: 900, letterSpacing: "-.04em", margin: "0 0 clamp(28px,4vw,56px)", maxWidth: "17ch", animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 55%" }}>Fifteen active certifications. Audit us on any of them.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(96px,1fr))", gap: "1px", background: "rgba(255,255,255,.35)", border: "1px solid rgba(255,255,255,.35)", marginBottom: "clamp(28px,4vw,52px)" }}>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-1.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-2.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-3.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-4.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-5.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-6.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-7.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-8.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-9.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
            <div style={{ background: "#fff", aspectRatio: 1, display: "grid", placeItems: "center", padding: "12px" }}><img src="/uploads/texgen-images-optimized/03-certifications/expertise-image-11.jpg" alt="Certification badge" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} /></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "clamp(20px,3vw,48px)", borderTop: "2px solid rgba(255,255,255,.4)", paddingTop: "28px" }}>
            <div><h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-.01em" }}>Environment</h3><p style={{ fontSize: "14px", lineHeight: 1.6, opacity: .88, margin: 0 }}>Solar generation covering a significant share of daily load, and recycled fabrics, yarns and trims across the range.</p></div>
            <div><h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-.01em" }}>Social</h3><p style={{ fontSize: "14px", lineHeight: 1.6, opacity: .88, margin: 0 }}>Equal opportunity policy, education support for underprivileged students, and community welfare programmes.</p></div>
            <div><h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-.01em" }}>Material</h3><p style={{ fontSize: "14px", lineHeight: 1.6, opacity: .88, margin: 0 }}>OEKO-TEX® tested for harmful substances; recycled yarn sourced from approved mills.</p></div>
            <div><h3 style={{ fontSize: "16px", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-.01em" }}>Governance</h3><p style={{ fontSize: "14px", lineHeight: 1.6, opacity: .88, margin: 0 }}>Transparency, accountability and ethical decision-making, backed by clear policies at every level.</p></div>
          </div>
        </div>
      </section>

      <section id="ask" style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))" }}>
          <div style={{ padding: "clamp(40px,6vw,100px) clamp(20px,3vw,60px) clamp(40px,6vw,100px) 0", animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% entry 60%" }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,58px)", lineHeight: 1, fontWeight: 900, letterSpacing: "-.035em", margin: "0 0 20px", maxWidth: "13ch" }}>Tell us what you’re sourcing</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--color-neutral-800)", margin: "0 0 32px", maxWidth: "44ch" }}>We’ll come back within one business day.</p>
            <div style={{ display: "grid", gap: "18px", borderTop: "2px solid var(--color-text)", paddingTop: "22px" }}>
              <div><div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginBottom: "6px" }}>Corporate office</div><div style={{ fontSize: "14px", lineHeight: 1.5 }}>5A-5B, Concord Rafat Qamar, House 143, Road 4 &amp; 27, Block A, Banani, Dhaka 1213</div></div>
              <div><div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginBottom: "6px" }}>Factory</div><div style={{ fontSize: "14px", lineHeight: 1.5 }}>Radiance Knitwears Ltd., Dewan Idris Road, Zirabo, Ashulia, Savar, Dhaka 1341</div></div>
              <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}><div><div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginBottom: "6px" }}>Email</div><a href="mailto:info@texgengroup.com" style={{ fontSize: "14px" }}>info@texgengroup.com</a></div><div><div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginBottom: "6px" }}>Phone</div><div style={{ fontSize: "14px" }}>+88 02-223371436-38</div></div></div>
            </div>
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
    </>
  );
}
