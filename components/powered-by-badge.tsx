"use client"

import Image from "next/image"

export function PoweredByBadge() {
  return (
    <a
      href="https://localrealtyga.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-neutral-800 px-4 py-2.5 shadow-lg transition-all duration-300 hover:bg-neutral-700 hover:shadow-xl hover:scale-105 md:bottom-6 md:right-6 md:px-5 md:py-3"
      aria-label="Powered by Local Realty"
    >
      <span className="text-xs text-neutral-300 md:text-sm">Powered by</span>
      <Image
        src="/images/ba8d9d53-820f-4c8e-9bca-f4ee82943a1e.webp"
        alt="Local Realty"
        width={100}
        height={24}
        className="h-5 w-auto md:h-6"
      />
    </a>
  )
}
