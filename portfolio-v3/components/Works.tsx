"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export function Works() {
    return (
        <>
        <h1 className="text-4xl md:text-6xl mt-10 mb-10 font-lora heading text-black dark:text-black align-middle text-center" id="works">
                My <span className="uppercase text-green text-6xl md:text-7xl font-lora text-secondary">Other Works</span>
        </h1>
        <div className="w-[90%] flex items-center justify-center lg:flex-row flex-wrap gap-20 pb-20 mx-5">
        <PinContainer
            title="DeviantArt"
            href="https://www.deviantart.com/3ss123"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-playfair font-bold  text-base text-cream">
                    My Art Works
                </h3>
                <div className="text-base !m-0 !p-0 font-normal font-inter">
                    <span className="text-cream/80 ">
                    From traditional to digital arts.
                    </span>
                </div>
                <div className="flex flex-1 text-8xl font-raleway h-full justify-evenly text-center align-middle w-full rounded-lg mt-4 bg-gradient-to-br from-[#FF7F50] via-purple-500 to-[#1B365D]"><span className="justify-center flex flex-col h-full text-cream/70">ART</span></div>
            </div>
        </PinContainer>
        <PinContainer
            title="Behance"
            href="https://www.behance.net/shrinivassesadri"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-playfair font-bold  text-base text-cream">
                My Photography Works
            </h3>
            <div className="text-base !m-0 !p-0 font-normal font-inter">
                <span className="text-cream/80 ">
                Capturing the worlds magic...
                </span>
            </div>
            <div className="flex flex-1 text-7xl font-raleway h-full justify-evenly text-center align-middle w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"><span className="justify-center flex flex-col h-full text-cream/70 ">Photo<br/>graphy</span></div>
            </div>
        </PinContainer>
        <PinContainer
            title="Artstation"
            href="https://www.artstation.com/shrinivassesadri"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-playfair font-bold  text-base text-cream">
                My 3D modelling and animation Works
            </h3>
            <div className="text-base !m-0 !p-0 font-normal font-inter">
                <span className="text-cream/80 ">
                Bringing the virtual world to life.
                </span>
            </div>
            <div className="flex flex-1 text-8xl font-raleway h-full justify-evenly text-center align-middle w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"><span className="justify-center flex flex-col h-full text-cream/70">3D</span></div>
            </div>
        </PinContainer>
        <PinContainer
            title="Wordpress"
            href="https://blog.shrinivassesadri.in"
        >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-playfair font-bold  text-base text-cream">
                My Blog
            </h3>
            <div className="text-base !m-0 !p-0 font-normal font-inter">
                <span className="text-cream/80 ">
                Synchronized Chaos
                </span>
            </div>
            <div className="flex flex-1 text-8xl font-raleway h-full justify-evenly text-center align-middle w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"><span className="justify-center flex flex-col h-full text-cream/70">Blog</span></div>
            </div>
        </PinContainer>
        </div>
        </>
    );
}

export default Works