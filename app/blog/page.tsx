import type { Metadata } from "next"
import { BlogPageClient } from "./blog-client"

export const metadata: Metadata = {
  title: "Blog | Spring Clean Challenge & Real Estate Insights - Kando Homes",
  description:
    "Join the Spring Clean with Kando Homes 14-week challenge. Expert cleaning tips, organizing advice, and real estate insights from Jenn Kandt.",
  alternates: {
    canonical: "https://kandohomes.com/blog",
  },
  openGraph: {
    title: "Blog | Kando Homes - Spring Clean Challenge",
    description: "Join the 14-week Spring Clean challenge and transform your home one room at a time with Jenn Kandt.",
    url: "https://kandohomes.com/blog",
    type: "website",
    images: [
      {
        url: "/images/cleaning-20challenge-20-20weekly-20calendar.png",
        width: 1200,
        height: 630,
        alt: "Spring Clean with Kando Homes",
      },
    ],
  },
}

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export default function BlogPage() {
  return <BlogPageClient />
}
