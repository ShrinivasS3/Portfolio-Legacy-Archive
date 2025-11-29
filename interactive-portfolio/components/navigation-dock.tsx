"use client"

import { useState, useEffect } from "react"
import MacOSDock from "@/components/ui/mac-os-dock"
import { Home, User, Briefcase, FolderOpen, Clock, ImageIcon, MessageSquare, Mail } from "lucide-react"


// Create icon components as data URLs for the dock
const createIconDataUrl = (IconComponent: any, color = "#3867D6") => {
  const svg = `
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="${color}"/>
      <g transform="translate(4, 4)" stroke="white" strokeWidth="1.5" fill="none">
        ${
          IconComponent === Home
            ? '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>'
            : IconComponent === User
              ? '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
              : IconComponent === Briefcase
                ? '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
                : IconComponent === FolderOpen
                  ? '<path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.73 3l-1.73 3a2 2 0 0 1-1.73 1H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/>'
                  : IconComponent === Clock
                    ? '<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>'
                    : IconComponent === ImageIcon
                      ? '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>'
                      : IconComponent === MessageSquare
                        ? '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'
                        : IconComponent === Mail
                          ? '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'
                          : '<circle cx="12" cy="12" r="10"/>'
        }
      </g>
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

const navigationApps = [
  {
    id: "hero",
    name: "Home",
    icon: "/brain.png", // Using the brain icon for the home section
    // icon: createIconDataUrl(Home, "#3867D6"), // Uncomment this line to use the Home icon instead
  },
  {
    id: "who-i-am",
    name: "About",
    icon: "/person.png",
  },
  // {
  //   id: "timeless-fascinations",
  //   name: "Fascinations",
  //   icon: "/clock.png",
  // },
  {
    id: "what-i-do",
    name: "Services",
    icon: "/toolbox.png",
  },
  {
    id: "case-studies",
    name: "Projects",
    icon: "/book.png",
  },
  {
    id: "timeline",
    name: "Journey",
    icon: "/clock.png",
  },
  {
    id: "gallery",
    name: "Gallery",
    icon: "/gallary.png", // Replace with your gallery icon
  },
  {
    id: "thoughts",
    name: "Blog",
    icon: "/blog.png",
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/inbox.png",
  },
]

export default function NavigationDock() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationApps.map((app) => app.id)
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleAppClick = (appId: string) => {
    const element = document.getElementById(appId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <MacOSDock apps={navigationApps} onAppClick={handleAppClick} openApps={[activeSection]} />
    </div>
  )
}
