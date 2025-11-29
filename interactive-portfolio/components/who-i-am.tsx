"use client"

import { useState } from "react"
import TimelessFascinations from "./timeless-fascinations"

export default function WhoIAm() {
  const [expanded, setExpanded] = useState(false)

  const fullText = `I'm a passionate researcher and creator at the intersection of artificial intelligence, 3D art, and photography. Currently pursuing my Master's in Computer Science with a focus on AGI research, I spend my days exploring how we can build more human-like intelligence systems. When I'm not diving deep into neural networks and cognitive architectures, you'll find me crafting immersive 3D worlds in Blender, composing music on my piano, or capturing the perfect moment through my camera lens. I believe that the future of technology lies not just in raw computational power, but in systems that can truly understand and interact with our world in meaningful ways.`

  const shortText = fullText.substring(0, 150) + "..."

  return (
    <section id="who-i-am" className="font-sans py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-6">Who I Am</h2>
        <p className="text-base text-gray-300 mb-8 leading-relaxed">
          {expanded ? fullText : shortText}
          {!expanded && (
            <span className="text-[#3867D6] cursor-pointer ml-2 hover:underline" onClick={() => setExpanded(true)}>
              Read More →
            </span>
          )}
        </p>
      </div>
      <div className="max-w-8xl mx-auto text-center">
        {expanded && (
          // <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-in fade-in duration-700">
          //   <div className="flex flex-col items-center p-6">
          //     <GraduationCap className="w-16 h-16 text-[#3867D6] mb-4" />
          //     <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
          //     <p className="text-gray-300 text-center">Master&apos;s in Computer Science, AGI Research Focus</p>
          //   </div>
          //   <div className="flex flex-col items-center p-6">
          //     <Music className="w-16 h-16 text-[#F5A623] mb-4" />
          //     <h3 className="text-xl font-semibold text-white mb-2">Music</h3>
          //     <p className="text-gray-300 text-center">Piano Composition & Sound Design</p>
          //   </div>
          //   <div className="flex flex-col items-center p-6">
          //     <Camera className="w-16 h-16 text-[#20C997] mb-4" />
          //     <h3 className="text-xl font-semibold text-white mb-2">Photography</h3>
          //     <p className="text-gray-300 text-center">Capturing Life&apos;s Perfect Moments</p>
          //   </div>
          // </div>
          <TimelessFascinations />
        )}
      </div>
    </section>
  )
}
