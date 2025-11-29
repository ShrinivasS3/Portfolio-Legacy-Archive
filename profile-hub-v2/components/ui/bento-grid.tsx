import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

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
                "grid md:auto-rows-[12rem] md:auto-cols-[10rem] grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl",
                className
            )}
            style={{
                transform: "scale(0.9)", // Scale down to fit on screen
                transformOrigin: "top center", // Anchor scaling to the top center
            }}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    tar,
    link,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    link?: Url;
    tar?: string;
}) => {
    return (
        <Link
            href={link || "/"}
            target={tar}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 hover:border-accent hover:border-2 border-cream/[0.2] bg-gradient-to-br from-primary/95 to-primary/85 border justify-between flex flex-col",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {/* {icon} */}
                <div className="font-inter text-cream text-xs group-hover/bento:text-accent transition duration-200">
                    {description}
                </div>
                <div className="font-playfair font-bold text-cream text-xl mb-2 mt-2 group-hover/bento:text-accent transition duration-200">
                    {title}
                </div>
            </div>
        </Link>
    );
};
