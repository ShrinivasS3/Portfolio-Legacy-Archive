"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel } from "./ui/carousel"

const projects = [
  {
    title: "Spatial Navigation with Neo4j & Llama3",
    button: "Explore Component",
    description: "Graph-based grid world exploration with dynamic Cypher generation from LLM prompts.",
    highlights: ["Graph-based grid world exploration", "Dynamic Cypher from LLM prompts", "Presented at CNSL Meet '24"],
    image: "/placeholder.svg?height=400&width=800",
    link: "/projects/neo4j-nav",
  },
  {
    title: "Neural Architecture Search for AGI",
    button: "Explore Component",
    description: "Automated discovery of brain-inspired neural network architectures.",
    highlights: [
      "Evolutionary algorithm optimization",
      "Cognitive task performance metrics",
      "Published research findings",
    ],
    image: "/placeholder.svg?height=400&width=800",
    link: "/projects/neural-search",
  },
  {
    title: "3D Procedural World Generation",
    button: "Explore Component",
    description: "Real-time terrain and ecosystem generation using advanced algorithms.",
    highlights: ["Perlin noise terrain generation", "Ecosystem simulation", "Real-time rendering optimization"],
    image: "/placeholder.svg?height=400&width=800",
    link: "/projects/world-gen",
  },
]

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="case-studies" className="py-24 bg-gray-800 overflow-hidden">
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={projects.map((project) => ({ title: project.title, button: project.button, src: project.image }))} />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-12 text-center">Case Studies</h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <article key={index} className="min-w-full relative h-96 md:h-[500px]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 p-8 md:p-12 flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">{project.title}</h3>
                    <p className="text-white/90 mb-4 text-lg">{project.description}</p>
                    <ul className="text-white list-disc list-inside mb-6 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                    <a href={project.link} className="text-[#F5A623] font-semibold hover:underline inline-block">
                      Learn More →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 border-gray-600 text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 border-gray-600 text-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#3867D6]" : "bg-[#D1D5DB]"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
