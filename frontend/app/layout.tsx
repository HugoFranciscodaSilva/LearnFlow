import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../shared/tailwind.css"
import { cn } from "@/lib/utils";
import ClientProvider from "./providers";
import { LayoutNav } from "@/components/Navbar/Navbar";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LearnFlow",
  description: "Nada por enquanto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col dark">
        <ClientProvider>
          <LayoutNav>
            {children}
          </LayoutNav>
        </ClientProvider>
        </body>
    </html>
  );
}
