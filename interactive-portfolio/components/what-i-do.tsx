"use client"

import { Brain, CuboidIcon as Cube, Camera, Code, Palette, Lightbulb } from "lucide-react"
import { Cpu, ServerCog, GitBranch, LayoutDashboard, PenLine, Shapes, Paintbrush } from "lucide-react"
import { GraduationCap, Music } from "lucide-react"
import { BentoCard } from "@/components/ui/bento-card"
import { HoverEffect } from "./ui/card-hover-effect"

const projects = [
  // 🧠 Systems & Intelligence
  {
    icon: <Brain className="w-12 h-12" />,
    title: "Cognitive System Design",
    description: "Creating reasoning-driven architectures with memory, perception, and symbolic querying at their core.",
    colors: ["#1E3A8A", "#3B82F6", "#93C5FD"],
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Agentic Workflows & Tool Use",
    description: "Building intelligent agents that retrieve, reason, and interact contextually — like dynamic thought loops.",
    colors: ["#6D28D9", "#8B5CF6", "#DDD6FE"],
  },
  {
    icon: <ServerCog className="w-12 h-12" />,
    title: "Cloud-Native App Engineering",
    description: "Architecting mobile-first systems with React Native, AWS Lambda, Fargate, and S3.",
    colors: ["#0F766E", "#14B8A6", "#99F6E4"],
  },

  // ⚙️ Design & Execution
  // {
  //   icon: <GitBranch className="w-12 h-12" />,
  //   title: "Rapid Prototyping",
  //   description: "Turning ideas into functional prototypes with fast iteration and clear architecture.",
  //   colors: ["#4B5563", "#9CA3AF", "#E5E7EB"],
  // },
  {
    icon: <LayoutDashboard className="w-12 h-12" />,
    title: "Interface Logic & UX Systems",
    description: "Designing interfaces that mirror system architecture — intentional, clean, and expressive.",
    colors: ["#2563EB", "#60A5FA", "#BFDBFE"],
  },

  // 🎨 Creative Expression
  {
    icon: <PenLine className="w-12 h-12" />,
    title: "Writing & Story Systems",
    description: "Exploring complexity through narrative — from essays to product thinking to reflective journaling.",
    colors: ["#6B7280", "#9CA3AF", "#D1D5DB"],
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Photography & Visual Studies",
    description: "Capturing light, shape, and silence — photography as a practice in observation and memory.",
    colors: ["#78350F", "#FBBF24", "#FDE68A"],
  },
  {
    icon: <Paintbrush className="w-12 h-12" />,
    title: "Sketching & Illustration",
    description: "Translating abstract thought into form — digital or ink, sketching helps me think aloud.",
    colors: ["#1E293B", "#475569", "#9CA3AF"],
  },
  {
    icon: <Shapes className="w-12 h-12" />,
    title: "3D Worldbuilding",
    description: "Creating imagined spaces in Blender — balancing mood, narrative, and structure.",
    colors: ["#0F172A", "#0284C7", "#67E8F9"],
  },
];



const projectsInit = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AGI Research",
    description: "Exploring cognitive architectures and brain-inspired AI systems.",
    colors: ["#3867D6", "#60A5FA", "#93C5FD"],
  },
  {
    icon: <Cube className="w-12 h-12" />,
    title: "3D Worlds",
    description: "Building futuristic concepts in Blender & Unreal Engine.",
    colors: ["#F5A623", "#FCD34D", "#FBBF24"],
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Photography",
    description: "Capturing moments with artistic vision and technical precision.",
    colors: ["#20C997", "#34D399", "#6EE7B7"],
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Software Development",
    description: "Full-stack development with modern technologies and frameworks.",
    colors: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
  },
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Digital Art",
    description: "Creating visual experiences that blend technology and creativity.",
    colors: ["#EC4899", "#F472B6", "#FBCFE8"],
  },
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Innovation",
    description: "Pushing boundaries at the intersection of art, science, and technology.",
    colors: ["#F59E0B", "#FBBF24", "#FCD34D"],
  },
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-12 text-center">What I Do</h2>
          {/* {services.map((service, index) => (
            <BentoCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              colors={service.colors}
              delay={index * 0.1}
            />
            
          ))} */}
          <div className="max-w-6xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
      </div>
    </section>
  )
}


// import { HoverEffect } from "../ui/card-hover-effect";

// export function CardHoverEffectDemo() {
//   return (
//     <div className="max-w-5xl mx-auto px-8">
//       <HoverEffect items={projects} />
//     </div>
//   );
// }
export const projectsDemo = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

