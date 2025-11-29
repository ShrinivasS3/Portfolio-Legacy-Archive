"use client";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid border-t border-r hover:border-b hover:border-l border-textlight/80 dark:border-textdark/80 rounded-3xl backdrop-blur-md bg-cardslight/80 dark:bg-cardsdark/30 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4 flex justify-center overflow-hidden align-center",
        "1x1": "md:col-span-1 col-span-full row-span-1 md:p-8 p-4 flex justify-center overflow-hidden align-center",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4 flex justify-center overflow-hidden",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4 flex justify-center overflow-hidden",
        "2x4": "md:col-span-2 col-span-full row-span-4 relative overflow-hidden flex justify-center",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItem = ({ size, children }: GridItemProps) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className:
            "hover:dark:bg-cardsdark/50 hover:bg-cardslight/50 duration-75 transition-colors ease-in-out",
        })
      )}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
