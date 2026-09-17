export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://texgengroup.com";

export function canonical(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return { canonical: `${SITE_URL}${p === "/" ? "" : p}` };
}

type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#organization`,
  name: "Texgen Group",
  url: SITE_URL,
  telephone: "+88 02-223371436-38",
  email: "info@texgengroup.com",
  image: `${SITE_URL}/uploads/texgen-images-optimized/01-brand-ui/logo1.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "5A-5B, Concord Rafat Qamar, House 143, Road 4 & 27, Block A, Banani",
    addressLocality: "Dhaka",
    postalCode: "1213",
    addressCountry: "BD",
  },
  areaServed: "Worldwide",
  sameAs: ["https://www.facebook.com/TexgenGroup"],
};

export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
