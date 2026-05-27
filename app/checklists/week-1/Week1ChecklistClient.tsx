"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, Printer } from "lucide-react"

export default function Week1ChecklistClient() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link
              href="/blog/spring-clean-week-1-laundry-room"
              className="inline-flex items-center gap-2 text-olive hover:gap-3 transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Week 1 Blog
            </Link>
          </div>

          {/* Header */}
          <header className="max-w-4xl mx-auto mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-olive/10 to-earth-blue/10 rounded-full text-sm text-olive font-medium mb-6">
              <span>Spring Clean with Kando Homes</span>
              <span>•</span>
              <span>Week 1</span>
            </div>
            <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              Laundry Room Checklist
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your printable guide to tackling the laundry room this week. Right-click or long-press the image to save
              or print.
            </p>
          </header>

          {/* Action Buttons */}
          <div className="max-w-4xl mx-auto mb-8 flex flex-wrap justify-center gap-4">
            <a
              href="/images/week-1-checklist-publish-by-1-12-26-9nljp.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2d2d44] transition-colors font-semibold text-sm shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a2e] border-2 border-[#1a1a2e] rounded-lg hover:bg-[#1a1a2e] hover:text-white transition-colors font-semibold text-sm"
            >
              <Printer className="w-4 h-4" />
              Print This Page
            </button>
          </div>

          {/* Checklist Image */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-border print:shadow-none print:border-none">
              <Image
                src="/images/week-1-checklist-publish-by-1-12-26-9nljp.pdf"
                alt="Week 1 Laundry Room Checklist - Spring Clean with Kando Homes"
                width={800}
                height={1035}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>

            {/* Instructions */}
            <div className="mt-8 p-6 bg-beige/30 rounded-xl border border-border text-center">
              <h3 className="font-semibold text-foreground mb-2">How to Save This Checklist</h3>
              <p className="text-muted-foreground text-sm">
                <strong>Desktop:</strong> Right-click the image and select "Save image as..." or click the Download PDF
                button above.
                <br />
                <strong>Mobile:</strong> Long-press the image and select "Save to Photos" or "Download image".
              </p>
            </div>

            {/* Back to Blog CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/blog/spring-clean-week-1-laundry-room"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2d2d44] transition-colors font-semibold"
              >
                <ArrowLeft className="w-5 h-5" />
                Return to Week 1 Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
