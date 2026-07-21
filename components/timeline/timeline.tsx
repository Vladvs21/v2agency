'use client'

import { useEffect, useState } from 'react'
import styles from './timeline.module.scss'

const steps = [
  {
    step: 'Step 1',
    weeks: 'Weeks 1–2',
    title: 'Architecture & SEO Setup',
    detail:
      'Core technical database configuration, user data schema construction, UX/UI wireframing, and commercial keyword mapping',
  },
  {
    step: 'Step 2',
    weeks: 'Weeks 3–7',
    title: 'Engineering & Ad Frameworks',
    detail:
      'Clean production coding, custom integrated CRM generation, 1-click checkout stress tests, and marketing ad creative deployment',
  },
  {
    step: 'Step 3',
    weeks: 'Weeks 8-9',
    title: 'Live Launch & Optimization',
    detail:
      'Server deployment, technical indexing across search engines, and active targeted ad campaign ignition 14 days before Black Friday',
  },
  {
    step: 'Step 4',
    weeks: 'BFCM Peak Weekend',
    title: 'Scale Monitoring',
    detail:
      'Live 24/7 senior engineering supervision, automated cache maintenance, and real-time ad budget optimizations during peak volume',
  },
]

export function Timeline() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const current = steps[active]

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>The &ldquo;Black Friday Sprint&rdquo; Timeline</h2>

      <div className={styles.axis}>
        {steps.map((s, i) => (
          <button
            key={s.step}
            type="button"
            className={`${styles.node} ${i === active ? styles.active : ''}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <div className={styles.progress}>
              <div
                className={`${styles.fill} ${
                  i < active ? styles.done : ''
                } ${i === active ? styles.filling : ''}`}
                key={`${i}-${active}`}
              />
            </div>
            <span className={styles.step}>{s.step}</span>
            <p className={styles.nodeTitle}>{s.title}</p>
          </button>
        ))}
      </div>

      <div className={styles.detailCard}>
        <p className={styles.detailWeeks}>{current.weeks}</p>
        <h3 className={styles.detailTitle}>{current.title}</h3>
        <p className={styles.detailText}>{current.detail}</p>
      </div>
    </section>
  )
}
