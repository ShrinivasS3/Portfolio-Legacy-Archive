// components/navigation/Menubar.tsx
'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Links from "@/components/Links"

const variants = {
  open: {
    clipPath: "circle(2000px at 200% 50%)",
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 90,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(0px at 200% 50%)",
    transition: {
      delay: 0.05,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
}



export default function Menubar() {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen((prev) => !prev);
      setOpen((prev) => !prev);
    };
  
    // Create a combined setter function
    const handleClose = () => {
      setOpen(false);
      setIsOpen(false);
    };
  
    return (
      <motion.div 
        className="flex flex-col items-center justify-center text-inherit"
        animate={open ? "open" : "closed"}
        initial="closed"
      >
        <motion.div 
          className="fixed top-0 right-0 bottom-0 w-[400px] bg-primary 
          rounded-l-[70%] z-20"
          variants={variants}
        >
          <div className="w-full h-full flex flex-col items-center justify-evenly text-inter">
            <Links onClose={handleClose} />
          </div>
        </motion.div>
    <button 
      className="z-30 w-[50px] h-[50px] text-lg rounded-full bg-transparent 
      border-none cursor-pointer relative flex items-center justify-center"
      onClick={handleClick}
    >
        <motion.span
            className="absolute text-dark font-medium lg:text-lg text-base"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isOpen ? 0 : 1 , scale: 1 }}
            transition={{ duration: 1 }}
        >
            MENU
        </motion.span>
        
        <motion.div
            className="absolute z-50"
            initial={false}
            animate={{ opacity: isOpen ? 1 : 0 }}
        >
            <svg width="20" height="20" viewBox="0 0 20 20">
            <motion.path
                stroke="#FFFDD0"
                strokeWidth="2"
                strokeLinecap="round"
                d="M 2 2 L 18 18"
            />
            <motion.path
                stroke="#FFFDD0"
                strokeWidth="2"
                strokeLinecap="round"
                d="M 2 18 L 18 2"
            />
            </svg>
        </motion.div>
        </button>
    </motion.div>
  )
}
