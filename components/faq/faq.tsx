'use client'

import { useRef, useState } from 'react'
import styles from './faq.module.scss'

const faqs = [
  {
    q: 'Can we migrate our existing customer logs and catalog data cleanly into the custom CRM?',
    a: 'Yes. We engineer absolute custom ETL scripts to safely migrate all of your historic product structures, customer details, and past purchase metrics with zero data degradation and zero down-time.',
  },
  {
    q: 'What specific backend architectures do you use to guarantee the server will not crash?',
    a: 'We assemble stores using highly optimized, light Next.js frameworks coupled with serverless edge distribution layers. Your application automatically balances incoming traffic surges dynamically, allowing it to sustain tens of thousands of simultaneous checkouts without a single millisecond of latency.',
  },
  {
    q: 'Why is this framework better than hiring an ad agency and web freelancers separately?',
    a: 'Disconnected teams result in broken software. A media buyer cannot fix a database bottleneck that is crashing your ad conversions, and a casual freelancer doesn\u2019t know how tracking scripts affect site speed. We fuse architecture, speed metrics, tracking, and media acquisition into one single, cohesive unit.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <span className={`${styles.icon} ${open ? styles.open : ''}`} aria-hidden="true" />
      </button>
      <div
        className={styles.panel}
        ref={panelRef}
        style={{ maxHeight: open ? panelRef.current?.scrollHeight : 0 }}
      >
        <p className={styles.answer}>{a}</p>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Frequently Answered Technical Questions</h2>
      <div className={styles.list}>
        {faqs.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  )
}
