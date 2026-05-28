"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, Clock, Download, ChevronDown } from "lucide-react"
import { getSpringCleanPosts } from "@/lib/blog-data"
import { useState } from "react"

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function BlogPageClient() {
  const [isSpringCleanExpanded, setIsSpringCleanExpanded] = useState(false)
  const springCleanPosts = getSpringCleanPosts()
  const mainPost = springCleanPosts.find((post) => !post.weekNumber)
  const weekPosts = springCleanPosts.filter((post) => post.weekNumber)

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 bg-olive/10 text-olive text-sm font-medium rounded-full mb-4">
              The Kando Corner
            </span>
            <h1 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 md:mb-6 text-balance">
              Spring Clean Challenge
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              A 14-week cleaning and decluttering challenge to help you simplify your home, one space at a time
            </p>
          </div>

          {/* Main Challenge Card */}
          {mainPost && (
            <div className="max-w-5xl mx-auto mb-16">
              <Link
                href={`/blog/${mainPost.slug}`}
                className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px] overflow-hidden bg-gradient-to-br from-olive/20 to-earth-blue/20">
                    {mainPost.image && (
                      <Image
                        src={mainPost.image || "/placeholder.svg"}
                        alt={mainPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-olive text-xs font-semibold rounded-full shadow-lg">
                        14-Week Challenge
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="inline-block px-3 py-1 bg-olive/10 text-olive text-xs font-medium rounded-full">
                        {mainPost.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={mainPost.date}>{mainPost.formattedDate}</time>
                      </div>
                    </div>

                    <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-4 group-hover:text-olive transition-colors text-balance leading-tight">
                      {mainPost.title}
                    </h2>

                    <p className="text-muted-foreground text-base md:text-lg mb-6 line-clamp-3 text-pretty">
                      {mainPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Minis-%202025-12%20%281%29-dggfikaEyzTAplU3XyhqgrrR5h1FWH.jpg"
                            alt="Jenn Kandt"
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">Jenn Kandt</p>
                          <p className="text-xs text-muted-foreground">Founder, Kando Homes</p>
                        </div>
                      </div>

                      <div className="flex items-center text-olive font-semibold text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Spring Clean Series Bucket */}
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setIsSpringCleanExpanded(!isSpringCleanExpanded)}
              className="w-full group bg-gradient-to-br from-olive/5 to-earth-blue/5 border-2 border-olive/30 rounded-2xl p-8 hover:border-olive/60 hover:shadow-lg transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1.5 bg-olive text-white text-xs font-semibold rounded-full mb-4">
                    14-Week Series
                  </span>
                  <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-medium text-foreground mb-2">
                    Spring Clean Weekly Guides
                  </h2>
                  <p className="text-muted-foreground max-w-2xl">
                    All 14 weeks of the Spring Clean challenge guide posts—click to explore each week&apos;s topics, cleaning tips, and actionable checklists.
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-olive transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isSpringCleanExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Week Cards Grid - Expandable */}
            {isSpringCleanExpanded && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                {weekPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Image */}
                    <div className="aspect-[16/9] bg-gradient-to-br from-olive/20 to-earth-blue/20 relative overflow-hidden">
                      {post.image && (
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="inline-block px-3 py-1 bg-white/95 backdrop-blur-sm text-olive text-xs font-bold rounded-full shadow-sm">
                          Week {post.weekNumber}
                        </span>
                        {post.downloadable && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-olive/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                            <Download className="w-3 h-3" />
                            PDF
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={post.date}>{post.formattedDate}</time>
                        </div>
                        <span className="text-border">•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{estimateReadTime(post.content)} min read</span>
                        </div>
                      </div>

                      <h3 className="font-[family-name:var(--font-serif)] text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-olive transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2 text-pretty flex-1">{post.excerpt}</p>

                      <div className="flex items-center text-olive font-medium text-sm group-hover:gap-1.5 transition-all pt-4 border-t border-border mt-auto">
                        Read Guide
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Instagram CTA */}
          <div className="max-w-4xl mx-auto mt-16 md:mt-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-olive/10 via-beige/30 to-earth-blue/10 rounded-2xl p-8 md:p-12 border border-olive/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-olive/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-earth-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative text-center">
                <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-light text-foreground mb-4">
                  Join the Community
                </h3>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  Follow along on Instagram for daily tips, encouragement, and to share your progress with others doing
                  the challenge. Tag your before and afters!
                </p>
                <a
                  href="https://instagram.com/JennKandt_KandoHomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-olive text-white rounded-lg hover:bg-olive/90 transition-colors font-medium"
                >
                  Follow @JennKandt_KandoHomes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
