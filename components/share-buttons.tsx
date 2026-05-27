"use client"

import { Facebook, Twitter, Linkedin, Link2, Mail } from "lucide-react"
import { useState } from "react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border border-border hover:bg-olive hover:text-white hover:border-olive transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border border-border hover:bg-olive hover:text-white hover:border-olive transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full border border-border hover:bg-olive hover:text-white hover:border-olive transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={shareLinks.email}
        className="p-2 rounded-full border border-border hover:bg-olive hover:text-white hover:border-olive transition-colors"
        aria-label="Share via Email"
      >
        <Mail className="w-4 h-4" />
      </a>
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full border border-border hover:bg-olive hover:text-white hover:border-olive transition-colors relative"
        aria-label="Copy link"
      >
        <Link2 className="w-4 h-4" />
        {copied && (
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-olive text-white text-xs rounded whitespace-nowrap">
            Copied!
          </span>
        )}
      </button>
    </div>
  )
}
