import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dupak | Paper & Plastic Cup Branding — UAE",
  description:
    "Manufacturing branded paper cups, PET cups, bowls, bags, bottles & boxes. Custom packaging made easy across the UAE & GCC.",
  keywords: [
    "paper cups UAE",
    "PET cups",
    "custom branding",
    "packaging manufacturer",
    "Dupak",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
