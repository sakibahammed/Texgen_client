import type { Metadata } from "next";
import Link from "next/link";
import ProductsFilter from "./ProductsFilter";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Baby, kids, women's and men's knitwear produced at Texgen Group: T-shirts, polos, dresses, sleepsuits and leggings, 130–280 GSM.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products" },
};

const P = "/uploads/texgen-images-optimized/06-products/";

type Item = {
  cat: string;
  key: string;
  src: string;
  name: string;
  alt: string;
};

const MAKE = (cat: string, key: string, prefix: string, files: string[]): Item[] =>
  files.map((f, i) => ({
    cat,
    key,
    src: P + f,
    name: "Ref. " + prefix + "-" + String(i + 1).padStart(2, "0"),
    alt:
      "Texgen Group " +
      cat.toLowerCase() +
      " knitwear, style reference " +
      prefix +
      "-" +
      String(i + 1).padStart(2, "0"),
  }));

const ITEMS: Item[] = [
  ...MAKE("Baby", "baby", "BB", ["baby3.jpg", "baby4.jpg", "baby5.jpg", "baby6.jpg", "baby7.jpg"]),
  ...MAKE("Kids", "kids", "KD", ["kids1.jpg", "kids2.jpg", "kids3.jpg", "kids4.jpg", "kids5.jpg", "kids6.jpg"]),
  ...MAKE("Women's", "ladies", "WM", ["ladies1.jpg", "ladies2.jpg", "ladies3.jpg", "ladies4.jpg", "ladies5.jpg", "ladies6.jpg"]),
  ...MAKE("Men's", "men", "MN", ["men1.jpg", "men2.jpg", "men3.jpg", "men4.jpg", "men5.jpg", "men6.jpg"]),
];

export default function ProductsPage() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--color-divider)" }}>
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "clamp(32px,5vw,80px) clamp(12px,2vw,28px) clamp(24px,3vw,44px)",
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
            · Products
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
                fontSize: "clamp(34px,5.4vw,84px)",
                lineHeight: ".94",
                fontWeight: 900,
                letterSpacing: "-.04em",
                margin: 0,
                maxWidth: "14ch",
              }}
            >
              <span style={{ display: "block", animation: "cClip .9s cubic-bezier(.2,.8,.2,1) both" }}>
                Swatch book
              </span>
            </h1>
            <p
              style={{
                maxWidth: "40ch",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--color-neutral-700)",
                margin: 0,
                animation: "cUp .8s .15s cubic-bezier(.2,.8,.2,1) both",
              }}
            >
              Baby, kids, women's and men's knitwear — all produced on the same lines, to the same standard. Filter the
              book, then send us a tech pack.
            </p>
          </div>
        </div>
      </section>

      <ProductsFilter items={ITEMS} />

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
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px,3vw,44px)",
              fontWeight: 900,
              letterSpacing: "-.035em",
              margin: "0 0 10px",
            }}
          >
            Category specifications
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "var(--color-neutral-700)",
              margin: "0 0 clamp(22px,3vw,36px)",
              maxWidth: "56ch",
            }}
          >
            Ranges below are indicative. Exact composition, GSM and MOQ are confirmed against your tech pack at costing
            stage.
          </p>
          <div style={{ border: "2px solid var(--color-text)", overflowX: "auto" }}>
            <table
              className="table"
              style={{ width: "100%", borderCollapse: "collapse", minWidth: "720px" }}
            >
              <thead>
                <tr>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>Category</th>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>Typical products</th>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>Composition</th>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>GSM</th>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>Sizes</th>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>MOQ</th>
                  <th style={{ textAlign: "left", fontSize: "12px", padding: "14px 18px" }}>Lead time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontSize: "13px", padding: "14px 18px", fontWeight: 700 }}>Baby</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Sleepsuits, bodysuits, tees</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>100% organic cotton; cotton/elastane</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>140–220</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>0–24 m</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>3,000 / colour</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>60–75 days</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "13px", padding: "14px 18px", fontWeight: 700 }}>Kids</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Tees, henleys, sweatshirts</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Cotton; cotton/poly; recycled blends</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>150–240</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>2–14 y</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>3,000 / colour</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>60–75 days</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "13px", padding: "14px 18px", fontWeight: 700 }}>Women's</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Dresses, crop tees, leggings</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Cotton; viscose blends; rib</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>130–260</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>XS–3XL</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>2,500 / colour</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>65–80 days</td>
                </tr>
                <tr>
                  <td style={{ fontSize: "13px", padding: "14px 18px", fontWeight: 700 }}>Men's</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Polos, tees, camp-collar shirts</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>Pique; jersey; slub; AOP</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>160–280</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>S–3XL</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>2,500 / colour</td>
                  <td style={{ fontSize: "13px", padding: "14px 18px" }}>65–80 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "12px", color: "var(--color-neutral-600)", margin: "16px 0 0" }}>
            Specification figures shown are placeholders pending client confirmation.
          </p>
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
              maxWidth: "18ch",
              animation: "cUp .9s cubic-bezier(.2,.8,.2,1) both",
              animationTimeline: "view()",
              animationRange: "entry 0% entry 55%",
            }}
          >
            Send a tech pack. We'll come back with a costing.
          </h2>
          <Link href="/contact" className="btn" style={{ background: "#fff", color: "var(--color-accent)" }}>
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
