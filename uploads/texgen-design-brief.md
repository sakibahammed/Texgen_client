# Texgen Group — Website Design Brief

**For:** Claude Design
**Client:** TEXGEN Group (Bangladesh) — knit fabric & garment manufacturer
**Existing site:** https://www.texgengroup.com/
**Task:** Redesign the site. All content below is final, cleaned copy — pasteable as-is. All assets referenced are in the accompanying image archive.

---

## 1. Who this is for

**Audience:** B2B apparel sourcing — buyers, merchandisers, and compliance teams at international fashion brands and buying houses evaluating a Bangladeshi knit supplier.

**Their job when they land here:** decide in under two minutes whether Texgen is worth a factory audit. They are scanning for capacity, certifications, and proof the factory is real and compliant.

**Design implication:** numbers and certification logos must be visible without scrolling far. Marketing adjectives are worth almost nothing to this audience; verifiable specifics are worth everything.

**Current site fails this** — it's a generic life-coaching template with textile copy dropped in. The CSR page still lists articles like "Time Management Hacks for Busy Entrepreneurs." That is the core problem to solve.

---

## 2. Brand facts

| Field | Value |
|---|---|
| Group name | TEXGEN Group |
| Manufacturing entity | Radiance Knitwears Limited (a concern of TexGen Group) |
| Founded | 1999 |
| Years in operation | **27** (2026) — old site says both "26+" and "30+"; use one number |
| Tagline | From fabric to finished goods — every stitch reflects our promise to deliver better. |
| Logo | `01-brand-ui/logo1.svg` (light-on-dark), `logo.svg` (alternate, unused) |
| Favicon | `11-misc-icons/favicon.png` |

**Naming rule:** Texgen Group is the parent brand and the voice of the site. Radiance Knitwears Ltd. is the factory. The old site switches between them at random. Pick Texgen Group as the site voice, and introduce Radiance once, explicitly, on the About page: *"Our manufacturing operations run through Radiance Knitwears Limited, our production facility in Ashulia."* After that, "our factory" is enough.

---

## 3. Key numbers (hero / stats band)

| Metric | Value |
|---|---|
| Employees | 2,300 |
| Monthly production | 2.3 million pieces |
| Garment sewing lines | 47+ |
| Knit fabric capacity | 16.5 tons/day |
| Collars & cuffs | 8,500 sets/day |
| T-shirts | 15,000/day |
| Polo shirts | 8,000/day |
| Garment units | 2 units, 442 machines |
| Founded | 1999 (started at 3.0 tons/day) |

**Drop "100% satisfied customers"** from the old stats band — it reads as filler to a sourcing audience and is unverifiable. Replace that fourth slot with **16.5 tons/day** or **27 years**.

---

## 4. Sitemap

```
Home
About
  ├─ Our Story
  └─ Leadership
Capabilities            (was "Factory")
  ├─ Knitting
  ├─ Sample & Development
  ├─ Cutting
  ├─ Sewing
  ├─ Finishing
  ├─ Testing Lab
  └─ Store & Inventory
Products
Sustainability & Compliance
Gallery
Careers
Contact
```

**Changes from the current site:**
- Merge Management into About as a "Leadership" section.
- Rename "Factory" → "Capabilities" (buyer-facing language).
- Fold Sustainability and Certifications together — buyers assess them as one thing.
- **Delete the CSR page and the homepage "news/post" block.** Both are 100% template placeholder. The genuine CSR content (three sentences) folds into Sustainability § Social. Do not build a blog unless the client commits to writing posts.
- Fix the URL typo: `kintting.php` → `/capabilities/knitting`.

---

## 5. Page content

### 5.1 Home

**Hero H1:** Precision knitwear, engineered for global brands
**Hero sub:** Since 1999, Texgen Group has grown from a single knit fabric unit into a vertically integrated manufacturer — 16.5 tons of fabric and 23,000 garments a day, produced to international standards.
**Primary CTA:** Request a quote → Contact
**Secondary CTA:** Download capability profile *(client to supply PDF — placeholder for now)*

**Hero images:** `01-brand-ui/hero-bg.jpg`, `hero-bg-2.jpg`

**Sections in order:**
1. Hero
2. Stats band (four figures from §3)
3. About teaser — "From Fabric to Fashion, Powered by Commitment" + About CTA
4. Capabilities grid — seven cards, icons `01-brand-ui/icon-services-1…6.svg`
5. Certifications strip — logo row, `03-certifications/expertise-image-*.jpg`
6. Factory video — YouTube `al3gid8D9d0`, poster `01-brand-ui/about-video-bg.jpg`
7. Sustainability teaser
8. Contact / enquiry band

**Removed:** the "Latest updates and coaching industry insights" block. Its three cards link to `blog-single.php`, which 404s.

---

### 5.2 About — Our Story

**H2:** From Fabric to Fashion, Powered by Commitment

> Founded in 1999 with strong entrepreneurship and skilled expertise, TEXGEN Group began as a knit fabric manufacturer serving global markets. It has since grown into a composite and garment manufacturer, pioneering the use of European knitting technology in Bangladesh.
>
> Starting with a 3.0-ton daily capacity, Texgen now produces 16.5 tons of knit fabric and 8,500 sets of collars and cuffs a day, and operates two garment units with 442 machines producing 15,000 T-shirts and 8,000 polo shirts daily.
>
> We are not the largest manufacturer in Bangladesh, and we don't try to be. Our strength is quality, commitment, and the ability to adapt to what each customer actually needs.
>
> Our manufacturing operations run through Radiance Knitwears Limited, our production facility in Ashulia, Dhaka.

**Images:** `02-about/about-us-img-1.jpg`, `about-us-img-2.jpg`, `about-us-img-11.jpg`, `about-us-img-22.jpg`, `company-growth-img.jpg`

**Mission & Vision — REWRITTEN.** The live site's mission statement names a different company ("Naowars") twice; it was copy-pasted from another supplier's site. Replacement:

> **Our mission** is to deliver products that meet the exact standard each customer sets — verified at every stage, from yarn sourcing through final inspection.
>
> **Our commitment** extends past product quality. We hold our facilities and our suppliers to international social and environmental standards, and we have adopted the SA8000 social accountability standard as the workplace code of conduct across our production network.

*Flag for client: confirm the SA8000 reference before publishing. The original text claimed "the social accountability international standard" without naming it.*

**Partners section:** seven logos exist (`02-about/company-logo-1…7.png`) with **no names attached anywhere on the site**. Either get the client to name them or cut the section — unlabeled logos read as filler.

---

### 5.3 About — Leadership

Three cards. Portrait asset available: `04-management/management23-01.png` (single 1667×1667 image — **needs to be split or replaced with three individual headshots**).

**SK. ABDUS SALAM — Managing Director**
> At TEXGEN Group, we measure success not only by the garments we produce, but by the relationships we build and the positive impact we create. Over the past two decades, we have transformed from a small knit fabric producer into a vertically integrated textile and garment manufacturer serving global brands.
>
> This journey has been possible because of our dedicated team, trusted partners, and a shared commitment to innovation, transparency, and ethical practices. Looking ahead, my priority is to strengthen that foundation — investing in new technology, empowering our workforce, and adopting sustainable processes that safeguard the environment for future generations.
>
> I invite you to grow with us as we continue to deliver world-class quality with a conscience.

**SK. YAMIN — Director**
> Since TEXGEN Group began its journey in 1999, our vision has been to create textiles and garments that combine quality, innovation, and responsible practices. Over the years, we have grown from a modest knit fabric producer into a fully integrated composite and garment manufacturer serving leading global brands.
>
> This progress is the result of our talented team, our trusted partners, and our willingness to embrace advanced technology and sustainable methods. We believe that true success is measured not just by production capacity, but by the positive impact we create for our customers, employees, and the environment.
>
> Looking ahead, our focus remains clear: to strengthen our capabilities, maintain uncompromising quality, and adapt swiftly to the changing needs of the international market — while keeping integrity at the heart of everything we do.

**SK. SABBIR HOSSAIN — Director**
> At TEXGEN Group, I believe true success goes beyond production numbers — it lies in the trust we earn and the long-term relationships we nurture. From our early days as a small knit fabric unit to becoming a vertically integrated textile and garment manufacturer serving respected global brands, our journey has been shaped by hard work, strong partnerships, and a clear commitment to doing business the right way.
>
> As we move forward, our priority is to continue strengthening our capabilities through modern technology, continuous skill development, and responsible manufacturing practices. We are focused on sustainable growth — creating value for our partners while ensuring that quality, integrity, and accountability remain at the heart of everything we do.

*Note: all three statements say roughly the same thing. Consider running the MD's statement in full and cutting the two Director statements to two sentences each, or use a single combined leadership statement with three portraits.*

---

### 5.4 Capabilities (7 sub-pages)

Consistent template per page: title, one-line summary, body copy, 3-image gallery. **Every one of these pages should also carry a specs box** — machine counts, brands, daily capacity. The client must supply those; placeholders marked below.

| Page | Summary line | Images | Specs needed |
|---|---|---|---|
| Knitting | Flexible production runs across a wide variety of fabric styles | `05-factory/kn1–3.jpg` | machine count, gauges, fabric types |
| Sample & Development | Prototypes that let buyers confirm fit, style, and finish before bulk | `Sample1–3.jpg` | samples/day, turnaround time |
| Cutting | Automated cutting with precise pattern alignment and minimal waste | `cutting1–3.jpg` | tables, auto-cutter brand, pcs/day |
| Sewing | 47+ lines, 442 machines across two garment units | `Sewing1–3.jpg` | lines, machine types |
| Finishing | Pressing, trimming, and final QC before shipment | `Finishing1–3.jpg` | capacity/day |
| Testing Lab | In-house colour fastness, shrinkage, strength, and durability testing | `TestingLab1–3.jpg` | equipment list, accreditations |
| Store & Inventory | Climate-controlled storage with real-time inventory tracking | `store1–3.jpg` | floor area, system used |

**Body copy (final, per page):**

**Knitting** — Our knitting operations are driven by customer needs, offering flexible production runs and a wide variety of fabric styles. Premium yarns and precisely calibrated processes create fabrics that meet exact specifications for texture, strength, and colour, while upholding eco-friendly practices. Whether for large orders or specialty designs, we deliver reliable quality and on-time service trusted by global brands.

**Sample & Development** — Our Sample & Development section blends eco-conscious practices with advanced technology, from colour matching to texture testing. Each prototype demonstrates the quality and attention to detail that define TEXGEN production, enabling customers to review fit, style, and finish before placing final orders. This shortens lead times and ensures every production run starts with a tested design.

**Cutting** — Our cutting unit combines state-of-the-art automated machines with skilled technical expertise. The department follows eco-friendly practices, handles fabrics with care, and ensures precise pattern alignment — transforming premium fabrics into perfectly shaped panels with minimal waste.

**Sewing** — Our sewing unit combines skilled craftsmanship with advanced machinery to turn prepared fabrics into finished garments. From intricate stitching to precise seam alignment, every stage is executed with attention to detail, ensuring durability, consistency, and timely delivery.

**Finishing** — Finishing is where every detail is perfected. Our team combines eco-friendly processes with advanced technology to press, trim, and refine each garment. Through rigorous quality checks and careful handling, we deliver products that are flawlessly finished and ready for on-time shipment.

**Testing Lab** — Our in-house testing lab ensures every fabric and finished product meets international standards. We perform a full range of tests — colour fastness, shrinkage, strength, and durability — under controlled conditions. Skilled technicians monitor each stage, providing reliable data that supports consistent quality and regulatory compliance.

**Store & Inventory** — Our store department is the hub for all raw materials and finished products. From accessories and yarn to grey fabrics and completed goods, every item is catalogued and stored in a climate-controlled environment. Inventory systems track movement in real time, ensuring accurate stock levels and timely delivery to production or customers.

---

### 5.5 Products

Four categories. **Currently no specs at all** — this is the single biggest content gap for a sourcing audience. Design the card/detail layout to hold: fabric composition, GSM range, size range, MOQ, and lead time. Mark these as placeholders for the client to fill.

| Category | Copy | Images |
|---|---|---|
| Baby | Gentle, organic knits that keep little ones cozy and cared for — naturally. | `06-products/baby3–7.jpg` (5) |
| Kids | Play-ready, sustainable styles built for comfort, colour, and everyday adventures. | `kids1–6.jpg` (6) |
| Women's | Soft, planet-friendly fashion that moves effortlessly from casual to chic. | `ladies1–6.jpg` (6) |
| Men's | Timeless, eco-conscious essentials that combine durability with modern style. | `men1–6.jpg` (6) |

---

### 5.6 Sustainability & Compliance

Five pillars. **Environment · Social · Material · Governance · Certifications**

**ENVIRONMENT — Recycled Fashion**
By choosing high-quality recycled fabrics, yarns, and trims, we give materials a second life — creating garments that unite style with sustainability. Each piece reflects our commitment to eco-friendly manufacturing.
*Image: `07-sustainability/Sustainability11.jpg`*

**ENVIRONMENT — Solar Energy Project**
Our solar project is a key step toward an energy-efficient workplace. By harnessing solar power, we meet a significant portion of our daily energy needs through renewable sources — reducing operational costs and supporting our long-term goal of carbon-neutral manufacturing.
*Image: `07-sustainability/Sustainability2.jpg`. Ask client for installed kW and % of load covered — this claim is unquantified.*

**ENVIRONMENT — Sustainable Fibre and Cotton**
⚠️ **Copy missing.** The live site pastes the Governance paragraph here by mistake. Client must supply. Placeholder: describe organic/BCI/US cotton sourcing and supplier verification.

**SOCIAL — Community Investment**
We extend care beyond our workplace by supporting education for underprivileged students, assisting autism and special-needs schools, and contributing to social welfare activities. We aim to build a community where opportunity, care, and kindness grow together.

**SOCIAL — Equal Opportunity**
Our focus on equal opportunity ensures that all individuals have fair access to career advancement, skills development, and decision-making roles. Through ongoing awareness programmes and supportive policies, we're building a workplace where everyone can reach their full potential with dignity and respect.

**MATERIAL — OEKO-TEX®**
OEKO-TEX® ensures textiles are free from a wide range of harmful substances, including chemicals, pesticides, and heavy metals. We have undergone rigorous testing and inspection to confirm full compliance.
*Image: `07-sustainability/VIGNETTE-OEKO-TEX.jpg`*

**MATERIAL — Recycled Yarn & Fibre**
Textile waste recycling plays a vital role in reducing environmental impact across the RMG industry — cutting waste generation, conserving resources, and lowering carbon footprint. We source recycled yarn from approved mills and use it in production to manufacture fabrics and garments with reduced environmental impact.
*Image: `07-sustainability/yarn1-img-.jpg`*

**GOVERNANCE**
Strong governance is the foundation of sustainable growth. Our management practices emphasise transparency, accountability, and ethical decision-making at every level. Through clear policies, compliance, and responsible leadership, we hold our operations to high standards of integrity.
*Image: `07-sustainability/Corporate-Governance.jpg`*

**CERTIFICATIONS — display as a filterable grid or accordion**

| Certification | Note |
|---|---|
| GOTS | Global Organic Textile Standard |
| OCS / Organic 100 | Organic Content Standard |
| OEKO-TEX® Standard 100 | |
| GRS | Global Recycled Standard |
| WRAP | Worldwide Responsible Accredited Production |
| BSCI / amfori | |
| SEDEX | Membership |
| RSC | RMG Sustainability Council — *old site mislabels this "RCS"* |
| Higg FEM + FSLM | Facility Environmental + Social & Labor Modules |
| ISO 9001 | Quality management |
| ISO 14001 | Environmental management |
| Cotton USA™ / U.S. Cotton Trust Protocol | |
| GMP | Good Manufacturing Practices |
| ACCORD | Fire and Building Safety in Bangladesh |
| TQCSI | |

*The old site lists 10 certifications on the homepage and a different 13 on the Sustainability page. This unified list is the merge. **Client must confirm which are currently valid and supply expiry dates** — publishing a lapsed certification is a real liability with audit-minded buyers. Logo assets: `03-certifications/expertise-image-1…9.jpg`, `expertise-image-11.jpg`.*

---

### 5.7 Gallery

Two collections, no captions currently:
- **Buyer Visits** — `09-gallery/byer1–9.jpg` (9)
- **Employee Engagement** — `09-gallery/emp1–6.jpg` (6)

*Add captions. An unlabeled photo of a buyer visit proves nothing; "Audit visit, [brand], March 2025" proves a lot. Client to supply.*

---

### 5.8 Careers

**Intro:**
> At Texgen Group, our people are our greatest asset. We offer a dynamic, inclusive, and growth-oriented environment where innovation, teamwork, and excellence are valued. Explore opportunities and join us in shaping a sustainable future in textiles and apparel.

**Quality Assurance**
> We operate with a strong commitment to Quality Assurance and continuous improvement, guided by Kaizen principles. QA is integrated at every stage of production to ensure consistent quality, compliance with buyer requirements, and adherence to international standards. We practise Total Quality Management (TQMS), where teams collaborate to identify problems, analyse root causes, and implement corrective and preventive action — driving measurable gains in productivity, quality, cost, and workplace safety.

**Learning & Development**
> Continuous learning is essential to both employee growth and organisational success. Our development programmes build technical expertise, leadership qualities, and positive work practices, aligning individual career growth with business needs.
*Image: `08-career/learning.jpg`*

**Programmes:** `08-career/progrm1.jpg`, `program2.jpg` — images exist with **no accompanying text**. Client to supply programme names and descriptions, or cut.

**REQUIRED — the current page has no jobs and no way to apply.** Build:
- An open-positions list (empty state: "No open roles right now — send your CV to [HR email]")
- An application form: name, email, phone, position, CV upload
- An HR email address *(client to supply — `info@` is not appropriate for applications)*

---

### 5.9 Contact

| Field | Value |
|---|---|
| Corporate office | 5A-5B, Concord Rafat Qamar, House 143, Road 4 & 27, Block A, Banani, Dhaka 1213, Bangladesh |
| Factory | Radiance Knitwears Ltd., Dewan Idris Road, Zirabo, Ashulia, Savar, Dhaka 1341, Bangladesh |
| Email | info@texgengroup.com |
| Phone | +88 02-223371436-38 |
| Facebook | https://www.facebook.com/TexgenGroup |

**Icons:** `11-misc-icons/icon-location.svg`, `icon-mail.svg`, `icon-phone.svg`

**Form fields:** Name · Company · Email · Country · Enquiry type (Sample request / Bulk order / Audit or visit / General) · Message

**Replace the current form copy.** It currently reads *"Unlock your potential with expert guidance! Schedule a free consultation toward personal and business success"* — leftover coaching-template text. Use: *"Tell us what you're sourcing and we'll come back within one business day."*

**Social:** only Facebook is real. The other three icons are dead `#` links — remove them or get real URLs. LinkedIn matters most for this audience.

**Maps:** embed both locations.

---

## 6. Asset notes

132 images in the archive, organised by folder:

| Folder | Count | Contents |
|---|---|---|
| `01-brand-ui` | 28 | Logos, hero backgrounds, icons, decorative shapes |
| `02-about` | 13 | About imagery, 7 unlabeled partner logos |
| `03-certifications` | 10 | Certification badges |
| `04-management` | 1 | Combined leadership image (needs splitting) |
| `05-factory` | 21 | 3 photos × 7 departments |
| `06-products` | 24 | Baby, kids, women's, men's |
| `07-sustainability` | 7 | |
| `08-career` | 3 | |
| `09-gallery` | 15 | Buyer visits, employee engagement |
| `10-csr-blog` | 6 | **Template stock — do not reuse** |
| `11-misc-icons` | 4 | Favicon, contact icons |

**Issues to handle in the rebuild:**
- `Finishing1–3.jpg` are unedited phone photos at 4032×3024, ~3 MB each — 8.6 MB of the 18 MB total. Must be resized and compressed; ideally reshot.
- Most other factory photos are also oversized. Budget: max 1920px wide, WebP with JPEG fallback.
- `management23-01.png` is one 1667×1667 image containing all three directors — needs splitting into three portraits, or reshooting.
- `post-1` through `post-6.jpg` carry Photoshop metadata dated Oct 2024 — they ship with the purchased template. Not Texgen photography. Discard.
- Gallery lightbox links to `gbyer9.jpg`, which doesn't exist (the file is `byer9.jpg`).
- **Every image on the live site has an empty `alt` attribute.** Write real alt text throughout.

---

## 7. Technical requirements

- **Mobile-first.** Buyers browse suppliers on phones between meetings.
- **Performance budget:** LCP under 2.5s on 4G. The current site ships ~18 MB of images.
- **Accessibility:** real alt text, WCAG AA contrast, keyboard-navigable gallery lightbox.
- **SEO:** unique title + meta description per page — the current site has **empty meta descriptions sitewide** and still declares the template vendor as `meta-author`. Add `robots.txt` and `sitemap.xml` (both currently 404). Add Organization + LocalBusiness schema.
- **Footer links must work.** The current footer points to `index-2.html`, `about.html`, `service.html`, `contact.html` — none exist; the site runs on `.php`.
- **Multilingual:** worth asking the client. Buyers from EU/US markets are the audience, so English-only is defensible.
- Remove the bot-challenge script (`humans_21909` cookie + `document.location.reload`) if possible — it blocks crawlers and breaks link previews.

---

## 8. Open questions for the client

1. Which certifications are currently valid, and what are the expiry dates?
2. Who are the seven partner logos on the About page?
3. Product specs — fabric composition, GSM range, size range, MOQ, lead times per category?
4. Machine lists and capacity figures per department?
5. Named buyers/brands that can be publicly referenced?
6. Solar installation size (kW) and share of load covered?
7. HR email address for job applications, and any current openings?
8. Is a capability-profile PDF available for download?
9. Confirm the social accountability standard referenced in the mission statement (SA8000?).
10. Real LinkedIn URL?
11. Captions and dates for the buyer-visit gallery photos?
12. Sustainable Fibre and Cotton — body copy is missing entirely.
