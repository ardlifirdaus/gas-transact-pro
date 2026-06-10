import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GasTransact Pro — Sistem Transaksi LPG Multi Gudang",
  description:
    "Kelola transaksi LPG, stok tabung, dan laporan margin bisnis Anda secara real-time dengan GasTransact Pro. Sistem manajemen operasional untuk distributor dan agen LPG.",
  keywords: [
    "sistem transaksi LPG",
    "manajemen stok tabung gas",
    "software distributor LPG",
    "laporan margin LPG",
    "multi gudang LPG",
    "UMKM gas",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "GasTransact Pro — Sistem Transaksi LPG Multi Gudang",
    description:
      "Sistem manajemen operasional LPG untuk distributor dan agen. Real-time, multi gudang, laporan margin otomatis.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-dark text-white font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
