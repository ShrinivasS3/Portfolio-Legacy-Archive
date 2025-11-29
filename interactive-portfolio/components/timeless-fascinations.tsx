"use client"

import { FlipCard, FlipCardFront, FlipCardBack } from "@/components/ui/flip-card"
import { PenTool, Clock, Headphones } from "lucide-react"

const fascinations = [
  {
    id: "fountain-pens",
    title: "Ink & Imagination",
    tagline: "A tool that slows time and makes thought visible.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&h=400&fit=crop",
    icon: <PenTool className="w-8 h-8" />,
    description:
      "There's something meditative about the slow glide of a nib across paper — how the ink spills in sync with your thoughts. For me, fountain pens aren't just writing instruments, they're machines of memory, preserving sparks of curiosity, ideas, and fragments of time. The tactile feedback, the choice of nibs, and even the ritual of refilling — it's all part of a conversation between hand and mind.",
    accent: "#5D3A00",
  },
  {
    id: "mechanical-watches",
    title: "Time as Craft",
    tagline: "Where precision meets poetry.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    icon: <Clock className="w-8 h-8" />,
    description:
      "I'm fascinated by the dance of cogs, gears, and escapements in a mechanical watch — systems engineered to perfection without code or electricity. They remind me that the most enduring systems are those that are self-contained, meticulously designed, and deeply human-centric. It's no coincidence that my obsession with computation overlaps with horology — both are about harnessing complexity to craft clarity over time.",
    accent: "#002B36",
  },
  {
    id: "audiophile-listening",
    title: "The Architecture of Sound",
    tagline: "Listening, not just hearing.",
    image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=600&h=400&fit=crop",
    icon: <Headphones className="w-8 h-8" />,
    description:
      "I'm deeply drawn to the sonic space — where sound becomes architecture. Whether it's the warmth of analog gear or the precise tuning of planar magnetic headphones, the audiophile world teaches me about attention to detail, intentional design, and the power of silence. As with code and music, there's beauty in how frequencies interact — how every system has a resonance. For me, listening is a way to think.",
    accent: "#8A0303",
  },
]

export default function TimelessFascinations() {
  return (
    <section id="timeless-fascinations" className="px-6">
      <div className="font-sans max-w-6xl mx-auto">
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4">Timeless Fascinations</h2> */}
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            The objects and rituals that shape my aesthetic sensibilities — where craftsmanship meets philosophy, and
            precision becomes poetry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fascinations.map((item) => (
            <FlipCard key={item.id} className="h-96 group">
              <FlipCardFront className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-full">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-white" style={{ color: item.accent }}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm italic">{item.tagline}</p>
                  </div>
                </div>
              </FlipCardFront>

              <FlipCardBack
                className="rounded-2xl p-8 flex flex-col justify-center text-white shadow-lg"
                style={{ backgroundColor: `${item.accent}15`, borderColor: item.accent }}
              >
                <div className="text-center">
                  <div className="mb-4" style={{ color: item.accent }}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FlipCardBack>
            </FlipCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm italic">
            &ldquo;The most beautiful things in the world cannot be seen or touched, they are felt with the heart.&rdquo; — Antoine
            de Saint-Exupéry
          </p>
        </div>
      </div>
    </section>
  )
}
