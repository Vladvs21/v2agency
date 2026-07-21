import styles from './stack.module.scss'

const pillars = [
  {
    title: 'The Black Friday UI Styling Pack',
    desc: 'High-conversion visual overlays (urgency countdown modules, cart boosts) swapped automatically',
    value: '$1,200',
  },
  {
    title: 'The Cyber Monday UI Styling Pack',
    desc: 'Dedicated aesthetic skins tailored to maximize electronic tech sales conversion surges',
    value: '$1,200',
  },
  {
    title: 'Full Architecture Coverage Until Jan 1st',
    desc: 'We pay 100% of your primary server, hosting, and database network bills',
    value: '$1,000',
  },
  {
    title: 'Technical SEO Engineering',
    desc: 'Hardcoded optimizations to dominate high-intent commercial holiday keyword ranks',
    value: '$1,500',
  },
  {
    title: 'Turnkey Active Ad Management',
    desc: 'End-to-end media buying strategy and active campaign optimization leading into BFCM',
    value: '$2,500',
  },
  {
    title: 'Senior Support Until Jan 1st',
    desc: 'Direct access line to elite software engineers to patch emergency catalog adjustments instantly',
    value: '$1,000',
  },
]

export function Stack() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        The Complete Performance Stack. Everything Included
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
