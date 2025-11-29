"use client";

import { Camera, Code, Gamepad, Music, Palette, Dumbbell } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LuBrainCircuit } from "react-icons/lu";
import { SiBlender } from 'react-icons/si';
import { IoMdMusicalNote } from 'react-icons/io';
import { IoColorPalette } from "react-icons/io5";
import { BsCamera2 } from 'react-icons/bs';
import { BiMath } from "react-icons/bi";
import { FaStar } from 'react-icons/fa';

import { ReactNode } from "react";

const FloatingElement = ({ children }: { children: ReactNode }) => {
        const x = useMotionValue(0);
        const y = useMotionValue(0);
        const mouseXSpring = useSpring(x);
        const mouseYSpring = useSpring(y);

        const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
            const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            x.set(mouseX - rect.width / 2);
            y.set(mouseY - rect.height / 2);
        };
        return (
            <motion.div
                onMouseMove={handleMouseMove}
                className="relative w-full h-full z-50"
            >
                {/* Background gradient */}
                <BackgroundGradientAnimation
                    className="absolute lg:inset-0 f-full"
                />
                    {/* Floating Icons - Now positioned absolutely */}
                    <div className="absolute inset-0 pointer-events-none">
                    {/* <motion.div className="absolute top-10 left-10"> */}
                        <motion.div
                            className="absolute top-20 left-10 text-transparent lg:text-highlight"
                            style={{
                                x: useTransform(mouseXSpring, (x) => x * 0.3),
                                y: useTransform(mouseYSpring, (y) => y * 0.3),
                            }}
                        >
                            <LuBrainCircuit size={40}/>
                        </motion.div>
                        
                        <motion.div
                            className="absolute top-20 right-20 text-transparent lg:text-highlight"
                            style={{
                                x: useTransform(mouseXSpring, (x) => x * -0.3),
                                y: useTransform(mouseYSpring, (y) => y * 0.3),
                            }}
                        >
                            <SiBlender size={40} />
                        </motion.div>
                        <motion.div
                            className="absolute top-10 right-1/2 text-transparent lg:text-highlight"
                            style={{
                                x: useTransform(mouseXSpring, (x) => x * 0.1),
                                y: useTransform(mouseYSpring, (y) => y * 0.2),
                            }}
                        >
                            <IoColorPalette size={40} />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-20 left-20 text-transparent lg:text-highlight"
                            style={{
                                x: useTransform(mouseXSpring, (x) => x * 0.3),
                                y: useTransform(mouseYSpring, (y) => y * -0.3),
                            }}
                        >
                            <BiMath size={40} />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-10 right-10 text-transparent lg:text-highlight"
                            style={{
                                x: useTransform(mouseXSpring, (x) => x * -0.3),
                                y: useTransform(mouseYSpring, (y) => y * -0.3),
                            }}
                        >
                            <IoMdMusicalNote size={40} />
                        </motion.div>
                        <motion.div
                            className="absolute bottom-10 right-1/2 text-transparent lg:text-highlight"
                            style={{
                                x: useTransform(mouseXSpring, (x) => x * 0.1),
                                y: useTransform(mouseYSpring, (y) => y * -0.2),
                            }}
                        >
                            <BsCamera2 size={40} />
                        </motion.div>
                    </div>
                    {/* Content - Centered and overlaid */}
                    <div className="absolute z-20 flex inset-0 h-full items-center justify-center">
                        {children}
                    </div>
                {/* </BackgroundGradientAnimation> */}
            </motion.div>
        );
    };

export default function Grid() {
    return (
        <section className="relative px-6 md:px-12 lg:px-20 py-12 bg-cream lg:h-screen">
            <div className="w-full flex text-center justify-center align-middle">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-lora text-black z-10 font-normal">
                        About
                    <FaStar className="inline-block lg:text-8xl lg:pb-7 pb-2 text-3xl" />
                    <span className="font-lora font-medium text-secondary text-5xl md:text-7xl">ME</span>
                </h1>
            </div>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-12 md:grid-rows-3 h-full">
                {/* Main Introduction - Largest Card */}
                <GridItem
                    id="intro"
                    area="md:[grid-area:1/1/3/7]"
                    icon={<Code className="h-5 w-5 text-accent" />}
                    title="Hello, I'm Shrinivas"
                    description="I’m dedicated to pushing the boundaries of Artificial General Intelligence by uniting the insights of large language models and computational neuroscience. By exploring how these fields can work in concert, I aim to create systems that mimic human-like cognition and pave the way toward AGI. Welcome to my journey at the intersection of technology, science, art, and the future of intelligence."
                />

                {/* 3D Worlds & Photography - Right Column */}
                <div className="md:[grid-area:1/7/3/13] flex flex-col gap-6">
                    <GridItem
                        id="item2"
                        area="h-1/2"
                        icon={<Gamepad className="h-5 w-5 text-rose-600" />}
                        title="3D Worlds"
                        description="My playgrounds are Blender and Unreal Engine, where I create experiences and futuristic concepts."
                    />
                    <GridItem
                        id="item3"
                        area="h-1/2"
                        icon={<Camera className="h-5 w-5 text-lime-500" />}
                        title="Through the Lens"
                        description="My camera is my passport to capturing the world's magic, from sunrise hues to cityscapes bustling with life."
                    />
                </div>

                {/* Bottom Row - Three Equal Cards */}
                <div className="md:[grid-area:3/1/4/13] grid grid-cols-1 md:grid-cols-3 gap-6">
                    <GridItem
                        id="item4"
                        icon={<Palette className="h-5 w-5 text-cyan-400" />}
                        title="Drawing Dreams"
                        description="My preferred tools are pencil, brushes and computer tools. They help me create an imaginative and passionate world out of blank canvases."
                    />
                    <GridItem
                        id="item5"
                        icon={<Music className="h-5 w-5 text-purple-400" />}
                        title="Musical Journey"
                        description="My fingers dance across the piano keys, weaving tales through classical pieces and my compositions. Completed 8 Grades | Trinity College London"
                    />
                    <GridItem
                        id="item6"
                        icon={<Dumbbell className="h-5 w-5 text-zinc-50" />}
                        title="Beyond the Code"
                        description="When I'm not conquering algorithms, you'll find me ace-ing smashes on the badminton court, keeping my competitive spirit alive."
                    />
                </div>
            </ul>
        </section>
    );
}

interface GridItemProps {
    id: string;
    area?: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ id, area, icon, title, description }: GridItemProps) => {
    const isMainCard = id === "intro";
    return (
        <li id={id} className={`list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative h-full rounded-3xl border overflow-hidden">
                {isMainCard ? (
                    <FloatingElement>
                        <div className="flex flex-col gap-6 p-8 justify-center h-full">
                            <div className="w-10 h-10 rounded-xl border border-cream/30 p-2.5 flex items-center justify-center">
                                {icon}
                            </div>
                            <div className="">
                                <h3 className="lg:text-2xl font-bold tracking-tight text-accent font-playfair md:text-2xl text-2xl">
                                    {title}
                                </h3>
                                <p className="lg:text-base/relaxed text-cream font-inter md:text-base text-sm">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </FloatingElement>
                        ) : (
                        <div className="relative z-10 flex h-full flex-col gap-6 justify-center border-cream/30 bg-primary p-8">
                                <div className="w-10 h-10 rounded-xl border border-cream/30 p-2.5 flex items-center justify-center">
                                        {icon}
                                </div>
                                <div className="">
                                        <h3 className="lg:text-2xl md:text-2xl text-2xl font-semibold tracking-tight text-accent font-playfair">
                                                {title}
                                        </h3>
                                        <p className="lg:text-base/relaxed md:text-lg text-sm text-cream font-inter">
                                                {description}
                                        </p>
                                </div>
                        </div>
            )}
                </div>
            </div>
        </li>
    );
};
