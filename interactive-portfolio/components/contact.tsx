"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import AnimatedFooter from "@/components/ui/animated-footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const footerLinks = {
    left: [
      { href: "#who-i-am", label: "About Me" },
      { href: "#what-i-do", label: "Services" },
      { href: "#case-studies", label: "Projects" },
    ],
    right: [
      { href: "#gallery", label: "Gallery" },
      { href: "#thoughts", label: "Blog" },
      { href: "https://github.com", label: "GitHub" },
      { href: "https://linkedin.com", label: "LinkedIn" },
      { href: "https://twitter.com", label: "Twitter" },
    ],
  }

  return (
    <section id="contact" className="bg-gray-800">
      <div className="max-w-2xl mx-auto text-center px-6 py-24">
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-6">Let's Build Something Together</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Have an interesting project or just want to chat about AI, art, or technology? I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-lg p-4 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-[#3867D6] focus:ring-[#3867D6]"
            required
          />
          <Textarea
            name="message"
            rows={4}
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-lg p-4 border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:border-[#3867D6] focus:ring-[#3867D6] resize-none"
            required
          />
          <Button
            type="submit"
            className="bg-[#3867D6] hover:bg-[#F5A623] text-white py-4 rounded-2xl transition-all duration-300 hover:scale-105"
          >
            Send Message
          </Button>
        </form>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter className="w-8 h-8" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>

      <AnimatedFooter
        leftLinks={footerLinks.left}
        rightLinks={footerLinks.right}
        copyrightText="© Shrinivas Sesadri 2025. All Rights Reserved"
        barCount={23}
      />
    </section>
  )
}
