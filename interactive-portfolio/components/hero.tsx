"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Boxes } from "@/components/ui/background-boxes"
import { TextPressure } from "@/components/ui/interactive-text-pressure"
import { Spotlight } from "./ui/spotlight-new"
import { Particles } from "./ui/particles"

function ResponsiveName() {
            const [isMobile, setIsMobile] = useState(false)

            useEffect(() => {
              const handleResize = () => setIsMobile(window.innerWidth < 768)
              handleResize()
              window.addEventListener("resize", handleResize)
              return () => window.removeEventListener("resize", handleResize)
            }, [])

            return isMobile ? (
              <div className="text-3xl font-sans font-bold text-white mb-4">Shrinivas Sesadri</div>
            ) : (
              <div className="h-16 md:h-32 lg:h-50 mb-12">
                <TextPressure
                  text="Shrinivas Sesadri"
                  textColor="#FFFFFF"
                  strokeColor="#FFFFFF"
                  strokeWidth={2}
                  stroke={true}
                  width={true}
                  weight={true}
                  italic={false}
                  alpha={false}
                  flex={false}
                  scale={true}
                  minFontSize={196}
                  className="font-bold"
                />
              </div>
            )
          }

export default function Hero() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-900 relative overflow-hidden"
    >
      <Spotlight />
      {/* Animated Background Boxes */}
      <div className="absolute inset-0 z-0">
        <Particles quantity={500} className="h-full w-full" color="#F5A623"/>
      </div>

      <div className="absolute inset-0 w-full h-full bg-gray-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="max-w-6xl mx-auto relative z-20">
        <div className="mb-8">
          <div className="font-sans text-lg text-gray-300">Hi! I&apos;m</div>
          
            <ResponsiveName />

          
          <div className="space-y-2">
            <div
              className={`font-sans text-[18px] md:text-2xl lg:text-3xl text-white font-medium transition-opacity duration-700 ${animationComplete ? "opacity-100" : "opacity-0"}`}
            >
              I treat curiosity like a full-time job — luckily, it actually is.
            </div>
            <div
              className={`font-sans text-[18px] md:text-2xl lg:text-3xl text-white font-medium transition-opacity duration-700 delay-300 ${animationComplete ? "opacity-100" : "opacity-0"}`}
            >
              Whether I’m building AI that thinks, sketching worlds in 3D, or obsessing over the gears in a watch,
            </div>
            <div
              className={`font-sans text-[18px] md:text-2xl lg:text-3xl text-white font-medium transition-opacity duration-700 delay-500 ${animationComplete ? "opacity-100" : "opacity-0"}`}
            >
              I dive deep into whatever refuses to let go.
            </div>
          </div>
        </div>
        <p className="font-sans text-lg text-gray-300 mb-8 max-w-2xl mx-auto relative z-20">
          Right now, I’m a research assistant working at the edge of reasoning, memory, and systems that don’t just respond — they remember and adapt.
        </p>
        <Button
          className="font-sans bg-[#3867D6] hover:bg-[#F5A623] text-white px-8 py-4 text-lg rounded-2xl shadow-md transition-all duration-300 hover:scale-105 relative z-20"
          onClick={() => document.getElementById("what-i-do")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore My Work
        </Button>
      </div>

      {/* Floating particles effect */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#3867D6] rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div> */}

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 z-15 pointer-events-none" />
    </section>
  )
}
