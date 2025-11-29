"use client"

import type React from "react"
import { motion } from "framer-motion"
import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"

interface BentoCardProps {
  title: string
  icon: React.ReactNode
  description: string
  colors: string[]
  delay: number
}

const BentoCard: React.FC<BentoCardProps> = ({ title, icon, description, colors, delay }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="font-sans relative overflow-hidden h-full rounded-2xl border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-6 text-white backdrop-blur-sm h-full flex flex-col"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="text-[#3867D6] mb-4 w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          variants={item}
        >
          {icon}
        </motion.div>
        <motion.h3 className="text-xl font-medium text-white mb-3" variants={item}>
          {title}
        </motion.h3>
        <motion.p className="text-gray-300 leading-relaxed" variants={item}>
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export { BentoCard }
