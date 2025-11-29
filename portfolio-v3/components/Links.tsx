// components/navigation/Links.tsx
'use client'

import { motion } from "framer-motion"
import Link from "next/link"

const links = [
  { title: "Home", url: "/" },
  { title: "About", url: "#about" },
  { title: "Education", url: "#education" },
  { title: "Experience", url: "#experience" },
  { title: "Projects", url: "#projects" },
  { title: "Works", url: "#works" },
  { title: "Contact", url: "#contact" },
]

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

interface LinksProps {
  onClose: () => void;
}

export default function Links({ onClose }: LinksProps) {
    return (
      <>
        {links.map((link) => (
          <motion.div
            key={link.title}
            variants={itemVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={link.url}
              className="text-2xl lg:text-4xl text-inter text-cream hover:text-accent transition-colors"
              onClick={onClose}
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </>
    )
  }
