'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './case-studies.module.scss'
import CTA from '../hero/cta'

const gallery = [
  { src: '/case-gallery-1.webp', alt: 'Headless Next.js catalog page holding 0.9s load time under peak traffic' },
  { src: '/case-gallery-2.webp', alt: 'Custom internal CRM dashboard tracking client lifecycles' },
  { src: '/case-gallery-3.webp', alt: 'Mobile express checkout flow with high-conversion pay button' },
  { src: '/case-gallery-4.webp', alt: 'Serverless infrastructure monitoring at 100% uptime' },
]

const clients = [
  { name: 'Aura Luxury', metric: '+$42K', unit: 'BFCM Net Rev' },
  { name: 'Apex Labs', metric: '+34%', unit: 'Cart Recovery' },
  { name: 'Vanguard Goods', metric: '0.9s', unit: 'Mobile Load' },
  { name: 'Northwind Co.', metric: '+2.4%', unit: 'Mobile Conv.' },
  { name: 'Meridian Home', metric: '+32%', unit: 'AOV Growth' },
  { name: 'Solstice Beauty', metric: '100%', unit: 'Peak Uptime' },
  { name: 'Ironclad Gear', metric: '+$1.1M', unit: 'Annual GMV' },
  { name: 'Cascade Foods', metric: '-58%', unit: 'DB Lockups' },
]

export function CaseStudies() {
  const [active, setActive] = useState(0)

  const roll = (dir: number) => {
    setActive((prev) => (prev + dir + gallery.length) % gallery.length)
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        Technical Supremacy. Validated by Active Revenue
      </h2>

      <article className={styles.card}>
        <div className={styles.galleryCol}>
          <div className={styles.mainImage}>
            <Image
              src={gallery[active].src}
              alt={gallery[active].alt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className={styles.img}
            />
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={() => roll(-1)}
              aria-label="Previous image"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={() => roll(1)}
              aria-label="Next image"
            >
              <ArrowIcon dir="right" />
            </button>
          </div>

          <div className={styles.thumbs}>
            {gallery
              .map((g, i) => ({ ...g, i }))
              .filter((g) => g.i !== active)
              .map((g) => (
                <button
                  key={g.src}
                  type="button"
                  className={styles.thumb}
                  onClick={() => setActive(g.i)}
                  aria-label={`Show image ${g.i + 1}`}
                >
                  <Image
                    src={g.src}
                    alt=""
                    fill
                    sizes="120px"
                    className={styles.img}
                  />
                </button>
              ))}
          </div>
        </div>

        <div className={styles.textCol}>
          <h3 className={styles.caseTitle}>
            Headless Re-Architecture for Enterprise Q4 Traffic Spikes
          </h3>

          <div className={styles.block}>
            <p className={styles.label}>The Problem</p>
            <p className={styles.text}>
              A leading multi-million dollar brand was experiencing sudden
              database lockups, slow page rendering, and escalating cart
              abandonment rates during high-volume ad drops
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.label}>The Engineering Solution</p>
            <p className={styles.text}>
              Migrated the entire catalog layer into an optimized Next.js
              serverless engine. Implemented a fully customized internal CRM
              system that tracks client lifecycles natively, completely
              eliminating sluggish third-party SaaS apps
            </p>
          </div>

          <div className={styles.block}>
            <p className={styles.label}>The Result</p>
            <p className={styles.text}>
              Deployed with <span className={styles.num}>100%</span> uptime
              through peak holiday spikes, cutting page load times to a clean{' '}
              <span className={styles.num}>0.9 seconds</span>. Mobile
              conversions scaled by <span className={styles.num}>2.4%</span>,
              while automated post-purchase funnels grew AOV by{' '}
              <span className={styles.num}>32%</span>
            </p>
          </div>
        </div>
      </article>

      <div className={styles.marquee} aria-label="Client results">
        <div className={styles.track}>
          {[...clients, ...clients].map((c, i) => (
            <div key={`${c.name}-${i}`} className={styles.logo} aria-hidden={i >= clients.length}>
              <span className={styles.logoName}>{c.name}</span>
              <span className={styles.logoMetric}>
                {c.metric} <span className={styles.logoUnit}>{c.unit}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  )
}

function ArrowIcon({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === 'left' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
