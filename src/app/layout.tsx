import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/theme/ThemeContext";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://aamir-07.github.io/Portfolio_Aamir";

export const metadata: Metadata = {
  title: "Aamir Husain | Portfolio",
  description:
    "B.Tech AI & Data Science — SAP CPI integration, ML projects, and enterprise-ready engineering.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aamir Husain | Portfolio",
    description: "SAP CPI, ML, and full-stack portfolio.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamir Husain | Portfolio",
    description: "SAP CPI, ML, and full-stack portfolio.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
