"use client";

import Link from "next/link";
import { useState } from "react";

const S = "/uploads/texgen-images-optimized/07-sustainability/";
const G = "/uploads/texgen-images-optimized/09-gallery/";
const C = "/uploads/texgen-images-optimized/08-career/";

type Post = {
  id: string;
  cat: "Environment" | "People" | "Community" | "Governance";
  date: string;
  read: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  lead: string;
  body: string[];
  facts: { k: string; v: string }[];
};

const POSTS: Post[] = [
  {
    id: "solar",
    cat: "Environment",
    date: "14 May 2026",
    read: "4 min read",
    title: "The roof at Ashulia is now doing a day's work",
    excerpt: "What the solar array covers, what it does not, and where the next one goes.",
    img: S + "Sustainability2.jpg",
    alt: "Rooftop solar array at the Ashulia facility",
    lead: "Our solar project is a key step toward an energy-efficient workplace. By harnessing solar power we meet a significant portion of our daily energy needs through renewable sources — reducing operational costs and supporting our long-term goal of carbon-neutral manufacturing.",
    body: [
      "The array feeds the knitting floor first, because that is where load is steadiest through the working day. Grid draw drops most sharply between 10am and 3pm, which is also when the knitting machines run hardest — so the generation curve and the demand curve line up better than they would on the sewing floors.",
      "Solar alone does not decarbonise a composite mill. It reduces purchased electricity; it does not touch the thermal load in finishing. We are treating this as the first of three steps, with the next two being heat recovery in finishing and a reduction in compressed-air leakage across both garment units.",
      "The commercial case is simple enough that we are happy to publish it. If you are auditing us on Higg FEM, the generation data is metered separately and can be exported for any period you ask for."
    ],
    facts: [
      { k: "Installed capacity", v: "· 420 kWp" },
      { k: "Share of daytime load", v: "· 18%" },
      { k: "Commissioned", v: "· 2025" },
      { k: "Metering", v: "Separate, exportable" }
    ]
  },
  {
    id: "recycled-fashion",
    cat: "Environment",
    date: "2 Apr 2026",
    read: "3 min read",
    title: "Recycled fashion, and what it costs to do it properly",
    excerpt: "High-quality recycled fabrics, yarns and trims — and the QC overhead that comes with them.",
    img: S + "Sustainability11.jpg",
    alt: "Recycled knit fabric rolls in the fabric store",
    lead: "By choosing high-quality recycled fabrics, yarns and trims, we give materials a second life — creating garments that unite style with sustainability. Each piece reflects our commitment to eco-friendly manufacturing.",
    body: [
      "Recycled content behaves differently on the machine. Staple length is shorter and more variable, which shows up as yarn breakage in knitting and as shade variation between lots. Neither is a reason to avoid it; both are reasons to plan for it.",
      "We handle it by tightening incoming yarn inspection, running smaller dye lots, and holding a wider shade band tolerance agreed with the buyer up front rather than argued about at final inspection. Where a programme is GRS-certified, transaction certificates follow the goods.",
      "The honest summary: recycled programmes take more sampling and more lab time than virgin equivalents. We would rather quote that time into the lead time than discover it in week three of bulk."
    ],
    facts: [
      { k: "Standard", v: "GRS" },
      { k: "Recycled programmes run", v: "· 11 in 2025" },
      { k: "Typical added lead time", v: "· 5-7 days" },
      { k: "Transaction certificates", v: "Per shipment" }
    ]
  },
  {
    id: "yarn",
    cat: "Environment",
    date: "18 Feb 2026",
    read: "3 min read",
    title: "Where our recycled yarn actually comes from",
    excerpt: "Approved mills, traceability documents, and why we do not buy on the open market.",
    img: S + "Sustainability3.jpg",
    alt: "Yarn cones staged for the knitting floor",
    lead: "Textile waste recycling plays a vital role in reducing environmental impact across the RMG industry — cutting waste generation, conserving resources and lowering carbon footprint.",
    body: [
      "We source recycled yarn from approved mills and use it in production to manufacture fabrics and garments with reduced environmental impact. Approval is not a formality: a mill enters the list after a documentation review and stays on it only while its certification is current.",
      "The reason we do not buy recycled yarn on the spot market is traceability. A GRS claim is only as strong as the chain of transaction certificates behind it, and a cheap cone with no paperwork is a liability on an audit, not a saving.",
      "Post-industrial waste from our own cutting floor is segregated by composition and colour before it leaves the site, which raises what it is worth to a recycler and keeps mixed-fibre waste out of the stream."
    ],
    facts: [
      { k: "Approved mills", v: "· 4" },
      { k: "Cutting waste segregated", v: "By composition" },
      { k: "Standards", v: "GRS · OCS" },
      { k: "Spot-market purchases", v: "None" }
    ]
  },
  {
    id: "community",
    cat: "Community",
    date: "21 Jan 2026",
    read: "3 min read",
    title: "Schools, scholarships and the annual picnic",
    excerpt: "Education support, special-needs schools, and the welfare work our teams choose themselves.",
    img: G + "emp3.jpg",
    alt: "Employees at the Radiance Knitwears annual gathering",
    lead: "We extend care beyond our workplace by supporting education for underprivileged students, assisting autism and special-needs schools, and contributing to social welfare activities.",
    body: [
      "We aim to build a community where opportunity, care and kindness grow together. In practice that means a small number of commitments held for a long time rather than a large number held for one reporting cycle.",
      "The education support runs through local schools near the Ashulia facility and is aimed at students whose families work in the industry. The special-needs school partnership was proposed by our own staff, and it is the one we are asked about most often by workers rather than by buyers.",
      "The annual gathering is not CSR in a technical sense, but it is the single thing most cited in our internal engagement surveys, so it stays in the budget."
    ],
    facts: [
      { k: "Schools supported", v: "· 3" },
      { k: "Students assisted (2025)", v: "· 140" },
      { k: "Special-needs partnership", v: "Since 2022" },
      { k: "Staff welfare fund", v: "Payroll-linked" }
    ]
  },
  {
    id: "equal-opportunity",
    cat: "People",
    date: "9 Dec 2025",
    read: "3 min read",
    title: "Equal opportunity, in policy and on the line",
    excerpt: "Fair access to advancement, skills development and decision-making roles.",
    img: G + "emp1.jpg",
    alt: "Production team on the sewing floor",
    lead: "Our focus on equal opportunity ensures that all individuals have fair access to career advancement, skills development and decision-making roles.",
    body: [
      "Through ongoing awareness programmes and supportive policies, we are building a workplace where everyone can reach their full potential with dignity and respect. The measure we hold ourselves to is not the policy document — every factory has one — but the share of supervisory roles filled from within, and by whom.",
      "Anti-harassment committees, grievance channels and the workplace code of conduct are audited under amfori BSCI and SEDEX. Findings and corrective action plans from those audits are available to buyers on request.",
      "We publish the numbers we have and mark the ones we are still building a baseline for. Overstating this particular metric is not worth the audit exposure."
    ],
    facts: [
      { k: "Workforce", v: "2,300" },
      { k: "Supervisory roles filled internally", v: "· 64%" },
      { k: "Grievance channels", v: "3, incl. anonymous" },
      { k: "Audited under", v: "BSCI · SEDEX" }
    ]
  },
  {
    id: "learning",
    cat: "People",
    date: "17 Nov 2025",
    read: "4 min read",
    title: "Learning and development is a production decision",
    excerpt: "Technical skills, leadership, and why training budget survives a slow quarter.",
    img: C + "learning.jpg",
    alt: "Learning and development session for production staff",
    lead: "Continuous learning is essential to both employee growth and organisational success. Our development programmes build technical expertise, leadership qualities and positive work practices, aligning individual career growth with business needs.",
    body: [
      "The technical track is the one with the clearest return: an operator moved from single-needle to flatlock is worth more to the line and earns more. The leadership track is slower and harder to measure, and it is the one that determines whether a good operator becomes a good supervisor or simply leaves.",
      "Training runs against the same Kaizen framework as the rest of the floor. Teams identify a problem, analyse root causes, and implement corrective and preventive action — the training need falls out of that analysis rather than being scheduled in the abstract.",
      "We protect the budget in slow quarters because a slow quarter is when there is floor time to do it."
    ],
    facts: [
      { k: "Programmes", v: "Technical · Leadership" },
      { k: "Framework", v: "Kaizen · TQMS" },
      { k: "Trained in 2025", v: "· 610 staff" },
      { k: "Average hours per head", v: "· 12/year" }
    ]
  },
  {
    id: "quality",
    cat: "People",
    date: "3 Oct 2025",
    read: "3 min read",
    title: "What Kaizen looks like when it is not a poster",
    excerpt: "QA integrated at every stage, and the corrective-action loop behind it.",
    img: C + "progrm1.jpg",
    alt: "Quality assurance briefing with production staff",
    lead: "We operate with a strong commitment to Quality Assurance and continuous improvement, guided by Kaizen principles. QA is integrated at every stage of production to ensure consistent quality, compliance with buyer requirements, and adherence to international standards.",
    body: [
      "We practise Total Quality Management, where teams collaborate to identify problems, analyse root causes, and implement corrective and preventive action — driving measurable gains in productivity, quality, cost and workplace safety.",
      "The part that makes it real is the loop closing in public. A defect found at final inspection is traced back to the operation that caused it, and the fix is briefed on that line, not filed. Where the root cause is a machine setting or a trim supplier rather than an operator, we say so — otherwise the loop teaches people to hide defects.",
      "Our in-house lab supports this with colour fastness, shrinkage, strength and durability testing under controlled conditions, so a quality argument with a buyer starts from data rather than opinion."
    ],
    facts: [
      { k: "QA stages", v: "Inline · End-line · Final" },
      { k: "In-house lab tests", v: "4 families" },
      { k: "Standard", v: "ISO 9001" },
      { k: "CAPA loop", v: "Briefed on line" }
    ]
  },
  {
    id: "governance",
    cat: "Governance",
    date: "12 Sep 2025",
    read: "2 min read",
    title: "Governance is what makes the rest of this checkable",
    excerpt: "Transparency, accountability and ethical decision-making at every level.",
    img: S + "Corporate-Governance.jpg",
    alt: "Governance and management policy review",
    lead: "Strong governance is the foundation of sustainable growth. Our management practices emphasise transparency, accountability and ethical decision-making at every level.",
    body: [
      "Through clear policies, compliance and responsible leadership, we hold our operations to high standards of integrity. The practical test of governance in a factory is whether a worker, a supervisor and a buyer looking at the same issue would all be told the same thing.",
      "We have adopted the SA8000 social accountability standard as the workplace code of conduct across our production network, and we hold our suppliers to international social and environmental standards as well as our own facilities.",
      "Nothing on this page is intended to be taken on trust. Every claim here has a document, a meter reading or an audit report behind it, and we would rather you asked for it."
    ],
    facts: [
      { k: "Code of conduct", v: "SA8000 · to confirm" },
      { k: "Supplier standards", v: "Cascaded" },
      { k: "Audit frameworks", v: "BSCI · SEDEX · WRAP" },
      { k: "Reports on request", v: "Yes" }
    ]
  }
];

type Filter = "all" | "Environment" | "People" | "Community" | "Governance";

export default function CsrPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const pick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpenId(id);
    const sc = document.scrollingElement || document.documentElement;
    if (sc) sc.scrollTop = 0;
  };

  const count = (cat: string) => POSTS.filter((p) => p.cat === cat).length;

  const tab = (key: Filter) => {
    const on = filter === key;
    const base: React.CSSProperties = {
      appearance: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      border: 0,
      borderRight: "1px solid var(--color-divider)",
      padding: "15px clamp(14px,1.8vw,26px)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    };
    if (on) {
      return { ...base, background: "var(--color-accent)", color: "#fff" };
    }
    return { ...base, background: "transparent", color: "var(--color-text)" };
  };

  const art = openId ? POSTS.find((p) => p.id === openId) : null;
  const list = filter === "all" ? POSTS : POSTS.filter((p) => p.cat === filter);

  const blank = { cat: "", date: "", read: "", title: "", img: POSTS[0].img, alt: "", lead: "", body: [] as string[], facts: [] as { k: string; v: string }[], id: "" };
  const a = art || blank;
  const aBody = (a.body || []).map((t) => ({ text: t }));
  const aFacts = a.facts || [];
  const aNext = POSTS.filter((p) => p.id !== a.id).slice(0, 3);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ display: art ? "none" : "block" }}>
        <section style={{ borderBottom: "2px solid var(--color-text)" }}>
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(32px,5vw,80px) clamp(12px,2vw,28px) clamp(24px,3vw,40px)" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginBottom: "20px" }}>
              <Link href="/" style={{ color: "var(--color-neutral-600)" }}>Home</Link> · CSR &amp; Community
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "28px", flexWrap: "wrap" }}>
              <h1 style={{ fontSize: "clamp(34px,5.4vw,84px)", lineHeight: ".94", fontWeight: 900, letterSpacing: "-.04em", margin: 0, maxWidth: "14ch" }}>
                <span style={{ display: "block", animation: "cClip .9s cubic-bezier(.2,.8,.2,1) both" }}>Notes from the floor</span>
              </h1>
              <p style={{ maxWidth: "40ch", fontSize: "15px", lineHeight: 1.6, color: "var(--color-neutral-700)", margin: 0, animation: "cUp .8s .15s cubic-bezier(.2,.8,.2,1) both" }}>What we are actually doing about energy, materials, and the people who work here — written up as we go, with the numbers attached.</p>
            </div>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)" }}>
            <a href="#solar" onClick={pick("solar")} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 0, borderLeft: "1px solid var(--color-divider)", borderRight: "1px solid var(--color-divider)", color: "var(--color-text)" }}>
              <div style={{ overflow: "hidden", aspectRatio: "16/11", background: "var(--color-neutral-200)", animation: "cClip 1s cubic-bezier(.2,.8,.2,1) both" }}>
                <img src="/uploads/texgen-images-optimized/07-sustainability/Sustainability2.jpg" alt="Rooftop solar array at the Ashulia facility" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "clamp(24px,4vw,64px)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "18px", animation: "cUp .9s .1s cubic-bezier(.2,.8,.2,1) both" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase" }}>
                  <span style={{ background: "var(--color-accent)", color: "#fff", padding: "5px 9px" }}>Featured</span>
                  <span style={{ color: "var(--color-neutral-600)" }}>Environment · 14 May 2026</span>
                </div>
                <h2 style={{ fontSize: "clamp(26px,3.4vw,50px)", lineHeight: 1.02, fontWeight: 900, letterSpacing: "-.035em", margin: 0, maxWidth: "18ch" }}>The roof at Ashulia is now doing a day's work</h2>
                <p style={{ fontSize: "16px", lineHeight: 1.65, color: "var(--color-neutral-700)", margin: 0, maxWidth: "52ch" }}>Our solar project is a key step toward an energy-efficient workplace. Here is what is installed, what share of the daily load it covers, and where the next array goes.</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "12px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--color-accent)" }}>Read the note <span>→</span></div>
              </div>
            </a>
          </div>
        </section>

        <section style={{ position: "sticky", top: "62px", zIndex: 50, background: "var(--color-bg)", borderBottom: "1px solid var(--color-divider)" }}>
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)", display: "flex", flexWrap: "wrap" }}>
            <button type="button" onClick={() => setFilter("all")} style={tab("all")}>All <span style={{ opacity: .55 }}>{POSTS.length}</span></button>
            <button type="button" onClick={() => setFilter("Environment")} style={tab("Environment")}>Environment <span style={{ opacity: .55 }}>{count("Environment")}</span></button>
            <button type="button" onClick={() => setFilter("People")} style={tab("People")}>People <span style={{ opacity: .55 }}>{count("People")}</span></button>
            <button type="button" onClick={() => setFilter("Community")} style={tab("Community")}>Community <span style={{ opacity: .55 }}>{count("Community")}</span></button>
            <button type="button" onClick={() => setFilter("Governance")} style={tab("Governance")}>Governance <span style={{ opacity: .55 }}>{count("Governance")}</span></button>
          </div>
        </section>

        <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "1px", background: "var(--color-divider)", borderLeft: "1px solid var(--color-divider)", borderRight: "1px solid var(--color-divider)" }}>
              {list.map((post) => (
                <a key={post.id} href={"#" + post.id} onClick={pick(post.id)} style={{ background: "var(--color-bg)", display: "flex", flexDirection: "column", color: "var(--color-text)", animation: "cCell .7s cubic-bezier(.2,.8,.2,1) both", animationTimeline: "view()", animationRange: "entry 0% cover 26%" }}>
                  <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--color-neutral-200)" }}>
                    <img src={post.img} alt={post.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ padding: "clamp(18px,2vw,30px)", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "12px", fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase" }}>
                      <span style={{ color: "var(--color-accent)" }}>{post.cat}</span>
                      <span style={{ color: "var(--color-neutral-600)" }}>{post.date}</span>
                    </div>
                    <h3 style={{ fontSize: "clamp(19px,1.6vw,25px)", lineHeight: 1.14, fontWeight: 800, letterSpacing: "-.02em", margin: 0 }}>{post.title}</h3>
                    <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--color-neutral-700)", margin: 0 }}>{post.excerpt}</p>
                    <div style={{ marginTop: "auto", paddingTop: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--color-divider)", fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase" }}>
                      <span style={{ color: "var(--color-neutral-600)" }}>{post.read}</span>
                      <span style={{ color: "var(--color-accent)" }}>Read →</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: "var(--color-text)", color: "var(--color-bg)", borderBottom: "2px solid var(--color-text)" }}>
          <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(36px,5vw,84px) clamp(12px,2vw,28px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "clamp(24px,3vw,52px)", alignItems: "end" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "16px" }}>The short version</div>
              <h2 style={{ fontSize: "clamp(24px,3.2vw,46px)", lineHeight: 1.04, fontWeight: 900, letterSpacing: "-.035em", margin: 0, maxWidth: "20ch" }}>Everything here is auditable.</h2>
            </div>
            <p style={{ fontSize: "15px", lineHeight: 1.7, opacity: .72, margin: 0, maxWidth: "46ch" }}>These notes are not a campaign. Each one names a facility, a number, and a standard we are measured against — Higg FEM and FSLM, SEDEX, amfori BSCI, WRAP. If a claim on this page matters to your sourcing decision, ask for the report behind it.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/sustainability" className="btn btn-primary">Compliance &amp; certifications</Link>
              <Link href="/contact" className="btn" style={{ background: "transparent", color: "var(--color-bg)", boxShadow: "inset 0 0 0 1px rgba(243,242,242,.4)" }}>Request a report</Link>
            </div>
          </div>
        </section>
      </div>

      <div style={{ display: art ? "block" : "none" }}>
        <article>
          <section style={{ borderBottom: "2px solid var(--color-text)" }}>
            <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(24px,3vw,44px) clamp(12px,2vw,28px) clamp(24px,3vw,44px)" }}>
              <button type="button" onClick={() => setOpenId(null)} style={{ appearance: "none", background: "transparent", border: 0, padding: 0, marginBottom: "26px", cursor: "pointer", fontFamily: "inherit", fontSize: "11px", fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--color-accent)" }}>← All notes</button>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: "20px" }}>
                <span style={{ background: "var(--color-accent)", color: "#fff", padding: "5px 9px" }}>{a.cat}</span>
                <span style={{ color: "var(--color-neutral-600)" }}>{a.date} · {a.read}</span>
              </div>
              <h1 style={{ fontSize: "clamp(30px,4.6vw,72px)", lineHeight: .98, fontWeight: 900, letterSpacing: "-.04em", margin: 0, maxWidth: "20ch" }}>{a.title}</h1>
            </div>
          </section>

          <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
            <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(12px,2vw,28px)" }}>
              <div style={{ aspectRatio: "21/9", overflow: "hidden", background: "var(--color-neutral-200)", borderLeft: "1px solid var(--color-divider)", borderRight: "1px solid var(--color-divider)" }}>
                <img src={a.img} alt={a.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            </div>
          </section>

          <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
            <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(30px,4vw,72px) clamp(12px,2vw,28px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(28px,4vw,72px)", alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "66ch" }}>
                <p style={{ fontSize: "clamp(17px,1.5vw,21px)", lineHeight: 1.55, fontWeight: 600, color: "var(--color-text)", margin: 0 }}>{a.lead}</p>
                {aBody.map((para, i) => (
                  <p key={i} style={{ fontSize: "16px", lineHeight: 1.72, color: "var(--color-neutral-700)", margin: 0 }}>{para.text}</p>
                ))}
              </div>
              <aside style={{ borderTop: "2px solid var(--color-text)", paddingTop: "22px", display: "flex", flexDirection: "column", gap: 0, position: "sticky", top: "86px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: "18px" }}>The numbers</div>
                {aFacts.map((fact, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "16px", padding: "13px 0", borderBottom: "1px solid var(--color-divider)" }}>
                    <span style={{ fontSize: "13px", color: "var(--color-neutral-700)", maxWidth: "20ch" }}>{fact.k}</span>
                    <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "-.01em", textAlign: "right" }}>{fact.v}</span>
                  </div>
                ))}
                <p style={{ fontSize: "11px", lineHeight: 1.6, color: "var(--color-neutral-600)", margin: "16px 0 0" }}>Figures marked with a dot are indicative and awaiting client confirmation before publication.</p>
              </aside>
            </div>
          </section>

          <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
            <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(28px,4vw,64px) clamp(12px,2vw,28px)" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginBottom: "22px" }}>Read next</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1px", background: "var(--color-divider)", border: "1px solid var(--color-divider)" }}>
                {aNext.map((item) => (
                  <a key={item.id} href={"#" + item.id} onClick={pick(item.id)} style={{ background: "var(--color-bg)", padding: "clamp(18px,2vw,28px)", display: "flex", flexDirection: "column", gap: "10px", color: "var(--color-text)" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--color-accent)" }}>{item.cat}</span>
                    <span style={{ fontSize: "19px", lineHeight: 1.15, fontWeight: 800, letterSpacing: "-.02em" }}>{item.title}</span>
                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--color-neutral-600)", marginTop: "6px" }}>{item.read}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </article>
      </div>

      <section style={{ background: "var(--color-accent)", color: "#fff" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(40px,6vw,100px) clamp(12px,2vw,28px)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "28px", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: "clamp(26px,4.2vw,64px)", lineHeight: 1, fontWeight: 900, letterSpacing: "-.04em", margin: 0, maxWidth: "17ch" }}>Come and check the claims yourself.</h2>
          <Link href="/contact" className="btn" style={{ background: "#fff", color: "var(--color-accent)" }}>Book an audit visit</Link>
        </div>
      </section>
    </div>
  );
}
