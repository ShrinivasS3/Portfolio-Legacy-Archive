// components/hero/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useTexture, useGLTF } from '@react-three/drei'
import { JSX } from 'react'
import { easing } from 'maath'
// import dynamic from "next/dynamic";
import { Canvas, useFrame } from '@react-three/fiber'
import Navbar from '@/components/Navbar'
import { Spotlight } from '@/components/ui/spotlight-new'
import Image from 'next/image'
import { MorphingText } from "./magicui/morphing-text"

// const CanvasNoSSR = dynamic(
//         () => import("@react-three/fiber").then((mod) => mod.Canvas),
//         { ssr: false }
//       );

const texts = [
        " a Researcher",
        " an Artist",
        " a Photographer",
        " a Musician",
        " a Developer"
];

function Computer(props: JSX.IntrinsicElements['mesh']) {
        const computer = "./models/laptop.glb"
        const tex = "./textures/Base.png"
        const texture = useTexture(tex)
        texture.flipY = false
        
        const mesh = useRef<THREE.Mesh>(null)
        const { nodes } = useGLTF(computer) as unknown as { nodes: { body: THREE.Mesh } }
        const [dummy] = useState(() => new THREE.Object3D())

        useFrame((state, dt) => {
                if (!mesh.current) return
                dummy.lookAt(state.pointer.x * 2, state.pointer.y * 1.25, 10)
                easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
        })

        return (
                <mesh ref={mesh} geometry={nodes.body.geometry} {...props} scale={3}>
                        <meshStandardMaterial 
                            map={texture}
                        />
                </mesh>
        )
}

const sliderVariants = {
        initial: { x: 0},
        animate: {
                x: "-100%",
                transition: {
                        repeat: Infinity,
                        repeatType: "mirror" as const,
                        duration: 20,
                },
        },
}

export default function HeroSection() {
        const [isMobile, setIsMobile] = useState(false)

        useEffect(() => {
                const checkScreenSize = () => {
                        setIsMobile(window.innerWidth < 1024) // lg breakpoint in Tailwind
                }
                
                // Check on mount and add listener
                checkScreenSize()
                window.addEventListener('resize', checkScreenSize)
                
                // Cleanup
                return () => window.removeEventListener('resize', checkScreenSize)
        }, [])

        const ComputerDisplay = () => (
                <motion.div 
                        initial={{ opacity: 0.75, y: 240 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className="relative h-[50vh] -mt-20"
                >
                        {isMobile ? (
                                <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                                src="models/laptop-img.png"
                                                alt="Laptop Model"
                                                width={1600}  // Increased from 500
                                                height={1200} // Increased from 300
                                                className="object-contain"
                                                priority
                                        />
                                </div>
                        ) : (
                                <Canvas
                                        flat
                                        camera={{
                                                position: [0, 2, 11],
                                                zoom: 1,
                                        }}
                                        style={{ position: 'absolute', top: 0, left: 0, bottom: 10, width: '100%', height: '100%' }}
                                >
                                        <ambientLight intensity={1} />
                                        <directionalLight 
                                                position={[5, 5, 5]} 
                                                intensity={5} 
                                                castShadow
                                        />
                                        <directionalLight 
                                                position={[-5, 5, -5]} 
                                                intensity={0.75}
                                        />
                                        <Computer />
                                </Canvas>
                        )}
                </motion.div>
        )
        return (
                <section className="flex flex-col relative h-screen w-full px-3 lg:px-0">
                        <Navbar />
                        <div className="relative z-10 sm:px-3 lg:px-10 pt-52 font-abrilff py-20 lg:py-5">
                                <Spotlight />
                                <div className="lg:h-[240px] overflow-hidden">
                                        <motion.h1 
                                                initial={{ opacity: 1, y: 240 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1 }}
                                                className="text-6xl md:text-8xl lg:text-[13em] font-bold text-left text-primary"
                                        >
                                                SHRINIVAS
                                        </motion.h1>
                                </div>
                                <div className="lg:h-[240px] overflow-hidden">
                                        <motion.h1
                                                initial={{ opacity: 1, y: 240 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 1.5 }}
                                                className="text-6xl md:text-8xl lg:text-[13em] font-bold text-right text-accent"
                                        >
                                                SESADRI
                                        </motion.h1>
                                </div>
                                <motion.div
                                initial={{ opacity: 0.75, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5 }}
                                className="relative w-full h-[8rem] overflow-hidden text-dark whitespace-nowrap font-thin z-0 lg:px-20 flex flex-row lg:pl-[10vw] pl-[8vw]">
                                        {/* <span className="uppercase font-raleway font-thin">researcher photographer artist musician</span> */}
                                        <span className="font-playfair font-medium text-3xl lg:text-8xl lg:pr-5 opacity-95 pr-2">I am</span>
                                        <span className=""><MorphingText className="font-playfair font-thin text-3xl lg:text-8xl" texts={texts} /></span>
                                </motion.div>
                                <motion.div 
                                        initial={{ opacity: 0.75, y: 240 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.5 }}
                                        className="relative h-[50vh] -mt-20">
                                        <ComputerDisplay />
                                </motion.div>
                        </div>
                </section>
        )
}
