"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-olive text-white z-[60]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 py-2.5 sm:py-3 text-center">
          <p className="text-xs sm:text-sm font-medium pr-6 sm:pr-8">
            <span className="hidden sm:inline">Register for the </span>
            <span className="sm:hidden">Join the </span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScsyiL3gTqzAMd9IZeHyY6rSbZjzD6KXZJhdoRoNY4cTGOANQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-semibold hover:text-beige transition-colors"
            >
              Home Buyer Seminar & Market Update
            </a>
            <span className="hidden sm:inline"> — Free event, limited seats!</span>
          </p>
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-3 sm:right-4 p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
