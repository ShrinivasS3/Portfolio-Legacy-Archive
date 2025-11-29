import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "Synchronized Chaos",
    excerpt: "Exploring the poetic ties between time, mechanics, and creation.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "synchronized-chaos",
    date: "March 2024",
  },
  {
    title: "The Future of AGI",
    excerpt: "Thoughts on building artificial general intelligence that truly understands.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "future-of-agi",
    date: "February 2024",
  },
  {
    title: "Art Meets Algorithm",
    excerpt: "How computational creativity is reshaping digital art and design.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "art-meets-algorithm",
    date: "January 2024",
  },
  {
    title: "Photography in the AI Age",
    excerpt: "Maintaining human perspective in an increasingly automated world.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "photography-ai-age",
    date: "December 2023",
  },
]

export default function Thoughts() {
  return (
    <section id="thoughts" className="py-20 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-12 text-center">Thoughts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800 border border-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group hover:border-[#3867D6]"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3867D6] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-[#3867D6] font-medium hover:underline">
                Read More →
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="text-[#F5A623] font-semibold hover:underline text-lg">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
