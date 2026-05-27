"use client"
import Image from "next/image"
import { useParams, notFound } from "next/navigation"
import { Calendar, ArrowLeft, Clock, ChevronRight, FileDown, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { blogPosts, getSpringCleanPosts } from "@/lib/blog-data"
import { ShareButtons } from "@/components/share-buttons"

function estimateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts.find((p) => p.slug === slug)
  const [showChecklist, setShowChecklist] = useState(false)

  if (!post) {
    notFound()
  }

  const readTime = estimateReadTime(post.content)
  const springCleanPosts = getSpringCleanPosts()

  const currentIndex = springCleanPosts.findIndex((p) => p.slug === post.slug)
  const prevPost = currentIndex > 0 ? springCleanPosts[currentIndex - 1] : null
  const nextPost = currentIndex < springCleanPosts.length - 1 ? springCleanPosts[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-background">
      {showChecklist && post.checklistImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowChecklist(false)}
        >
          <button
            onClick={() => setShowChecklist(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close checklist"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={post.checklistImage || "/placeholder.svg"}
              alt={`Week ${post.weekNumber} Checklist`}
              width={800}
              height={1200}
              className="w-full h-auto"
              priority
            />
            <div className="sticky bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white to-transparent">
              <p className="text-center text-sm text-muted-foreground">Right-click or long-press to save this image</p>
            </div>
          </div>
        </div>
      )}

      <article className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-olive hover:gap-3 transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </Link>
          </div>

          <header className="max-w-4xl mx-auto mb-8 md:mb-12">
            {post.isSpringCleanSeries && (
              <div className="mb-6">
                <Link
                  href="/blog/spring-clean-with-kando-homes"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-olive/10 to-earth-blue/10 rounded-full text-sm text-olive font-medium hover:from-olive/20 hover:to-earth-blue/20 transition-colors"
                >
                  <span>Spring Clean with Kando Homes</span>
                  {post.weekNumber && (
                    <>
                      <ChevronRight className="w-4 h-4" />
                      <span>Week {post.weekNumber}</span>
                    </>
                  )}
                </Link>
              </div>
            )}

            {post.checklistImage && (
              <div className="mb-6">
                <button
                  onClick={() => setShowChecklist(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2d2d44] transition-colors font-semibold"
                >
                  <FileDown className="w-5 h-5" />
                  View Week {post.weekNumber} Checklist
                </button>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1.5 bg-olive/10 text-olive text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{post.formattedDate}</time>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{readTime} min read</span>
              </div>
            </div>

            <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 text-balance leading-tight">
              {post.title}
            </h1>

            {post.image && (
              <div className="relative w-full rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-olive/5 to-earth-blue/5 shadow-2xl">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={900}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-b border-border py-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-olive to-earth-blue flex items-center justify-center">
                  <Image
                    src="/images/jenn-kandt-profile.jpg"
                    alt="Jenn Kandt"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Jenn Kandt</p>
                  <p className="text-sm text-muted-foreground">Founder, Kando Homes</p>
                </div>
              </div>

              <ShareButtons url={`https://kandohomes.com/blog/${post.slug}`} title={post.title} />
            </div>
          </header>

          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-[family-name:var(--font-serif)] 
                prose-headings:font-light 
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-olive prose-a:font-medium prose-a:no-underline hover:prose-a:underline 
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:my-6 prose-ul:space-y-2
                prose-li:text-muted-foreground prose-li:leading-relaxed
                prose-img:rounded-xl prose-img:shadow-lg
                prose-hr:my-10 prose-hr:border-border"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {post.checklistImage && (
              <div className="mt-12 p-8 bg-gradient-to-br from-beige/50 to-olive/5 rounded-2xl border border-border text-center">
                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-light text-foreground mb-4">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  View the printable checklist to guide you through this week's tasks.
                </p>
                <button
                  onClick={() => setShowChecklist(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2d2d44] transition-colors font-semibold text-base"
                >
                  <FileDown className="w-5 h-5" />
                  View Week {post.weekNumber} Checklist
                </button>
              </div>
            )}

            {post.isSpringCleanSeries && (prevPost || nextPost) && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-[family-name:var(--font-serif)] text-xl font-light text-foreground mb-6">
                  Continue the Challenge
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {prevPost && (
                    <Link
                      href={`/blog/${prevPost.slug}`}
                      className="group p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Previous</span>
                      <p className="font-medium text-foreground group-hover:text-olive transition-colors mt-1">
                        {prevPost.weekNumber ? `Week ${prevPost.weekNumber}: ` : ""}
                        {prevPost.title.replace(/^Week \d+: /, "")}
                      </p>
                    </Link>
                  )}
                  {nextPost && (
                    <Link
                      href={`/blog/${nextPost.slug}`}
                      className="group p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5 sm:text-right"
                    >
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">Next</span>
                      <p className="font-medium text-foreground group-hover:text-olive transition-colors mt-1">
                        {nextPost.weekNumber ? `Week ${nextPost.weekNumber}: ` : ""}
                        {nextPost.title.replace(/^Week \d+: /, "")}
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            )}

            <div className="mt-16 md:mt-20 p-8 md:p-10 bg-gradient-to-br from-beige/50 via-olive/5 to-earth-blue/5 rounded-2xl border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-olive/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative text-center">
                <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-light text-foreground mb-4">
                  Join the Community
                </h3>
                <p className="text-muted-foreground mb-8 text-lg max-w-xl mx-auto">
                  Follow along on Instagram for daily encouragement, tips, and to share your progress with others doing
                  the challenge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://instagram.com/JennKandt_KandoHomes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2d2d44] transition-colors font-semibold text-base"
                  >
                    Follow @JennKandt_KandoHomes
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Share this article:</p>
              <ShareButtons url={`https://kandohomes.com/blog/${post.slug}`} title={post.title} />
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
