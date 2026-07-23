import styles from './stack.module.scss'

const pillars = [
  // --- UI & SEASONAL THEMING PACKS ---
  {
    title: 'The Black Friday UI Styling Pack',
    desc: 'High-conversion visual overlays (urgency countdown modules, flash-sale bars) swapped automatically',
    value: '$1,200',
  },
  {
    title: 'The Cyber Monday UI Styling Pack',
    desc: 'Tech and digital-focused aesthetic skins tailored to maximize post-Thanksgiving sales surges',
    value: '$1,200',
  },
  {
    title: 'The Christmas & Holiday Sprint UI Pack',
    desc: 'Seamless post-BFCM theme transition featuring dynamic gift finder modules and shipping countdowns',
    value: '$1,200',
  },

  // --- TRAFFIC, CONVERSION & RETENTION ---
  {
    title: 'Technical Q4 SEO Engineering',
    desc: 'Hardcoded optimizations to capture high-intent holiday buyer queries throughout November and December',
    value: '$1,500',
  },
  {
    title: 'Turnkey Q4 Active Ad Management',
    desc: 'Full-funnel campaign optimization and creative rotation leading through Black Friday into Christmas',
    value: '$2,500',
  },
  {
    title: 'Full Q4 Email & SMS Revenue Funnels',
    desc: 'Automated retention sequences: VIP early access, cart recovery, holiday gift guides, and shipping cut-off blasts',
    value: '$1,800',
  },

  // --- INFRASTRUCTURE, SPEED & EMERGENCY SUPPORT ---
  {
    title: 'Full Architecture Coverage for Q4',
    desc: 'We cover 100% of your primary server, hosting, and database network costs for the entire fourth quarter',
    value: '$1,000',
  },
  {
    title: '10x Traffic Hardening & Infrastructure Stress-Test',
    desc: 'Edge-caching and database tuning to guarantee zero crashes during extreme traffic spikes',
    value: '$1,500',
  },
  {
    title: 'Senior Engineering On-Call Support for Q4',
    desc: 'Direct Slack/WhatsApp line to senior developers for instant hotfixes and promo updates through the end of Q4',
    value: '$1,200',
  },
]

export function Stack() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        The Complete Performance Stack. Bonuses Included for <span>over $13.000</span>
      </h2>

      <div className={styles.grid}>
        {pillars.map((p, i) => (
          <article key={p.title} className={styles.card}>
            <span className={styles.pillarTag}>Bonus {i + 1}</span>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.desc}>{p.desc}</p>
            <div className={styles.valueRow}>
              <span className={styles.valueLabel}>Value</span>
              <span className={styles.value}>{p.value}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
