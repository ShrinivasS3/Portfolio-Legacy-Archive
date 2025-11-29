import { useState } from "react";
import { IoCopyOutline, IoLinkOutline, IoLinkSharp } from "react-icons/io5";
import { cn } from "../../utils/cn";
import { BackgroundGradientAnimation } from "./gradiant-background";
import GridGlobe from "./github-globe";
import animationData from "@/data/confetti.json";
import MagicButton from "./magic-button";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    //     remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["Python", "PyTorch", "Blender, UE"];
    const rightLists = ["Java", "C, C++", "ReactJS"];
    // Python
    // PyTorch
    // Blender, Unreal Engine
    // Java
    // C, C++
    // React, Javascript
    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const openLinkNewTab = () => {
        const url = 'https://shrinivassesadri.in'; // Replace with your desired URL
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white    border border-transparent, add border border-white/[0.1] overflow-hidden relative
                "border-black/85 border-2 row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                //     add these two
                //     you can generate the color from here https://cssgradient.io/
                background: "rgb(226,111,58)",
                backgroundColor: "radial-gradient(circle, rgba(226,111,58,1) 29%, rgba(219,109,41,1) 63%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
                        } `}
                >
                    {spareImg && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //     width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                    </BackgroundGradientAnimation>
                )}
                <div
                    className={cn(
                        titleClassName,
                        "group-hover/bento:scale-105 si transition duration-250 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
                    )}
                >
                    {/*} change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color*/}
                    <div className="font-sans font-extralight md:max-w-96 md:text-xs lg:text-xl text-sm text-cream z-20">
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`font-sans text-cream text-lg lg:text-3xl text-center font-bold z-20`}
                    >
                        {title}
                    </div>

                    {/* for the github 3d globe */}
                    {id === 2 && <GridGlobe />}

                    {/* Tech stack list div */}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <MagicButton
                                title="My Profile Central"
                                icon={<IoLinkSharp />}
                                position="left"
                                handleClick={openLinkNewTab}
                                otherClasses="!bg-orange"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
