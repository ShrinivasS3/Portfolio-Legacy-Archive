import Hero from "@/components/hero"
import WhoIAm from "@/components/who-i-am"
import WhatIDo from "@/components/what-i-do"
import CaseStudies from "@/components/case-studies"
import Journey from "@/components/journey"
import Gallery from "@/components/gallery"
import Thoughts from "@/components/thoughts"
import Contact from "@/components/contact"
import NavigationDock from "@/components/navigation-dock"
import TimelessFascinations from "@/components/timeless-fascinations"


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <WhoIAm />
       <TimelessFascinations />
      <WhatIDo />
      <CaseStudies />
      <Journey />
      <Gallery />
      <Thoughts />
      <Contact />
      <NavigationDock />
    </main>
  );
}
