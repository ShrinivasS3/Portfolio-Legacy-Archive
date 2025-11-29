"use client"

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Works from "@/components/Works";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-cream flex justify-center items-center flex-col overflow-clip mx-auto">
      <div className="max-w-7xl w-full px-3 lg:px-0">
        <FloatingNav
          className=""
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <Education />
        <Experience />
        <Project />
        <Works />
      </div>
      <Footer />
    </main>
  );
}
