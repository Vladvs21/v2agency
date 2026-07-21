import { Hero } from '@/components/hero/hero'
import { MathSection } from '@/components/math/math-section'
import { Solution } from '@/components/solution/solution'
import { CaseStudies } from '@/components/case-studies/case-studies'
import { Timeline } from '@/components/timeline/timeline'
import { Founders } from '@/components/founders/founders'
import { Stack } from '@/components/stack/stack'
import { Investment } from '@/components/investment/investment'
import { Guarantee } from '@/components/guarantee/guarantee'
import { Faq } from '@/components/faq/faq'

export default function Page() {
  return (
    <main>
      <Hero />
      <MathSection />
      <Solution />
      <CaseStudies />
      <Timeline />
      <Founders />
      <Stack />
      <Investment />
      <Guarantee />
      <Faq />
    </main>
  )
}
