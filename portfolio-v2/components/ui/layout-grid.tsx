"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    className: string;
    thumbnail: string;
    title: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3    max-w-7xl mx-auto gap-4 relative">
            {cards.map((card, i) => (
            <div key={i} className={cn(card.className, "")}>
                        <motion.div
                            onClick={() => handleClick(card)}
                            className={cn(
                                card.className,
                                "relative overflow-hidden",
                                selected?.id === card.id
                                    ? "rounded-lg cursor-pointer absolute inset-0 h-3/4 w-full md:w-3/4 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                    : lastSelected?.id === card.id
                                    ? "z-40 bg-cream rounded-xl h-full w-full"
                                    : "bg-cream rounded-xl h-full w-full"
                            )}
                            layout
                        >
                        {selected?.id === card.id && <SelectedCard selected={selected} />}
                        <BlurImage card={card} isSelected={selected?.id === card.id}  />
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0.3 : 0 }}
            />
        </div>
    );
};

const BlurImage = ({ card, isSelected }: { card: Card; isSelected: boolean }) => {
    const [loaded, setLoaded] = useState(false);
    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for darkness
        zIndex: 10 // Ensure it's above the image but below the title
    };
    return (
        <>
            {!isSelected && (
                <>
                    <div className="absolute z-20 top-0 left-0 right-0 bottom-0 flex text-center items-center justify-center p-5 md:p-10">
                        <span className="text-cream text-base font-bold text-center md:text-4xl">{card.title}</span>
                    </div>
                    <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the alpha value for darkness
                            zIndex: 10 // Ensure it's above the image but below the title
                        }} />
                </>
            )}
        <Image
            src={card.thumbnail}
            height="500"
            width="500"
            onLoad={() => setLoaded(true)}
            className={cn(
                "object-cover object-top absolute z-0 inset-0 h-full w-full transition duration-200",
                loaded ? "blur-none" : "blur-md"
            )}
            alt="thumbnail"
        /></>
    );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[70]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.8,
                }}
                className="absolute inset-0 h-full w-full bg-black opacity-80 z-10"
            />
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="flex h-full px-8 pb-8 z-[70]"
            >
                {selected?.content}
            </motion.div>
        </div>
    );
};
