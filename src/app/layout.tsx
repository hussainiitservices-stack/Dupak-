import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#db2777",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dupak.net"),
  title: {
    default: "Dupak | Paper & Plastic Cup Branding — UAE",
    template: "%s | Dupak",
  },
  description:
    "Manufacturing branded paper cups, PET cups, bowls, bags, bottles & boxes. Custom packaging made easy across the UAE & GCC.",
  keywords: [
    "paper cups UAE",
    "PET cups",
    "custom branding",
    "packaging manufacturer",
    "Dupak",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Dupak",
    title: "Dupak | Paper & Plastic Cup Branding — UAE",
    description:
      "Manufacturing branded paper cups, PET cups, bowls, bags, bottles & boxes. Custom packaging made easy across the UAE & GCC.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
