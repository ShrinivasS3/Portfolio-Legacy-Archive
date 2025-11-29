"use client";

import { ParallaxScroll } from "../components/ui/parallax-scroll";

export function Works() {
    return (
        <>
        <h1 className="text-4xl md:text-6xl mt-10 mb-10 heading text-black dark:text-black align-middle text-center" id="works">
                My <span className="uppercase text-green text-6xl md:text-8xl font-porsha">Other Works</span>
        </h1>
        <ParallaxScroll images={images} />
        </>
    );
}

const images = [
    "/works/pic-1.webp",
    "/works/pic-2.webp",
    "/works/pic-3.webp",
    "/works/pic-4.webp",
    "/works/pic-5.webp",
    "/works/pic-6.webp",
    "/works/pic-7.webp",
    "/works/pic-8.webp",
    "/works/pic-9.webp",
    "/works/pic-10.webp",
    "/works/pic-11.webp",
    "/works/pic-12.webp",
    "/works/pic-14.webp",
    "/works/pic-15.webp",
    "/works/pic-16.webp",
    "/works/pic-17.webp",
    "/works/pic-18.webp",
    "/works/pic-19.webp",
    "/works/pic-20.webp",
    "/works/pic-21.webp",
    "/works/pic-22.webp",
    "/works/pic-23.webp",
    "/works/pic-24.webp",
    "/works/pic-25.webp",
    "/works/pic-26.webp",
    "/works/pic-27.webp",
    "/works/pic-28.webp",
    "/works/pic-29.webp",
    "/works/pic-30.webp",
    "/works/pic-31.webp",
];


export default Works