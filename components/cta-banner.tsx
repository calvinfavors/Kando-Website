import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-backyard.png"
          alt="A warm backyard gathering at golden hour with string lights"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-background/80 uppercase tracking-[0.2em] text-sm font-medium mb-5">Let&apos;s Connect</p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-background leading-tight mb-6 text-balance">
            Let&apos;s start a conversation about your next chapter.
          </h2>
          <p className="text-lg md:text-xl text-background/85 leading-relaxed mb-8 text-pretty">
            Buying, selling, relocating, or just curious about the market? There&apos;s no pressure and no pitch —
            just a friendly chat with someone who knows this community inside and out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base md:text-lg h-14 px-8 py-7 transition-all hover:scale-105 font-semibold"
            >
              <Link href="#contact" className="flex items-center gap-2">
                <MessageCircle size={20} />
                Start the Conversation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-background text-background hover:bg-background/10 bg-transparent text-base md:text-lg h-14 px-8 py-7 transition-all hover:scale-105 font-semibold"
            >
              <a href="tel:6199338609" className="flex items-center gap-2">
                <Phone size={20} />
                (619) 933-8609
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
