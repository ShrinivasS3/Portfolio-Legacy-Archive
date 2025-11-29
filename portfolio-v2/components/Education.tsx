"use client"

import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import { ContainerScroll } from './ui/container-scroll-animation'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { IoLogoPython } from "react-icons/io5";
import { SiBlender, SiCompilerexplorer, SiNextdotjs, SiPytorch, SiReact, SiUnrealengine } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Education = () => {
    return (
        <div>
        <ContainerScroll
        titleComponent={
        <>
            <h1 className="text-4xl md:text-6xl heading text-black dark:text-black">
                My<br />
                <span className="text-6xl md:text-8xl font-porsha text-green mt-1 leading-none">
                    Education
                </span>
            </h1>
            </>
        }>
            <div className='h-full flex flex-col justify-evenly font-bold text-[11px] md:text-xl text-black'>
                <div className='flex justify-evenly'>
                    <p>R.S.K. Higher Secondary School</p>
                    <p>10th</p>
                    <p>92%</p>
                    <p>2019</p>
                </div>
                <div className='flex justify-evenly'>
                    <p>Kamala Niketan Montessori School</p>
                    <p>12th</p>
                    <p>92%</p>
                    <p>2021</p>
                </div>
                <div className='flex justify-evenly'>
                    <p>SASTRA Deemed University</p>
                    <p>6th Sem-B.Tech, CSE</p>
                    <p>7.77 CGPA</p>
                    <p>2021 - 2025</p>
                </div>
            </div>
        </ContainerScroll>
        <>
            <h1 className="text-center text-4xl md:text-6xl heading text-black dark:text-black">
                My<br />
                <span className="text-6xl md:text-8xl font-porsha text-orange font-bold mt-1 leading-none">
                    Skills
                </span>
            </h1>
            <InfiniteMovingCards
                items={skills}
                direction="right"
                speed="normal"
            />
        </>
    </div>
    )
}

export default Education

const skills = [
    {
        icon: <IoLogoPython />,
        quote:"Python",
        name: "numpy, pandas, matplotlib",
    },
    {
        icon: <SiPytorch />,
        quote:"PyTorch",
        name: "Neural Networks, Data Processing, Transformers",
    },
    {
        icon: <SiBlender />,
        quote: "Blender",
        name: "Modelling, Animation, Rigging",
    },
    {
        icon: <SiUnrealengine/>,
        quote: "Unreal Engine",
        name: "Animation, Environment Design, Physics",
    },
    {
        icon: <FaJava />,
        quote:"Java",
        name: "Intermediate",
    },
    {
        icon: <SiCompilerexplorer />,
        quote:"C, C++",
        name: "Intermediate",
    },
    {
        icon: <SiReact />,
        quote:"ReactJS",
        name: "CSS, tailwindCSS, Framer-Motion",
    },
    {
        icon: <SiNextdotjs />,
        quote:"NextJS",
        name: "CSS, tailwindCSS, Framer-Motion",
    }
];