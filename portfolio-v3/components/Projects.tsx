"use client";

import { FaLink } from "react-icons/fa";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Link from "next/link";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="py-20 w-full lg:w-[80%] max-w-7xl mx-auto " id="projects">
        <h1 className="px-5 text-4xl md:text-6xl lg:text-6xl heading text-black font-lora">
            My{" "}
            <span className="text-secondary uppercase text-6xl md:text-8xl font-lora">
                recent projects
            </span>
        </h1>
        <Carousel items={cards} />
    </div>
  );
}

// // ----- Skeleton Components -----
const SkeletonOne = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            Is Deep Learning Enough For Handling X-Ray
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Analysing Deep Learning Models on Chest X-Rays
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-7 text-cream list-disc flex flex-col justify-evenly">
            <li>
                Explored the impact of Data Augmentation and Hyper-Parameter Tuning on
                Deep Learning Models.
            </li>
            <li>
                Utilized the Chest X-Ray dataset of 14 Common Thorax Disease Categories.
            </li>
            <li>
                Evaluated the performance of various models like VGG19, DarkNet19, and
                AlexNet.
            </li>
            <li>
                Implemented Data Augmentation techniques like Contrast Limited Adaptive
                Histogram Equalization (CLAHE).
            </li>
            <li>
                Tuned Hyper-Parameters such as Learning Rate, Batch Size, etc., to
                improve performance.
            </li>
        </ul>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: Medical Images, Neural Networks, Deep Learning
        </p> */}
    </div>
);

const SkeletonTwo = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            An Efficient LLM For Indian Judicial System
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Innovating Legal Tech with &ldquo;LawBot&rdquo;
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 text-cream list-disc flex flex-col justify-evenly">
            <li>
                Developed a novel &ldquo;LawBot&rdquo; to address the limitations of existing legal
                tech solutions.
            </li>
            <li>
                Scraped data from the internet for domain augmentation and classification
                tasks.
            </li>
            <li>
                Employed the Mistral 7B Instruct v0.2, quantised with LoRA adaptors for
                efficiency.
            </li>
            <li>
                Fine-tuned the model sequentially on pre-processed data to enhance legal
                proceedings.
            </li>
        </ul>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: LawBot, Legal Tech, Data Processing, Model Fine-Tuning
        </p> */}
    </div>
);

const SkeletonThree = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            Music Generation from Text
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Harnessing the Power of MusicLM
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 text-cream list-disc flex flex-col justify-evenly">
            <li>
                Embarking on an ambitious project to create music directly from text
                input.
            </li>
            <li>
                Leveraging datasets like AudioSet, AudioCaps, and MusicCaps for
                comprehensive training.
            </li>
            <li>
                Utilizing advanced models such as MuLan, Soundstream, and word2vec BERT
                for nuanced understanding.
            </li>
            <li>
                Progressed through 50% of the coding phase, with model training on the
                horizon.
            </li>
        </ul>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: MusicLM, AudioSet, MuLan, Soundstream, word2vec BERT
        </p> */}
    </div>
);

const SkeletonFour = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            Interactive Medical Image Captioning
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Advancing Patient Care with AI
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 text-cream list-disc flex flex-col justify-evenly">
            <li>
                Developing a system for medical image captioning and question answering
                to expedite patient treatment.
            </li>
            <li>
                Integrating datasets such as MediCat, Path VQA, MIMIC-CXR, Open-I, and
                MSCOC for diverse insights.
            </li>
            <li>
                Incorporating the BLIP Model for accurate captioning and responsive
                question answering based on medical images.
            </li>
        </ul>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: Medical Imaging, LLaVa, BLIP Model, AI in Healthcare, Image Captioning
        </p> */}
    </div>
);

const SkeletonFive = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            Dawn Of Innovatia
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Unveiling the Power of Innovation
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 max-w-lg text-cream list-disc flex flex-col justify-evenly">
            <li>Produced a captivating 1-minute animated film using Blender.</li>
            <li>Illustrated the transformative journey of an entrepreneur.</li>
            <li>Highlighted the impact of innovation on global progress.</li>
        </ul>
        <a
            href="https://www.instagram.com/reel/CyaREiaxY7o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            className="text-cream text-base inline-flex items-center gap-1"
        >
            <FaLink /> Theme Reveal
        </a>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: Animation, Entrepreneurship, Innovation, Blender
        </p> */}
    </div>
);

const SkeletonSix = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            ESummit-Kairos: The Time of our Life
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Capturing Moments with Dynamic Motion Posters
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 max-w-lg text-cream list-disc flex flex-col justify-evenly">
            <li>
                Engaged in crafting the theme reveal for the ESummit-Kairos event.
            </li>
            <li>
                Creating a series of motion posters to encapsulate the essence of the
                event.
            </li>
        </ul>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: ESummit-Kairos, Theme Reveal, Motion Graphics, Event Branding
        </p> */}
    </div>
);

const SkeletonSeven = () => (
    <div className="h-full w-auto p-4 flex flex-col justify-evenly">
        {/* <p className="font-bold text-base md:text-4xl text-cream">
            Live and Interactive CV
        </p> */}
        <p className="font-normal text-xs md:text-xl text-cream">
            Showcasing Professional Journey with NextJS
        </p>
        <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 max-w-lg text-cream list-disc flex flex-col justify-evenly">
            <li>
                Engineered a live and responsive CV using NextJS and JavaScript.
            </li>
            <li>
                Incorporated various dynamic elements in the website using AceternityUI amd ThreeJs.
            </li>
            <li>
                Enhanced user experience with smooth animations using Framer Motion.
            </li>
            <li><Link href={"https://veroneportfolio.vercel.app/"} target="_blank" aria-label="Version 1 Portfolio" className="underline hover:text-accent flex flex-row gap-2"><FaLink /> Version 1 of my Portfolio</Link></li>
            <li><Link href={"https://vertwoportfolio.vercel.app/"} target="_blank" aria-label="Version 2 Portfolio" className="underline hover:text-accent flex flex-row gap-2"><FaLink /> Version 2 of my Portfolio</Link></li>
        </ul>
        {/* <p className="text-xs md:text-base font-thin text-white">
            Tags: React, JavaScript, AceternityUI, Framer Motion, Interactive Resume
        </p> */}
    </div>
);

const data = [
    {
      category: "Medical Image Processing, Neural Networks, Deep Learning",
      title: "Is Deep Learning Enough For Handling X-Ray",
      src: "/projectimg/x-ray.jpg",
      content: <SkeletonOne />,
    },
    {
      category: "LawBot, Legal Tech, Data Processing, LLM Fine-Tuning, Mistral 7B Instruct",
      title: "An Efficient LLM For Indian Judicial System",
      src: "/projectimg/lawbot.jpg",
      content: <SkeletonTwo />,
    },
    {
      category: "MusicLM, AudioSet, MuLan, Soundstream, word2vec BERT, Multi-Modal, Text-to-Music",
      title: "Music Generation from Text",
      src: "/projectimg/music.jpg",
      content: <SkeletonThree />,
    },
  
    {
      category: "Medical Imaging, LLaVa, BLIP Model, AI in Healthcare, Image Captioning, LLM, Multi-Modal",
      title: "Interactive Medical Image Captioning",
      src: "/projectimg/medical.jpg",
      content: <SkeletonFour />,
    },
    {
      category: "Animation, Blender, 3D Modelling, Animation",
      title: "Dawn Of Innovatia",
      src: "/projectimg/innovation.jpg",
      content: <SkeletonFive />,
    },
    {
      category: "ESummit-Kairos, Theme Reveal, Motion Graphics, Event Branding",
      title: "ESummit-Kairos: The Time of our Life",
      src: "/projectimg/kairos.jpg",
      content: <SkeletonSix />,
    },
    {
      category: "ReactJs, NextJs, JavaScript, AceternityUI, Framer Motion, Interactive Resume, ThreeJs, 3D",
      title: "Live and Interactive CV",
      src: "/projectimg/resume.jpg",
      content: <SkeletonSeven />,
    },
  ];