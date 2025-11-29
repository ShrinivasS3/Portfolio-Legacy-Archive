"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    return (
        <div
            onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            className={cn(
                "bg-gradient-to-br from-secondary/90 to-midnight/90 p-4 max-h-[20rem] h-full w-full rounded-xl border border-cream relative",
                className
            )}
        >
            <div className="flex justify-center items-center w-full h-full overflow-hidden z-10 opacity-85">
                <Illustration mouseEnter={mouseEnter} />
            </div>
            <div className="z-30">{children}</div>
        </div>
    );
};

export const GlowingStarsDescription = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return <p className={cn("font-inter text-xl text-accent min-w-[5rem]", className)}>{children}</p>;
};

export const GlowingStarsTitle = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return <h2 className={cn("font-playfair font-bold text-2xl text-accent", className)}>{children}</h2>;
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
    // Use a ref to measure container dimensions
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Update dimensions on mount and on resize
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    // Define a cell size for each star (modify as needed)
    const starSpacing = 20;
    const columns = Math.max(1, Math.floor((dimensions.width) / starSpacing));
    const rows = Math.max(1, Math.floor((dimensions.height) / starSpacing));
    const stars = columns * rows;

    const [glowingStars, setGlowingStars] = useState<number[]>([]);
    const highlightedStars = useRef<number[]>([]);

    // Periodically update the glowing stars based on the current total star count
    useEffect(() => {
        const interval = setInterval(() => {
            highlightedStars.current = Array.from({ length: 5 }, () =>
                Math.floor(Math.random() * stars)
            );
            setGlowingStars([...highlightedStars.current]);
        }, 3000);
        return () => clearInterval(interval);
    }, [stars]);

    return (
        <div
            ref={containerRef}
            className="h-48 p-1 w-full"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap: "1px",
            }}
        >
            {[...Array(stars)].map((_, starIdx) => {
                const isGlowing = glowingStars.includes(starIdx);
                const delay = (starIdx % 10) * 0.1;
                const staticDelay = starIdx * 0.01;
                return (
                    <div key={`matrix-col-${starIdx}`} className="relative flex items-center justify-center">
                        <Star isGlowing={mouseEnter ? true : isGlowing} delay={mouseEnter ? staticDelay : delay} />
                        {mouseEnter && <Glow delay={staticDelay} />}
                        <AnimatePresence mode="wait">
                            {isGlowing && <Glow delay={delay} />}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
    return (
        <motion.div
            key={delay}
            initial={{ scale: 1 }}
            animate={{
                scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
                background: isGlowing ? "#FFD93D" : "#4A90E2",
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delay,
            }}
            className={cn("bg-[#666] h-[2px] w-[2px] rounded-full relative z-20")}
        ></motion.div>
    );
};

const Glow = ({ delay }: { delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                delay: delay,
            }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-accent blur-[1px] shadow-2xl shadow-blue-400"
        />
    );
};
