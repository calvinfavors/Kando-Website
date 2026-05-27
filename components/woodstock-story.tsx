import Image from "next/image"

export function WoodstockStory() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-beige/20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Opening narrative */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32 opacity-0 animate-fade-in-up">
          <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-6">
            The Place We Call Home
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            A Town With Character
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto text-pretty font-light">
            Once a quiet stop along the Louisville & Nashville Railroad in 1897, Woodstock has grown into one of Georgia&apos;s most beloved communities — a place where history meets progress, and neighbors still wave from their porches.
          </p>
        </div>

        {/* Story Block 1 - Downtown */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/woodstock-downtown.jpg"
                alt="Historic Downtown Woodstock, Georgia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-olive/10 rounded-sm -z-10" />
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in-up stagger-2">
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-light text-foreground leading-tight">
              Where Main Street Still Means Something
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Walk down Main Street and you&apos;ll find locally-owned boutiques, farm-to-table restaurants, and coffee shops where the barista knows your order. The historic depot still stands as a reminder of simpler times.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Friday nights at Reformation Brewery. Saturday mornings at the farmers market. Sunday strolls past the Amphitheater. This is a town where community isn&apos;t a marketing word — it&apos;s a way of life.
            </p>
          </div>
        </div>

        {/* Story Block 2 - Community */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="space-y-6 opacity-0 animate-fade-in-up order-2 lg:order-1">
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-light text-foreground leading-tight">
              A Community That Shows Up
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether it&apos;s the Cotton Pickin&apos; Fair, Concerts on the Green, or neighbors gathering at a local fundraiser — Woodstock shows up for each other. It&apos;s the kind of place where you recognize faces at the grocery store.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Top-rated Cherokee County schools, youth sports leagues, and family-friendly events make this a place where roots grow deep and memories are made.
            </p>
          </div>

          <div className="relative opacity-0 animate-slide-in-right order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/woodstock-community.jpg"
                alt="Woodstock community gathering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-beige/50 rounded-sm -z-10" />
          </div>
        </div>

        {/* Story Block 3 - Location */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto mb-20 md:mb-28">
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/woodstock-nature.jpg"
                alt="Nature trails near Woodstock"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-earth-blue/10 rounded-sm -z-10" />
          </div>

          <div className="space-y-6 opacity-0 animate-fade-in-up stagger-2">
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl font-light text-foreground leading-tight">
              30 Minutes From Atlanta, Worlds Away From the Noise
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Miles of trails along the Greenprints system. Kayaking on Lake Allatoona. Morning runs through tree-lined neighborhoods. The best of both worlds: metro convenience with small-town peace.
            </p>
            <p className="text-lg text-olive font-medium leading-relaxed italic">
              &ldquo;This isn&apos;t just where I work. It&apos;s where I chose to plant roots.&rdquo;
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up stagger-3">
          <div className="text-center p-6 bg-background/50 rounded-sm">
            <p className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light text-olive mb-2">1897</p>
            <p className="text-muted-foreground">Founded as a railroad town</p>
          </div>
          <div className="text-center p-6 bg-background/50 rounded-sm">
            <p className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light text-olive mb-2">35K+</p>
            <p className="text-muted-foreground">Residents who call it home</p>
          </div>
          <div className="text-center p-6 bg-background/50 rounded-sm">
            <p className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-light text-olive mb-2">30 min</p>
            <p className="text-muted-foreground">To downtown Atlanta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
