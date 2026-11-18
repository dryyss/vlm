import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "vlm. — Vidéographe live | concerts & événementiel",
  description:
    "Portfolio de Valentin Moldovan (VLMPROD) : captation live, montage et étalonnage pour concerts et événementiel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${outfit.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="min-h-full bg-stage font-sans text-cream">{children}</body>
    </html>
  );
}
