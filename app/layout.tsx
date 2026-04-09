import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Inter } from "next/font/google"; 
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interior Design Studio | Modern & Elegant",
  description: "Creating spaces that tell your story.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", plusJakartaSans.variable, cormorantGaramond.variable, "font-sans", inter.variable)}
    >
      <body className="font-sans ">
        {children}
      </body>
    </html>
  );
}