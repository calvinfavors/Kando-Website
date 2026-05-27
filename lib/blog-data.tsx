export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  formattedDate: string
  author: string
  category: string
  image: string
  readTime: string
  weekNumber?: number
  isSpringCleanSeries?: boolean
  checklistImage?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "spring-clean-with-kando-homes",
    title: "Spring Clean with Kando Homes: A 14-Week Challenge",
    excerpt:
      "A 14-week cleaning and decluttering challenge designed to help you simplify your home, stay accountable, and create more peace—one space at a time.",
    content: `
      <p class="text-xl leading-relaxed mb-8">A 14-week cleaning and decluttering challenge designed to help you simplify your home, stay accountable, and create more peace—one space at a time.</p>
      
      <p>If you've been wanting a cleaner, more organized home but feel overwhelmed by where to start, this challenge breaks it down in a simple, realistic way.</p>
      
      <p>Once you register, you'll receive an email every Monday from January 12 through April 13. Each week focuses on a different room or space in the home. The emails will include cleaning and organizing tips, favorite non-toxic cleaning products, local nonprofits where you can donate unwanted items, simple design ideas, and encouragement to keep going. There may also be prizes throughout the challenge, with announcements shared on social media.</p>
      
      <p>I'll be doing this challenge right alongside you and sharing updates as it unfolds. Make sure to follow <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer">@JennKandt_KandoHomes</a> on Instagram for encouragement, accountability, and progress along the way.</p>
      
      <p class="text-lg font-medium mt-8">I'm so glad you're here, and I can't wait to do this together.</p>
      
      <p class="mt-6 text-olive font-semibold">— Jenn</p>
    `,
    date: "2025-01-05",
    formattedDate: "January 5, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-calendar-overview.png",
    readTime: "3 min read",
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-1-laundry-room",
    title: "Week 1: Laundry Room",
    excerpt:
      "Kick off the Spring Clean challenge by tackling your laundry room—whether it's a spacious walk-in or a simple hall closet, let's make it work better for you.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Welcome to week one of Spring Cleaning with Kando Homes.</p>
      
      <p class="text-lg leading-relaxed mb-6">I'm so glad you're here and doing this together. There's something powerful about starting small, and this week we're kicking things off with a space we all use but rarely love: <strong>the laundry room</strong>.</p>
      
      <p class="mb-6">Whether you have a large walk-in laundry room with cabinets, counters, and shelves—or a simple hall closet that just fits the washer and dryer—this week is about making that space work better for you with what you've got. Big or small, every laundry space has potential.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">Already feeling good about your laundry room?</p>
        <p class="text-muted-foreground">I want to challenge you... A quick reset can still make a big difference. And if you find yourself with extra time or energy, this is a great "low-risk" space to up your game—adding shelving, swapping hardware, trying peel-and-stick wallpaper, or even experimenting with paint.</p>
      </div>
      
      <p class="mb-6"><strong>Color drenching</strong> on your wish list but not ready to commit in a high-traffic room? Laundry rooms and closets are the perfect place to try it.</p>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">For me personally, I painted my laundry room last year…but let's just say the execution was less than mediocre. With my word of the year being <em>cohesion</em>, I know this space could feel more pulled together with a true color-drenched finish—and honestly, a really good clean. No matter how organized I think I am, the amount of lint that shows up in mysterious places is always shocking.</p>
      
      <h2>How to Use This Week's Checklist</h2>
      
      <p class="mb-6">Think of the checklist as your guide, not a rulebook. Today is about setting your intention. Walk through your laundry space and ask:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>What's working?</strong></span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>What's annoying?</strong></span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>What do I actually need here?</strong></span>
        </li>
      </ul>
      
      <p class="mb-6">Make note of supplies you may need—bins, baskets, labels, shelving, hooks, or paint. Or maybe this is a no-spend month and your goal is simply to declutter, wipe everything down, and reorganize what you already own. <strong>Both count. Progress is progress.</strong></p>
      
      <p class="mb-8">Once you've set your goal, the rest of the week becomes much easier. Tackle one small task at a time and knock out the first space of the challenge without overwhelm.</p>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-xl font-medium text-foreground mb-4">Most importantly—have fun with it.</p>
        <p class="text-muted-foreground">This isn't about perfection. It's about creating a home that supports your day-to-day life just a little better.</p>
      </div>
      
      <p class="mb-6">Please share your progress photos (before and afters are so satisfying!) and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> so I can cheer you on.</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's get started—Week One is officially underway.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-01-12",
    formattedDate: "January 12, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-1-checklist-laundry-room.png",
    weekNumber: 1,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-2-linen-closet",
    title: "Week 2: Linen Closet",
    excerpt:
      "This week we're tackling a space that's small but mighty: the linen closet. Storage is incredibly important—let's make yours work better.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Welcome to Week Two of Spring Clean with Kando Homes. I'm really glad you're here.</p>
      
      <p class="text-lg leading-relaxed mb-6">This week we're tackling a space that's small but mighty: <strong>the linen closet</strong>.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Real Estate Perspective</p>
        <p class="text-muted-foreground">Over the years in real estate, I've learned that storage is incredibly important to buyers. Believe it or not, spaces like a linen closet or a pantry can actually be dealbreakers. When a home doesn't have one, my job as an agent is often to get creative and help buyers see alternative storage solutions. And when a home <em>does</em> have a linen closet? It usually becomes a catch-all. Ask me how I know...</p>
      </div>
      
      <p class="mb-6">Mine used to hold good bath towels, old bath towels, way too many beach towels (and I don't even live at the beach anymore), kitchen towels, decorative towels... you get the gist. In addition to that, I had cleaning supplies and even my vacuum shoved in there. No system, no zones — just out of sight, out of mind.</p>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">I grew up in a household where you used things until they truly couldn't be used anymore, partly out of respect for the earth and not wanting things to end up in a landfill. That mindset stuck with me. But what I've learned is that when you keep items you actually like and use, you stop buying duplicates. You don't need backups for your backups when you already love what you own.</p>
      
      <h2>Keep What You Use, Donate What You Don't</h2>
      
      <p class="mb-6">So this week, I encourage you to keep what you use and donate what you don't:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Gently used towels and sheets</strong> can go to a donation center</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>More worn items</strong> are often welcomed by local animal shelters</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Cleaning supplies?</strong> They went back where they belong — neatly organized in the laundry room, in their own zone</span>
        </li>
      </ul>
      
      <p class="mb-6"><strong>Function feels really good.</strong></p>
      
      <h2>Already Feel Good About Your Linen Closet?</h2>
      
      <p class="mb-6">If your linen closet already feels fine, this is still a great opportunity to revisit it with fresh eyes. Set one clear goal on day one so the rest of the week feels manageable. Let the checklist guide you — it's not a rulebook. You don't have to do everything to make progress.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Decluttering</p>
        <p class="text-muted-foreground">If you want to go a step beyond decluttering and zoning, you can think about shelf liner, labels, baskets, or small upgrades. But please hear this: <strong>no-spend organizing is just as valuable</strong>. Clarity doesn't have to cost a thing.</p>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-xl font-medium text-foreground mb-4">Progress is progress.</p>
        <p class="text-muted-foreground">You don't have to do everything to make a difference.</p>
      </div>
      
      <p class="mb-6">If you feel like sharing along the way, tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I love seeing you do this in real life.</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make that linen closet work for you.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-01-19",
    formattedDate: "January 19, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-2-checklist-linen-closet.png",
    weekNumber: 2,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-3-kitchen",
    title: "Week 3: Kitchen",
    excerpt:
      "The kitchen can feel overwhelming—but it's also one of the most important spaces. This week, let's tackle it one step at a time.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Three: Kitchen Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The kitchen can feel like one of the most overwhelming spaces to clean and organize—but it's also one of the most important. If you cook or meal prep often, you know how quickly dishes, appliances, and clutter can pile up.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">In my own home, I noticed something interesting: when I had too many plates, cups, and to-go containers, my kitchen felt messier more often. Once I simplified and pared things down, it became easier to find what I needed and easier to put everything away. <strong>When items have a designated place, the kitchen is naturally easier to keep clean and organized.</strong></p>
      </div>
      
      <h2>Why the Kitchen Matters</h2>
      
      <p class="mb-6">From a real estate perspective, the kitchen is one of the first spaces buyers focus on when touring a home. They're paying attention to:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Storage</strong> — Is there enough room for everything?</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Counter space</strong> — Is there room to work?</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Layout</strong> — Does the flow make sense?</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Daily life</strong> — Can they picture themselves here?</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">A clean, organized kitchen makes a strong first impression and highlights the functionality of the space.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on tackling your kitchen <strong>one step at a time</strong>. Use the worksheet provided to break the process into manageable steps.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Cleaning</p>
        <p class="text-muted-foreground">If you want to go beyond cleaning and organizing, consider small upgrades that can make a big impact:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Painting cabinets or walls</li>
          <li>• Improving lighting</li>
          <li>• Updating cabinet doors or hardware</li>
        </ul>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Give thanks in all circumstances; for this is God's will for you in Christ Jesus."</p>
        <p class="text-muted-foreground">— 1 Thessalonians 5:18</p>
      </div>
      
      <p class="mb-6">However you choose to spend your time this week, approach it with a grateful heart. Being thankful for the space you have, working appliances, and the ability to care for your home can completely shift your mindset.</p>
      
      <p class="mb-6">Small steps in the kitchen can lead to a more functional home—and a space you actually enjoy.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your kitchens transform!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your kitchen a space you love.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-01-26",
    formattedDate: "January 26, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-3-checklist-kitchen.png",
    weekNumber: 3,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-4-pantry",
    title: "Week 4: Pantry",
    excerpt:
      "The pantry can feel overwhelming—but when it's organized with intention, meal prep and everyday kitchen use become so much smoother.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Four: Pantry Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The pantry can feel like one of the most overwhelming spaces to clean and organize—but it's also one of the most important. If you cook, meal prep, or pack lunches often, you know how quickly snacks, canned goods, and dry items can pile up.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">In my own home, I noticed something interesting: when my pantry was overflowing with duplicates, random snack packs, and expired items, it felt harder to cook efficiently and harder to keep the space tidy. Once I simplified, grouped items into categories, and gave everything a designated spot, it became easier to find what I needed—and easier to put things away. <strong>When a pantry is organized with intention, it makes meal prep and everyday kitchen use so much smoother.</strong></p>
      </div>
      
      <h2>Why the Pantry Matters</h2>
      
      <p class="mb-6">From a real estate perspective, a tidy pantry is a subtle but powerful detail that buyers notice. It shows that:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Storage is functional</strong> — Everything has a place</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Spaces are well cared for</strong> — Even the ones behind closed doors</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>The home feels organized and inviting</strong> — Especially for buyers imagining daily life</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">A clean, organized pantry can make a strong impression—especially for buyers who imagine daily life in the home.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on tackling your pantry <strong>one step at a time</strong>. Use the worksheet provided to break the process into manageable steps.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Decluttering</p>
        <p class="text-muted-foreground">If you want to go beyond decluttering and organizing, small touches can make a big difference in functionality and visual appeal:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Clear containers for dry goods</li>
          <li>• Labeled baskets for categories</li>
          <li>• Turntables for oils and sauces</li>
          <li>• Spice shelves for cans and spices</li>
        </ul>
      </div>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">Want This Done for You?</p>
        <p class="text-muted-foreground">"If you don't have the time—or just don't want to tackle organizing yourself—I work with Simply Dare, a luxury home organization company here in the Atlanta area. We help create spaces that are both beautiful and functional. We offer home organization, home sale prep, and moving concierge services to make life easier."</p>
        <p class="mt-3 text-muted-foreground font-medium">— Professional Organizer, Gabrielle Long</p>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Commit to the Lord whatever you do, and he will establish your plans."</p>
        <p class="text-muted-foreground">— Proverbs 16:3</p>
      </div>
      
      <p class="mb-6">However you approach your pantry this week, take a moment to appreciate the space you have and the ability to care for it. Even small steps in the pantry can transform it into a space that feels both functional and joyful to use.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your pantry transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your pantry a space that works for you.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-02-02",
    formattedDate: "February 2, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-4-checklist-pantry.png",
    weekNumber: 4,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-5-dining-room",
    title: "Week 5: Dining Room",
    excerpt:
      "The dining room can sometimes feel like one of the trickiest spaces to keep tidy—but it's also one of the most noticeable. Let's make it shine.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Five: Dining Room Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The dining room can sometimes feel like one of the trickiest spaces to keep tidy—but it's also one of the most noticeable. If you host meals, family dinners, or gatherings often, you know how quickly extra dishes, linens, and decor can accumulate.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">Clutter in this space can sneak in unnoticed. When my dining room cabinets and surfaces were filled with extra plates, mismatched linens, and decor I rarely used, the room felt less inviting and harder to maintain. Once I pared down, grouped items into categories, and assigned each piece a proper spot, it became easier to find what I needed—and simpler to put things away. <strong>A dining room organized with intention makes hosting, daily meals, and general upkeep so much smoother.</strong></p>
      </div>
      
      <h2>Why the Dining Room Matters</h2>
      
      <p class="mb-6">From a real estate perspective, a tidy dining room is a subtle but meaningful detail buyers notice. It signals that:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Storage works</strong> — Everything has its place</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Surfaces are cared for</strong> — The home is organized and welcoming</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Gatherings feel effortless</strong> — Buyers can envision everyday life and special moments here</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">A clean, well-styled dining area can leave a lasting impression—especially for buyers envisioning everyday life or special gatherings in the home.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on one area at a time: clear out unused dishes, sort linens, and simplify decor. Small touches—like neatly stacked plates, matching napkins, or designated serving pieces—can make the space feel intentional, functional, and visually appealing.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Cleaning</p>
        <p class="text-muted-foreground">If you want to elevate the space further, consider small design updates:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Statement light fixture</li>
          <li>• Layered rugs</li>
          <li>• Artwork or a mirror to elevate the space</li>
        </ul>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Whatever you do, work heartily, as for the Lord and not for men."</p>
        <p class="text-muted-foreground">— Colossians 3:23</p>
      </div>
      
      <p class="mb-6">As you work through your dining room this week, take a moment to appreciate the space you have and the comfort it brings when it's cared for. Even small efforts can turn your dining room into a welcoming space where every meal and gathering feels effortless and inviting.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your dining rooms transform!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your dining room a space where every gathering feels special.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-02-09",
    formattedDate: "February 9, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-5-checklist-dining-room.png",
    weekNumber: 5,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-6-bathroom",
    title: "Week 6: Bathroom",
    excerpt:
      "The bathroom can be one of the trickiest spaces to keep orderly—but it's also one of the most visible and most used. Let's tackle it this week.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Six: Bathroom Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The bathroom can be one of the trickiest spaces to keep orderly—but it's also one of the most visible and most used. If you have a daily routine, shower regularly, or do skincare and grooming, you know how quickly countertops, cabinets, and drawers can become crowded with products and clutter.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">I noticed in my own home that when my bathroom was packed with extra bottles, expired items, and towels I rarely used, it felt harder to get ready and maintain. Once I pared down, grouped things by category, and gave every item a proper spot, the space became easier to navigate—and simpler to keep clean. <strong>When everything has a home, the bathroom feels calmer, more functional, and more inviting.</strong></p>
      </div>
      
      <h2>Why the Bathroom Matters</h2>
      
      <p class="mb-6">From a real estate standpoint, a neat and organized bathroom is something buyers pay attention to. It shows that:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Storage works</strong> — Cabinets and drawers are functional</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Surfaces are cared for</strong> — The home feels polished</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Daily life is easy to picture</strong> — Even small touches like neatly folded towels and clear countertops make a strong impression</span>
        </li>
      </ul>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, tackle your bathroom in manageable steps. Start by clearing out all cabinets, drawers, and countertops, then sort items into zones:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Daily essentials</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Skincare/beauty</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Hair care</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>First aid/medications</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Cleaning products</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Extra towels/linens</span>
        </li>
      </ul>
      
      <p class="mb-6">Toss anything expired, broken, or unused, and organize what's left with labeled bins or baskets. Once the clutter is gone, clean sinks, tubs, showers, and toilets, wipe down shelves and cabinets, and sweep and mop the floors.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Cleaning</p>
        <p class="text-muted-foreground">For an extra boost, consider small updates that improve both function and style:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Open shelving for towels</li>
          <li>• New light fixtures — swap outdated for something brighter and modern</li>
          <li>• Decorative storage baskets to keep essentials neat and accessible</li>
        </ul>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Teach us to number our days, that we may gain a heart of wisdom."</p>
        <p class="text-muted-foreground">— Psalm 90:12</p>
      </div>
      
      <p class="mb-6">As you work through your bathroom this week, take a moment to be thankful for the space you have and the ability to care for it. Even small improvements can turn your bathroom into a space that's organized, refreshing, and a joy to use every day.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your bathroom transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your bathroom a calm, refreshing retreat.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-02-16",
    formattedDate: "February 16, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-6-checklist-bathroom.png",
    weekNumber: 6,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-7-primary-closet",
    title: "Week 7: Primary Closet",
    excerpt:
      "The primary closet is often one of the most personal spaces in a home, yet it can quickly become overwhelming. This week, let's simplify and create calm.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Seven: Primary Closet Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The primary closet is often one of the most personal spaces in a home, yet it can quickly become overwhelming. Between busy schedules, changing seasons, and everyday routines, clothing, shoes, and accessories tend to pile up faster than we realize. Before long, the space meant to make mornings easier can start to feel crowded and stressful instead.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">I experienced this myself when my closet became filled with pieces I rarely wore, duplicate items, and things I had simply outgrown. Getting dressed felt more complicated than it should have. Once I removed everything, sorted items intentionally, and kept only what I truly used and loved, the entire space felt lighter. <strong>Creating clear categories and giving each item a designated place made daily routines smoother and helped the closet stay organized long after cleaning day was over.</strong></p>
      </div>
      
      <h2>Why the Primary Closet Matters</h2>
      
      <p class="mb-6">From a home preparation perspective, buyers absolutely notice closet spaces. A well-organized primary closet shows that:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Storage is functional</strong> — The space can handle real-life needs</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>The home is thoughtfully maintained</strong> — Even behind closed doors</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Buyers can picture their belongings here</strong> — Neat shelves and open space help them imagine fitting in comfortably</span>
        </li>
      </ul>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on simplifying your closet step by step. Begin by removing clothing, shoes, and accessories from shelves and hanging areas. Sort everything into categories:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Everyday wear</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Workwear</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Seasonal items</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Special occasion pieces</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Shoes, handbags, and accessories</span>
        </li>
      </ul>
      
      <p class="mb-6">Set aside anything that no longer fits your lifestyle or hasn't been worn in the past year. Donate gently used items and discard anything damaged or worn out.</p>
      
      <p class="mb-6">After decluttering, take time to clean the space itself. Dust shelves and rods, wipe drawers, vacuum or sweep floors, and clean mirrors and baseboards. As you return items, group similar pieces together, keep frequently worn items at eye level, and use bins or baskets to contain smaller accessories. Matching hangers and simple storage solutions can instantly give the closet a calm, boutique-like feel.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Cleaning</p>
        <p class="text-muted-foreground">If you want to elevate the space even further, consider small design upgrades:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Matching velvet or wood hangers for a boutique-style feel</li>
          <li>• LED strip lights for a brighter, elevated look</li>
          <li>• A full-length mirror or small bench for function and style</li>
          <li>• Drawer dividers or jewelry trays for small items</li>
          <li>• Decorative baskets for accessories, belts, and scarves</li>
        </ul>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Let all things be done decently and in order."</p>
        <p class="text-muted-foreground">— 1 Corinthians 14:40</p>
      </div>
      
      <p class="mb-6">A simplified closet doesn't just create more space -- it creates clarity, reduces daily stress, and helps your home feel peaceful and well cared for from the inside out.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your closet transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's create a closet that brings clarity and calm to your mornings.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-02-23",
    formattedDate: "February 23, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-7-checklist-primary-closet.png",
    weekNumber: 7,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-8-bedroom",
    title: "Week 8: Bedroom",
    excerpt:
      "The bedroom should be one of the most restful spaces in your home, yet it's often where clutter quietly builds up. This week, let's create calm.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Eight: Bedroom Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The bedroom should be one of the most restful spaces in the home, yet it's often where clutter quietly builds up. Clothes pile onto chairs, nightstands collect miscellaneous items, and closets slowly become overcrowded with pieces we no longer wear. Because it's a private space, it's easy to put off organizing -- but creating order here can have one of the biggest impacts on your daily routine.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I focused on simplifying my own bedroom, I realized how much visual clutter affected how the space felt. Clearing surfaces, editing my wardrobe, and creating intentional storage made the room feel calmer almost instantly. <strong>Mornings became easier, evenings felt more relaxing, and maintaining the space required far less effort.</strong> A thoughtfully organized bedroom supports better habits and creates a sense of peace at both the start and end of the day.</p>
      </div>
      
      <h2>Why the Bedroom Matters</h2>
      
      <p class="mb-6">From a real estate standpoint, bedrooms play an important role in how buyers emotionally connect to a home. Buyers aren't just evaluating size -- they're imagining rest, comfort, and how their own routines would fit into the space.</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Clean surfaces</strong> — Help rooms appear larger and brighter</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Organized closets</strong> — Signal that storage is functional and sufficient</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Minimal distractions</strong> — Allow buyers to picture themselves living there</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">A well-presented bedroom allows buyers to picture themselves living there rather than focusing on storage limitations.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, concentrate on resetting your bedroom step by step. Start by removing items that don't belong, then work through clothing, drawers, and surfaces one category at a time. Sort items into zones:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Daily wear</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Seasonal storage</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Lounge/sleepwear</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Linens</span>
        </li>
      </ul>
      
      <p class="mb-6">Don't forget to dust all surfaces including dressers, nightstands, headboards, and decor. Wash bedding, pillowcases, blankets, and mattress covers. Vacuum carpets or rugs, mop hard floors, wipe mirrors, windows, and baseboards. Rotate your mattress and clean under the bed.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Going Beyond Cleaning</p>
        <p class="text-muted-foreground">Small updates can dramatically improve both function and appearance without requiring a full redesign:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Matching hangers for a polished closet look</li>
          <li>• Drawer dividers and storage bins under the bed</li>
          <li>• Cozy texture with layered bedding or throw pillows</li>
          <li>• Swap heavy winter decor for lighter, brighter accents</li>
        </ul>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"For God is not a God of disorder but of peace."</p>
        <p class="text-muted-foreground">— 1 Corinthians 14:33</p>
      </div>
      
      <p class="mb-6">As you work through your bedroom this week, focus on creating a space that supports rest and renewal. Small changes in the bedroom can lead to better routines, clearer mornings, and a home that feels more peaceful overall.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your bedroom transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your bedroom a space that supports rest and renewal.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-03-02",
    formattedDate: "March 2, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-8-checklist-bedroom.png",
    weekNumber: 8,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-9-entryway",
    title: "Week 9: Entryway",
    excerpt:
      "The entryway is the first space people experience when they step into a home, but it's also one of the easiest places for clutter to build up.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Nine: Entryway Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The entryway is the first space people experience when they step into a home, but it's also one of the easiest places for clutter to build up. Shoes gather near the door, jackets end up draped over chairs, and keys, bags, and mail quickly fill any available surface. Because it's such a high-traffic area, things tend to accumulate here throughout the week. Taking time to reset this space can instantly make your home feel more welcoming and organized.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I intentionally simplified my own entryway, I realized how much it affected everyday routines. Having a designated place for shoes, keys, and bags removed the small stresses that come with rushing out the door. Clearing surfaces and creating simple systems made the space feel lighter and more functional. <strong>Even a few small changes—like a basket for shoes or a tray for keys—can make coming home feel calmer and leaving the house more seamless.</strong></p>
      </div>
      
      <h2>Why the Entryway Matters</h2>
      
      <p class="mb-6">From a real estate perspective, the entryway plays a big role in the overall impression of a home. It's the first space buyers see, and it quietly sets the tone for everything that follows:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>First impressions matter</strong> — A tidy entry signals the home has been cared for</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Sets the tone</strong> — It quietly shapes expectations for the rest of the home</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Creates focus</strong> — Clear surfaces help buyers see the home itself, not distractions</span>
        </li>
      </ul>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on refreshing your entryway one step at a time. Start by removing items that don't belong in the space, then sort through shoes, coats, and everyday grab-and-go items. Create simple drop zones for the things you use daily:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Hooks for bags or jackets</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>A basket for shoes</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>A small tray for keys and mail</span>
        </li>
      </ul>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Design Ideas</p>
        <p class="text-muted-foreground">Small touches can instantly make the space feel more polished and functional:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Wall hooks or a small bench for functionality</li>
          <li>• A mirror to open up the space</li>
          <li>• Decorative storage baskets</li>
          <li>• A clean doormat</li>
        </ul>
      </div>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"For where your treasure is, there your heart will be also."</p>
        <p class="text-muted-foreground">— Matthew 6:21</p>
      </div>
      
      <p class="mb-6">Sometimes the way we care for our homes reflects what we value most. Small efforts to create order and intention can make our homes feel more peaceful and inviting from the moment we walk through the door.</p>
      
      <p class="mb-6">As you reset your entryway this week, aim to create a space that welcomes you home and supports the rhythm of everyday life.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your entryway transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your entryway a space that welcomes you home.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-03-09",
    formattedDate: "March 9, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-9-checklist-entryway.png",
    weekNumber: 9,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-10-living-room",
    title: "Week 10: Living Room",
    excerpt:
      "The living room is often the heart of the home—a place where people gather, relax, and spend time together. Let's refresh this central space.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Ten: Living Room Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The living room is often the heart of the home—a place where people gather, relax, and spend time together. Because it's such a central space, it can easily become a catch-all for everyday clutter. Blankets end up draped over furniture, remotes pile up on coffee tables, and décor slowly accumulates on shelves and surfaces. Over time, these small things can make the room feel crowded or chaotic without us even realizing it.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I took the time to simplify my own living room, I noticed how much the atmosphere of the space changed. Clearing surfaces, reducing unnecessary décor, and organizing everyday items made the room feel lighter and more inviting. <strong>Simple systems—like baskets for blankets, trays for remotes, and thoughtfully styled shelves—helped the room stay tidy while still feeling comfortable and lived in.</strong> A well-organized living room makes it easier to relax, host friends, and spend meaningful time with family.</p>
      </div>
      
      <h2>Why the Living Room Matters</h2>
      
      <p class="mb-6">From a real estate perspective, the living room plays an important role in how buyers experience a home. It's often one of the first main spaces they see, and it's where they begin imagining their own life unfolding there:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Movie nights</strong> — Cozy evenings with family</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Conversations with friends</strong> — A welcoming space to gather</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Quiet evenings at home</strong> — A peaceful retreat to unwind</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">When the space feels open, bright, and thoughtfully arranged, it allows buyers to focus on the feeling of the home rather than distractions from clutter.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on refreshing your living room step by step. Start by removing items that don't belong, then sort through books, décor, blankets, and everyday items one category at a time:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Clear off tables</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Simplify shelves</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Create designated spots for things you use daily</span>
        </li>
      </ul>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Design Ideas</p>
        <p class="text-muted-foreground">Small updates can dramatically improve both the function and appearance of the space:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Decorative baskets for blankets</li>
          <li>• Neatly styled trays for remotes</li>
          <li>• Refreshed throw pillows</li>
          <li>• Swap heavier winter blankets for lighter textures and neutral tones</li>
          <li>• Add greenery or a simple centerpiece to bring the room to life</li>
        </ul>
      </div>
      
      <p class="mb-6">As you reset your living room this week, think about creating a place that invites people to gather, connect, and feel at home.</p>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"For God so loved the world that He gave His one and only Son, that whoever believes in Him shall not perish but have eternal life."</p>
        <p class="text-muted-foreground">— John 3:16</p>
      </div>
      
      <p class="mb-6">Today's date, 3/16, is a simple reminder of this powerful verse. Just like a living room brings people together in our homes, this verse reminds us of the love that brings hope and life to the world. Creating spaces where people feel welcomed, loved, and comfortable reflects the kind of warmth a home is meant to hold.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your living room transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your living room the heart of your home.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-03-16",
    formattedDate: "March 16, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-10-checklist-living-room.png",
    weekNumber: 10,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-11-home-office",
    title: "Week 11: Home Office",
    excerpt:
      "The home office has become one of the most important and frequently used spaces in a home. Let's create a space that supports productivity and clarity.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Eleven: Home Office Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The home office has become one of the most important and frequently used spaces in a home. Whether you're working remotely, managing daily tasks, or simply using it as a place to stay organized, it can quickly become cluttered with paperwork, cords, and miscellaneous items. Desks fill up, drawers get overcrowded, and before long, the space meant for productivity can start to feel overwhelming.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I took the time to simplify my own workspace, I noticed a major shift in both focus and efficiency. Clearing off my desk, organizing supplies, and creating a simple system for paperwork made the space feel more functional almost immediately. <strong>With fewer distractions and everything in its place, it became easier to stay productive and actually enjoy spending time there.</strong> A well-organized office doesn't just look better—it supports better habits and a clearer mindset.</p>
      </div>
      
      <h2>Why the Home Office Matters</h2>
      
      <p class="mb-6">From a real estate perspective, a home office has become a highly desirable feature for buyers. Even if a home doesn't have a dedicated office, the way a workspace is presented can influence how buyers view its potential:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Remote work ready</strong> — Buyers envision working from home comfortably</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Study space</strong> — A dedicated area for learning and focus</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Daily management</strong> — A place to handle bills, schedules, and routines</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">When the space feels intentional and clutter-free, it adds to the overall appeal and functionality of the home.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on resetting your home office step by step. Start by removing items that don't belong, then sort through paperwork, office supplies, and electronics one category at a time:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Create a simple filing system</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Organize drawers</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Clear your desktop so only daily essentials remain</span>
        </li>
      </ul>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Design Ideas</p>
        <p class="text-muted-foreground">Small updates can make a big difference in how the space functions without requiring a full redesign:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Drawer dividers for supplies</li>
          <li>• Cord organizers to reduce visual clutter</li>
          <li>• Minimal décor that inspires focus</li>
          <li>• Good lighting for productivity</li>
          <li>• A plant or two for a fresh feel</li>
        </ul>
      </div>
      
      <p class="mb-6">As you refresh your home office this week, focus on creating a space that encourages clarity, productivity, and ease in your daily routine.</p>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."</p>
        <p class="text-muted-foreground">— Colossians 3:23</p>
      </div>
      
      <p class="mb-6">A space that is clean and organized can help support the work you're called to do, making it easier to stay focused, productive, and intentional each day.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your home office transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's create a workspace that supports your best work.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-03-23",
    formattedDate: "March 23, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-11-checklist-home-office.png",
    weekNumber: 11,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-12-extra-closet",
    title: "Week 12: Extra Closet",
    excerpt:
      "Extra closets—whether used for linens, cleaning supplies, or general storage—tend to become some of the most overlooked spaces in a home.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Twelve: Extra Closet Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">Extra closets—whether used for linens, cleaning supplies, or general storage—tend to become some of the most overlooked spaces in a home. Because they're out of sight, it's easy for them to turn into a catch-all for anything that doesn't have a designated place. Over time, shelves get overcrowded, items get pushed to the back, and it becomes harder to find what you actually need.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I took the time to go through my own storage closet, I realized how much unnecessary buildup had accumulated. Extra towels, duplicate products, and items I hadn't used in years were taking up valuable space. Once everything was pulled out, sorted, and simplified, the closet became much more functional. <strong>Having neatly folded linens, labeled bins, and clearly grouped items made everyday tasks easier and eliminated the frustration of searching for things.</strong></p>
      </div>
      
      <h2>Why Extra Closets Matter</h2>
      
      <p class="mb-6">From a real estate perspective, storage is something buyers always notice. Even though closets like these may not be front and center, they still play a role in how a home is perceived:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Well maintained</strong> — An organized closet shows the home has been cared for</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Usable space</strong> — Tidy shelves help buyers see true storage potential</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>No overwhelm</strong> — Neatly arranged items prevent the feeling of lacking space</span>
        </li>
      </ul>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on resetting your extra closet step by step. Start by removing everything and sorting items into categories:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Linens (towels, sheets, blankets)</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Cleaning supplies</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Household essentials</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Paper goods and toiletries</span>
        </li>
      </ul>
      
      <p class="mb-6">Let go of anything you no longer use, dispose of expired products, and simplify duplicates. As you put things back, use bins or baskets to group similar items and consider labeling for easy access.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Design Ideas</p>
        <p class="text-muted-foreground">Small changes can make a big impact on both function and appearance:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Matching baskets or clear bins for a cohesive look</li>
          <li>• Labels for easy access and maintenance</li>
          <li>• Neatly folded towels stacked by size or set</li>
          <li>• Keep frequently used items at eye level</li>
          <li>• Store extras higher or lower</li>
        </ul>
      </div>
      
      <p class="mb-6">As you refresh your extra closet this week, aim to create a space that is simple, functional, and easy to navigate in your day-to-day routine.</p>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty."</p>
        <p class="text-muted-foreground">— Proverbs 21:5</p>
      </div>
      
      <p class="mb-6">Taking the time to thoughtfully organize even the hidden spaces in your home can lead to a greater sense of order, efficiency, and peace throughout your daily life.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your extra closet transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make even the hidden spaces work for you.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-03-30",
    formattedDate: "March 30, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-12-checklist-extra-closet.png",
    weekNumber: 12,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-13-kids-pet-items",
    title: "Week 13: Kids & Pet Items",
    excerpt:
      "Kids' and pet spaces are some of the most lived-in areas of a home—which also means they can quickly become some of the most cluttered.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Thirteen: Kids & Pet Items</p>
      
      <p class="text-lg leading-relaxed mb-6">Kids' and pet spaces are some of the most lived-in areas of a home—which also means they can quickly become some of the most cluttered. Toys end up scattered, clothes get outgrown faster than expected, and pet supplies seem to multiply overnight. Because these items are used daily, it's easy for things to pile up without much thought, turning once-functional spaces into overwhelming ones.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I went through my dogs items, I noticed just how much had accumulated over time. Toys that were no longer played with and worn-out pet items were taking up space and making it harder to keep things organized. Once everything was taken out, sorted, and simplified, it made a huge difference. <strong>Having designated bins for toys, supplies, medicines, treats, and a clean space for pet essentials made daily routines feel smoother and far less chaotic.</strong></p>
      </div>
      
      <h2>Why Kids & Pet Spaces Matter</h2>
      
      <p class="mb-6">From a real estate perspective, families and pet owners pay close attention to how functional a home feels for their lifestyle. Organized playrooms, closets, and storage areas help showcase how a space can truly be used:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Functional feel</strong> — Buyers can picture their family living there</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Clean and simple</strong> — No distraction from clutter or overcrowding</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Manageable spaces</strong> — Shows the home can handle real-life needs</span>
        </li>
      </ul>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on resetting your kids' and pet spaces with intention. Start by removing everything and sorting items into categories:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Toys and stuffed animals</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Books and school supplies</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Clothes (check for outgrown items)</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Pet toys, bedding, leashes, and grooming tools</span>
        </li>
      </ul>
      
      <p class="mb-6">Let go of anything broken, outgrown, or no longer used, and set aside gently used items to donate. As you put everything back, group similar items together in bins or baskets, keep frequently used items within reach, and consider labeling to make cleanup easier. Simple systems can go a long way in maintaining order long-term.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Design Ideas</p>
        <p class="text-muted-foreground">Use matching baskets or clear containers for a clean, cohesive look:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Group similar items together in bins</li>
          <li>• Store items not kid-friendly on higher shelves</li>
          <li>• Keep frequently used items at eye level</li>
          <li>• Label bins for easy access and consistent maintenance</li>
        </ul>
      </div>
      
      <p class="mb-6">As you refresh these spaces, aim to create an environment that feels calm, functional, and easy to maintain—both for you and your family's everyday life.</p>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through Him."</p>
        <p class="text-muted-foreground">— Colossians 3:17</p>
      </div>
      
      <p class="mb-6">Bringing order to even the busiest areas of your home can create a sense of peace, making your space more enjoyable and your daily routines more manageable.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your kids and pet space transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's create spaces that work for the whole family.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-04-06",
    formattedDate: "April 6, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-13-checklist-kids-pet-items.png",
    weekNumber: 13,
    isSpringCleanSeries: true,
  },
  {
    slug: "spring-clean-week-14-garage",
    title: "Week 14: Garage",
    excerpt:
      "The garage is one of the most functional spaces in a home—but it's also one of the easiest places for clutter to build up.",
    content: `
      <p class="text-xl leading-relaxed mb-8 text-foreground">Week Fourteen: Garage Cleaning & Organization</p>
      
      <p class="text-lg leading-relaxed mb-6">The garage is one of the most functional spaces in a home—but it's also one of the easiest places for clutter to build up. Over time, it often becomes a catch-all for everything from tools and seasonal décor to sports equipment and storage bins. Because it's not part of the main living space, it's easy to shut the door and ignore the buildup, even when it starts to feel overwhelming.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-olive/5 to-earth-blue/5 rounded-xl border-l-4 border-olive">
        <p class="text-foreground font-medium mb-2">A Personal Discovery</p>
        <p class="text-muted-foreground">When I took the time to go through a garage recently, it was clear how quickly things can accumulate. Items that were no longer being used, duplicates, and broken tools were taking up valuable space. Once everything was removed, sorted, and simplified, the difference was immediate. <strong>With designated zones for tools, lawn equipment, and seasonal items, the garage became much more functional and easier to navigate.</strong></p>
      </div>
      
      <h2>Why the Garage Matters</h2>
      
      <p class="mb-6">From a real estate perspective, the garage plays a bigger role than many people realize. Buyers often look at garages not just for parking, but for storage and organization potential:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>More spacious feel</strong> — A clean garage makes the home feel larger</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Well maintained</strong> — Shows the home has been cared for throughout</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span><strong>Visualize potential</strong> — Buyers can see how they would use the space</span>
        </li>
      </ul>
      
      <p class="mb-8 p-4 bg-beige/30 rounded-lg italic">When the floor is clear and items are neatly stored, it allows buyers to better visualize how they would use the space, rather than focusing on clutter.</p>
      
      <h2>This Week's Focus</h2>
      
      <p class="mb-6">This week, focus on resetting your garage step by step. Start by removing everything and sorting items into categories:</p>
      
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Tools and hardware</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Seasonal décor</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Sports equipment</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Yard tools and lawn care</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></span>
          <span>Automotive supplies</span>
        </li>
      </ul>
      
      <p class="mb-6">Let go of anything broken or no longer needed, and be mindful of duplicates. As you put things back, create zones for each category, utilize shelving or wall storage, and keep frequently used items within easy reach.</p>
      
      <div class="my-10 p-6 bg-gradient-to-r from-beige/30 to-olive/5 rounded-xl">
        <p class="text-foreground font-medium mb-2">Design Ideas</p>
        <p class="text-muted-foreground">Simple systems can make a big difference in maintaining order:</p>
        <ul class="mt-4 space-y-2 text-muted-foreground">
          <li>• Install shelving or overhead storage to maximize space</li>
          <li>• Use wall hooks or pegboards for tools and equipment</li>
          <li>• Labeled bins for seasonal items and storage</li>
          <li>• Keep frequently used items easy to reach</li>
          <li>• Store rarely used items higher up</li>
        </ul>
      </div>
      
      <p class="mb-6">As you refresh your garage, aim to create a space that feels open, functional, and easy to maintain. Even though it's not a traditional living area, an organized garage can greatly improve your day-to-day routine and the overall feel of your home.</p>
      
      <div class="my-10 p-8 bg-gradient-to-br from-olive/10 via-beige/20 to-earth-blue/10 rounded-2xl text-center">
        <p class="text-lg font-medium text-foreground mb-4">"Let all things be done decently and in order."</p>
        <p class="text-muted-foreground">— 1 Corinthians 14:40</p>
      </div>
      
      <p class="mb-6">Taking the time to bring structure and order to spaces like the garage can create a sense of clarity and purpose, helping your home feel more organized and efficient as a whole.</p>
      
      <p class="mb-6">Share your progress and tag <a href="https://instagram.com/JennKandt_KandoHomes" target="_blank" rel="noopener noreferrer" class="text-olive font-semibold hover:underline">@JennKandt_KandoHomes</a> — I can't wait to see your garage transformations!</p>
      
      <div class="mt-10 pt-8 border-t border-border">
        <p class="text-xl font-medium text-foreground">Let's make your garage a space that works for you.</p>
        <p class="mt-4 text-olive font-semibold text-lg">— Jenn</p>
      </div>
    `,
    date: "2025-04-13",
    formattedDate: "April 13, 2025",
    author: "Jenn Kandt",
    category: "Spring Clean Series",
    image: "/images/spring-clean-week-1-featured.png",
    readTime: "4 min read",
    checklistImage: "/images/week-14-checklist-garage.png",
    weekNumber: 14,
    isSpringCleanSeries: true,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getSpringCleanPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.isSpringCleanSeries)
}
