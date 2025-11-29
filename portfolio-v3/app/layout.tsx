import type { Metadata } from "next";
import "./globals.css";
import { FloatingNav } from "../components/ui/floating-navbar";
import { navItems } from "../data";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shrinivas Sesadri - Portfolio",
  description: "An CS undergrad aspiring to be a researcher",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-cream dark:bg-dark min-h-screen">
        <FloatingNav
            className=""
            navItems={navItems}
          />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
