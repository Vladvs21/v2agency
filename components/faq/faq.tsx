'use client'

import { useRef, useState } from 'react'
import styles from './faq.module.scss'

const faqs = [
  // --- EXISTING FAQs ---
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
    a: 'Disconnected teams result in broken software. A media buyer cannot fix a database bottleneck that is crashing your ad conversions, and a casual freelancer doesn’t know how tracking scripts affect site speed. We fuse architecture, speed metrics, tracking, and media acquisition into one single, cohesive unit.',
  },
  // --- NEW HIGH-CONVERSION FAQs ---
  {
    q: 'How fast will this infrastructure be fully deployed before Black Friday?',
    a: 'We launch complete architecture setups within 14–21 business days. All load testing, UI styling packs (BF, CM, and Christmas), and ad funnel tracking are fully staged and stress-tested long before peak traffic hits.',
  },
  {
    q: 'Who pays for the direct ad spend, and do we retain account ownership?',
    a: 'You retain 100% ownership of your ad accounts, pixel data, and customer lists. Ad budgets are billed directly through your existing ad accounts - we purely manage media strategy, creative execution, and technical campaign optimization.',
  },
  {
    q: 'What happens if something breaks at 2:00 AM on Black Friday?',
    a: 'You have a direct, priority engineering line (Slack/WhatsApp) active throughout Q4. Our senior engineers monitor server telemetry, checkout APIs, and uptime 24/7 during peak Cyber Week to instantly patch any third-party gateway or platform issues.',
  },
  {
    q: 'How do the automated UI styling packs transition between Black Friday and Christmas?',
    a: 'We pre-program and test all seasonal UI packs (Black Friday, Cyber Monday, and Christmas/Holiday) beforehand. Visual overlays, flash-sale banners, and gift guides swap seamlessly on scheduled dates without requiring manual deployments or code pushes during high-volume sales windows.',
  },
  {
    q: 'Do we own the codebase and assets after Q4 ends?',
    a: 'Yes. At the end of Q4, 100% of the custom codebase, repository access, design assets, and database pipelines are transferred entirely to your team with zero lock-in or hidden licensing fees.',
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
