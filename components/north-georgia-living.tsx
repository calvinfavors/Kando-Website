import Image from "next/image"
import { Trees, Sprout, Dog, Tractor } from "lucide-react"

const highlights = [
  {
    icon: Tractor,
    title: "Acreage & Hobby Farms",
    description:
      "Room to breathe, raise chickens, plant an orchard, or simply enjoy the quiet. I help buyers navigate land, wells, septic, and what acreage really means day to day.",
  },
  {
    icon: Trees,
    title: "Outdoor Recreation",
    description:
      "Lake Allatoona, the Greenprints trail system, and the Blue Ridge foothills are right out your back door. Live where the weekend adventure starts at home.",
  },
  {
    icon: Sprout,
    title: "Gardening & Homesteading",
    description:
      "From raised beds to full kitchen gardens, North Georgia's long growing season is a gardener's dream. I love helping clients picture the life they'll grow here.",
  },
  {
    icon: Dog,
    title: "Dog-Friendly & Family Living",
    description:
      "Fenced yards, walkable neighborhoods, and family-friendly communities with top-rated Cherokee County schools — homes built for the whole family, paws included.",
  },
]

export function NorthGeorgiaLiving() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-olive uppercase tracking-[0.2em] text-sm font-medium mb-6">North Georgia Living</p>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8 text-balance">
            Room to Roam, Roots to Grow
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Beyond downtown, North Georgia opens up into acreage, hobby farms, mountain views, and the kind of
            outdoor lifestyle that&apos;s hard to find anywhere else. Here&apos;s what makes living here special.
          </p>
        </div>

        {/* Image + Cards */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Stacked images */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4 md:space-y-6">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/north-georgia-acreage.png"
                  alt="Rolling acreage with a farmhouse and garden in the North Georgia foothills"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/lifestyle-dog.png"
                  alt="A happy dog enjoying a grassy backyard"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12">
              <div className="relative aspect-square rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/lifestyle-garden.png"
                  alt="A lush backyard garden with raised beds and blooming flowers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                <Image
                  src="/images/north-georgia-trail.png"
                  alt="A forest hiking trail through North Georgia woodlands"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-card border border-border rounded-lg p-6 hover:border-olive/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center mb-4 group-hover:bg-olive/20 transition-colors">
                  <item.icon className="w-6 h-6 text-olive" />
                </div>
                <h3 className="font-medium text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
