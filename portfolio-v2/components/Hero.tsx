"use client"

import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'


const Hero = () => {
        return (
        <div className="pb-20 pt-36">
                <div>
                        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='orange' />
                        <Spotlight className="top-10 left-full h-[80vh] w-[80vw]" fill='green' />
                        <Spotlight className="top-28 left-80 h-[80vh] w-[80vw]" fill='purple' />
                </div>
                <div>
                        <div className="h-[50rem] w-full dark:bg-cream bg-cream    dark:bg-dot-black/[0.5] bg-dot-black/[0.5] flex items-center justify-center absolute top-0 left-0 ">
                                {/* Radial gradient for the container to give a faded look */}
                                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-cream bg-cream [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                        </div>
                        <div className='flex justify-center relative my-10 z-10'>
                                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[70vw] flex flex-col items-center justify-center'>
                                        <h2 className='uppercase tracking-widest text-xl md:text-lg lg:text-2xl text-center text-black max-w-100 font-vogue'>
                                                Hello! I&apos;m a CS undergrad from India!
                                        </h2>
                                        <TextGenerateEffect
                                                className="uppercase text-center text-6xl my-20 md:my-0 md:text-8xl lg:text-[15em] font-hulbert"
                                                words="Shrinivas Sesadri"
                                        />
                                        <TextGenerateEffect
                                                className='text-center mb-4 text-2xl md:text-4xl font-vogue max-w-[70vw] md:max-w-2xl lg:max-w-[80vw]'
                                                words="Aspiring Polymath (Researcher / Artist / Photographer / Pianist)"
                                        />
                                        {/* </p> */}
                                </div>
                        </div>
                </div>
        </div>
        )
}

export default Hero