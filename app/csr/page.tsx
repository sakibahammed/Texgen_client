import type { Metadata } from "next";
import CsrClient from "./CsrClient";

export const metadata: Metadata = {
  title: "CSR & Community",
  description:
    "Notes from the floor: solar energy, recycled fibre, community investment, equal opportunity and governance at Texgen Group, Ashulia, Dhaka.",
  alternates: { canonical: "/csr" },
  openGraph: { url: "/csr" },
};

export default function CsrPage() {
  return <CsrClient />;
}
