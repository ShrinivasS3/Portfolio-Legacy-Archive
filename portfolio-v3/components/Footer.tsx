"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "@/components/animations/AnimatedBody";
import React from "react";

const Footer = () => {
    return (
        <motion.section
            className="flex flex-col h-[15vh] w-full  items-center justify-center bg-primary pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-0 lg:pb-0"
            initial="initial"
            animate="animate"
        >
            <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
                <AnimatedBody
                    text={"© Shrinivas 2025"}
                    className={"m-0 p-0"}
                />
                <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
                    <AnimatedBody text={"Created by"} className={"m-0 p-0"} />
                    <Link
                        href="https://github.com/ShrinivasS3"
                        target="_blank"
                        aria-label="Shrinivas Github"
                    >
                        <span className="underline underline-offset-2 hover:no-underline">
                            <AnimatedBody text={"Shrinivas Sesadri"} className={"m-0 p-0"} />
                        </span>{" "}
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;
