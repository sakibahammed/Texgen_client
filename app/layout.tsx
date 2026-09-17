import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://texgengroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Texgen Group — Knit fabric & garment manufacturing, Dhaka",
    template: "%s · Texgen Group",
  },
  description:
    "Vertically integrated knit fabric and garment manufacturer in Bangladesh. 16.5 tons of fabric and 23,000 garments a day, produced to international standards since 1999.",
  applicationName: "Texgen Group",
  authors: [{ name: "Texgen Group" }],
  openGraph: {
    type: "website",
    siteName: "Texgen Group",
    locale: "en_US",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f2f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Texgen Group",
    url: SITE_URL,
    logo: `${SITE_URL}/uploads/texgen-images-optimized/01-brand-ui/logo1.svg`,
    email: "info@texgengroup.com",
    telephone: "+88 02-223371436-38",
    sameAs: ["https://www.facebook.com/TexgenGroup"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  };

  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
