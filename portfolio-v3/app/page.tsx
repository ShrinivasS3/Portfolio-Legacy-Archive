import HeroSection from "@/components/HeroSection";
import Grid from "@/components/Grid";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative bg-cream flex justify-center items-center flex-col overflow-clip mx-auto ">
      <HeroSection />
      <Grid />
      <Education />
      <Experience />
      <Projects />
      <Works />
      <Contact />
    </div>
  );
}
