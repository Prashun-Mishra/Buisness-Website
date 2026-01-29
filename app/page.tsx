import SectionUSA from '@/components/section-usa'
import SectionUAE from '@/components/section-uae'
import SectionFEMA from '@/components/section-fema'
import SectionMarquee from '@/components/section-marquee'
import SectionCarousel from '@/components/section-carousel'
import SectionLocations from '@/components/section-locations'
import SectionPricing from '@/components/section-pricing'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SectionUSA />
      <SectionUAE />
      <SectionFEMA />
      <SectionMarquee />
      <SectionLocations />
      <SectionCarousel />
      <SectionPricing />
    </main>
  )
}
