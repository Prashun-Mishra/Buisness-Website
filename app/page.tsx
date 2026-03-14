import Hero from '@/components/hero'
import SectionMarquee from '@/components/section-marquee'
import SectionCarousel from '@/components/section-carousel'
import SectionPricing from '@/components/section-pricing'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <SectionMarquee />
      <SectionCarousel />
      <SectionPricing />
    </main>
  )
}
