import { MapPin } from "lucide-react"

const areasServed = [
  { name: "Woodstock", description: "Where I call home" },
  { name: "Marietta", description: "Historic squares & charm" },
  { name: "Canton", description: "Mountain views & trails" },
  { name: "Kennesaw", description: "Family-friendly growth" },
  { name: "Acworth", description: "Lake life awaits" },
  { name: "Cartersville", description: "Small-town warmth" },
]

export function CommunityRoots() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 opacity-0 animate-fade-in-up">
            <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-6">
              Community Roots
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
              I Know These Streets Because I Walk Them
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
              From the tree-lined neighborhoods of Woodstock to the historic squares of Marietta, I don&apos;t just sell homes here — I&apos;m part of the fabric of this community.
            </p>
          </div>

          {/* Areas served grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20 opacity-0 animate-fade-in-up stagger-1">
            {areasServed.map((area) => (
              <div
                key={area.name}
                className="group bg-background p-6 rounded-sm border border-border hover:border-olive/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-olive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-olive/20 transition-colors">
                    <MapPin className="w-5 h-5 text-olive" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-foreground mb-1">{area.name}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Involvement highlight */}
          <div className="bg-gradient-to-br from-olive/5 via-beige/20 to-earth-blue/5 rounded-lg p-8 md:p-12 opacity-0 animate-fade-in-up stagger-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-light text-foreground mb-4">
                  More Than a Business Card
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a State Director with the Cherokee Association of REALTORS and 2024 Chair of the Young Professionals Network, I&apos;m invested in shaping the future of real estate in our region — not just making sales.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You&apos;ll find me fostering rescue dogs, supporting local businesses, and cheering on our community at downtown events. This isn&apos;t just where I work — it&apos;s where I live, volunteer, and put down roots.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-background/80 backdrop-blur-sm p-5 rounded-sm">
                  <p className="text-olive font-medium text-sm uppercase tracking-wider mb-1">State Director</p>
                  <p className="text-foreground">Cherokee Association of REALTORS®</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-5 rounded-sm">
                  <p className="text-olive font-medium text-sm uppercase tracking-wider mb-1">2024 Chair</p>
                  <p className="text-foreground">Young Professionals Network (YPN)</p>
                </div>
                <div className="bg-background/80 backdrop-blur-sm p-5 rounded-sm">
                  <p className="text-olive font-medium text-sm uppercase tracking-wider mb-1">Licensed Since</p>
                  <p className="text-foreground">2017 — License #388593</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
