"use client"

import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Neural Network Visualization",
    desc: "AGI research visualization",
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "3D Architectural Design",
    desc: "Futuristic building concept",
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Abstract Digital Art",
    desc: "Computational creativity",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Portrait Photography",
    desc: "Capturing human essence",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Landscape Photography",
    desc: "Natural beauty captured",
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "3D Character Design",
    desc: "Digital character creation",
    url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Urban Architecture",
    desc: "Modern city photography",
    url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 8,
    type: "image",
    title: "Abstract Patterns",
    desc: "Geometric digital art",
    url: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-800 px-6">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Gallery"
        description="Explore my creative work through an interactive bento grid - drag to reorder, click to view"
      />
    </section>
  )
}
