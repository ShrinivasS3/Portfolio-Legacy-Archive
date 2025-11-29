/* eslint-disable @next/next/no-img-element */
"use client"

import { FaArrowRight } from "react-icons/fa";
import MagicButton from "./ui/magic-button";
import { socialMedia } from "@/data";
import { footertext } from "@/data";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"

const Footer = () => {
    const openLinkNewTab = () => {
        const url = 'https://shrinivassesadri.in'; // Replace with your desired URL
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
    <footer className="bg-green w-full pt-20 pb-10" id="contact">
      {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img
                src="/footer-grid.svg"
                alt="grid"
                className="w-full h-full opacity-50"
            />
        </div>

        <div className="flex flex-col items-center px-5">
            {/* <h1 className="heading lg:max-w-[45vw] text-cream text-4xl">
                Discover my creative portfolio
            </h1> */}
            <TypewriterEffectSmooth words={footertext}
            className="text-cream max-w-3xl lg:max-w-[50vw] text-2xl md:text-6xl"
            cursorClassName="text-orange"
            />
            <p className="text-cream md:mt-10 my-5 text-center text-sm md:text-xl">
                Dive into my creations, savor the experience, and delve deeper into who I am.
            </p>
            <div className="max-w-4xl">
                <MagicButton
                    title="My Profile Central"
                    icon={<FaArrowRight />}
                    position="right"
                    handleClick={openLinkNewTab}
                    otherClasses="!bg-orange"
                />
            </div>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center md:px-40">
            <p className="md:text-base text-cream/70 text-sm md:font-normal font-light">
                Copyright © 2024 Shrinivas
            </p>
            <div className="flex mt-5 items-center md:gap-3 gap-6">
                {socialMedia.map((info) => (
                    <div
                        key={info.id}
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                    >
                        <a href={info.link} target="_blank"><img src={info.img} alt="icons" width={20} height={20} /></a>
                    </div>
                ))}
            </div>
        </div>
        </footer>
    );
};

export default Footer;
