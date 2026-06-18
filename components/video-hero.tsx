"use client"

import { useEffect } from "react"

import { useRef } from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const videos = [
  "/images/6d03a4bd-b783-4159-b60c-46012891c42e.mp4",
  "/images/be5d368a-e901-4fef-857d-27c8eed79d18.mp4",
  "/images/c2c9ead5-e97a-4156-b5e3-e8da343a1c46.mp4",
]

export function VideoHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      video.play().catch(() => {
        console.log("[v0] Autoplay prevented by browser")
      })
    }

    const handleVideoEnd = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }

    video.addEventListener("loadeddata", handleLoadedData)
    video.addEventListener("ended", handleVideoEnd)

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData)
      video.removeEventListener("ended", handleVideoEnd)
    }
  }, [currentVideoIndex])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-lifestyle.png"
          alt="Welcoming craftsman home with a front porch in North Georgia at golden hour"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-8 md:space-y-10">
          <p className="text-white/80 uppercase tracking-[0.25em] text-sm font-medium animate-fade-in-up">
            Woodstock &amp; North Georgia
          </p>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.12] tracking-tight animate-fade-in-up stagger-1">
            <span className="block text-balance">Helping people find homes</span>
            <span className="block text-balance">that fit the life they want to live.</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-2 px-4 text-pretty">
            Homeownership is about more than square footage. It&apos;s about community, lifestyle, and finding your place — guided by someone who truly knows North Georgia.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 md:pt-8 animate-fade-in-up stagger-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 text-lg md:text-xl px-10 md:px-12 py-7 md:py-8 rounded-sm transition-all hover:scale-105 shadow-2xl font-semibold"
            >
              <Link href="#jenn-story">Meet Your Guide</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg md:text-xl px-10 md:px-12 py-7 md:py-8 rounded-sm transition-all hover:scale-105 font-semibold bg-transparent"
            >
              <Link href="#contact">Start the Conversation</Link>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-all hover:scale-110 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={48} strokeWidth={1.5} />
      </button>

      {/* Removed video controls */}
    </section>
  )
}
