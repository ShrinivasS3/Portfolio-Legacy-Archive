"use client"

import React from 'react'
import { LayoutGrid } from './ui/layout-grid'
import { FaLink } from 'react-icons/fa'

const Project = () => {
  return (
    <div className="h-screen py-20 w-full max-w-7xl" id='projects'>
      <h1 className="text-4xl md:text-6xl heading text-black">
        My{" "}
        <span className="text-orange uppercase text-6xl md:text-8xl font-porsha">recent projects</span>
      </h1>
      <LayoutGrid cards={cards} />
    </div>
  )
}

export default Project

const SkeletonOne = () => {
  return (
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
      <p className="font-bold text-xs md:text-4xl text-cream">Is Deep Learning Enough For Handling X-Ray</p>
      <p className="font-normal text-xs md:text-xl text-cream">Analysing Deep Learning Models on Chest X-Rays</p>
      <ul className="font-normal text-xs md:text-xl my-4 ml-7 text-cream list-disc flex flex-col justify-evenly">
        <li>Explored the impact of Data Augmentation and Hyper-Parameter Tuning on Deep Learning Models.</li>
        <li>Utilized the Chest X-Ray dataset of 14 Common Thorax Disease Categories.</li>
        <li>Evaluated the performance of various models like VGG19, DarkNet19, and AlexNet.</li>
        <li>Implemented Data Augmentation techniques like Contrast Limited Adaptive Histogram Equalization (CLAHE).</li>
        <li>Tuned Hyper-Parameters such as Learning Rate, Batch Size, etc., to improve performance.</li>
      </ul>
      <p className=" text-xs md:text-base font-thin text-white">Tags: Medical Images, Neural Networks, Deep Learning</p>
</div>

  );
};

const SkeletonTwo = () => {
  return (
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
      <p className="font-bold text-base md:text-4xl text-cream">An Efficient LLM For Indian Judicial System</p>
      <p className="font-normal text-xs md:text-xl text-cream">Innovating Legal Tech with &quot;LawBot&quot;</p>
      <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 text-cream list-disc flex flex-col justify-evenly">
        <li>Developed a novel &quot;LawBot&quot; to address the limitations of existing legal tech solutions.</li>
        <li>Scraped data from the internet for domain augmentation and classification tasks.</li>
        <li>Employed the Mistral 7B Instruct v0.2, quantised with LoRA adaptors for efficiency.</li>
        <li>Fine-tuned the model sequentially on pre-processed data to enhance legal proceedings.</li>
      </ul>
      <p className="text-xs md:text-base font-thin text-white">Tags: LawBot, Legal Tech, Data Processing, Model Fine-Tuning</p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
    <p className="font-bold text-base md:text-4xl text-cream">Music Generation from Text</p>
    <p className="font-normal text-xs md:text-xl text-cream">Harnessing the Power of MusicLM</p>
    <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 text-cream list-disc flex flex-col justify-evenly">
      <li>Embarking on an ambitious project to create music directly from text input.</li>
      <li>Leveraging datasets like AudioSet, AudioCaps, and MusicCaps for comprehensive training.</li>
      <li>Utilizing advanced models such as MuLan, Soundstream, and word2vec BERT for nuanced understanding.</li>
      <li>Progressed through 50% of the coding phase, with model training on the horizon.</li>
    </ul>
    <p className="text-xs md:text-base font-thin text-white">Tags: MusicLM, AudioSet, MuLan, Soundstream, word2vec BERT</p>
</div>

  );
};
const SkeletonFour = () => {
  return (
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
    <p className="font-bold text-base md:text-4xl text-cream">Interactive Medical Image Captioning</p>
    <p className="font-normal text-xs md:text-xl text-cream">Advancing Patient Care with AI</p>
    <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 text-cream list-disc flex flex-col justify-evenly">
      <li>Developing a system for medical image captioning and question answering to expedite patient treatment.</li>
      <li>Integrating datasets such as MediCat, Path VQA, MIMIC-CXR, Open-I, and MSCOC for diverse insights.</li>
      <li>Incorporating the BLIP Model for accurate captioning and responsive question answering based on medical images.</li>
    </ul>
    <p className="text-xs md:text-base font-thin text-white">Tags: Medical Imaging, LLaVa, BLIP Model, AI in Healthcare, Image Captioning</p>
</div>
  );
};
const SkeletonFive = () => {
  return (
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
    <p className="font-bold text-base md:text-4xl text-cream">Dawn Of Innovatia</p>
    <p className="font-normal text-xs md:text-xl text-cream">Unveiling the Power of Innovation</p>
    <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 max-w-lg text-cream list-disc flex flex-col justify-evenly">
      <li>Produced a captivating 1-minute animated film using Blender.</li>
      <li>Illustrated the transformative journey of an entrepreneur.</li>
      <li>Highlighted the impact of innovation on global progress.</li>
    </ul>
    <a href='https://www.instagram.com/reel/CyaREiaxY7o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank' className='text-cream text-base'><FaLink />Theme Reveal</a>
    <p className="text-xs md:text-base font-thin text-white">Tags: Animation, Entrepreneurship, Innovation, Blender</p>
</div>
  );
};
const SkeletonSix = () => {
  return (
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
    <p className="font-bold text-base md:text-4xl text-cream">ESummit-Kairos: The Time of our Life</p>
    <p className="font-normal text-xs md:text-xl text-cream">Capturing Moments with Dynamic Motion Posters</p>
    <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 max-w-lg text-cream list-disc flex flex-col justify-evenly">
      <li>Engaged in crafting the theme reveal for the ESummit-Kairos event.</li>
      <li>Creating a series of motion posters to encapsulate the essence of the event.</li>
    </ul>
    <p className="text-xs md:text-base font-thin text-white">Tags: ESummit-Kairos, Theme Reveal, Motion Graphics, Event Branding</p>
</div>

  );
};
const SkeletonSeven = () => {
  return(
    <div className='h-full w-auto p-4 md:p-8 flex flex-col justify-evenly'>
    <p className="font-bold text-base md:text-4xl text-cream">Live and Interactive CV</p>
    <p className="font-normal text-xs md:text-xl text-cream">Showcasing Professional Journey with NextJS</p>
    <ul className="font-normal text-xs md:text-xl my-4 ml-2 lg:ml-7 max-w-lg text-cream list-disc flex flex-col justify-evenly">
      <li>Engineered a live and responsive CV using NextJS and JavaScript.</li>
      <li>Incorporated a various dynamic element in the website using AceternityUI.</li>
      <li>Enhanced user experience with smooth animations using Framer Motion.</li>
    </ul>
    <p className="text-xs md:text-base font-thin text-white">Tags: React, JavaScript, AceternityUI, Framer Motion, Interactive Resume</p>
</div>

  );
};
const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:"/projectimg/x-ray.jpg",
    title: "Is Deep Learning Enough For Handling X-Ray",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/projectimg/lawbot.jpg",
    title: "An Efficient LLM For Indian Judicial System",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/projectimg/music.jpg",
    title: "Music Generation from Text",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/projectimg/medical.jpg",
    title: "Interactive Medical Image Captioning",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "col-span-1",
    thumbnail: "/projectimg/innovation.jpg",
    title: "Dawn Of Innovatia",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail: "/projectimg/kairos.jpg",
    title: "ESummit-Kairos: The Time of our Life",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail: "/projectimg/resume.jpg",
    title: "Live and Interactive CV",
  },
];

