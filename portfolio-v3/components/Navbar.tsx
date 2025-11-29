// components/navigation/Navbar.tsx
'use client'

import { motion } from "framer-motion"
import { SlGlobe } from "react-icons/sl"
import Menubar from "@/components/Menubar"

export default function Navbar() {
  return (
    <nav className="h-[50px] lg:text-lg text-base text-inter">
      <div className="max-w-[95%] px-4 mx-auto h-full flex justify-between items-center text-dark">
        
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="font-medium"
        >
          
          SHRINIVAS
        </motion.span>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center h-full justify-evenly"
        >
          <div className="flex items-center p-1.5">
            <SlGlobe />
          </div>
          <span>
            TN,
          </span>
          <span>
          INDIA
          </span>
        </motion.div>

        <motion.div className="flex items-center h-full">
          {/* <ThemeToggle/> */}
          <Menubar />
        </motion.div>
      </div>
    </nav>
  )
}
