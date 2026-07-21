import styles from './guarantee.module.scss'

export function Guarantee() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.shieldWrap}>
          <svg
            className={styles.shield}
            viewBox="0 0 120 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M60 4 L112 24 V70 C112 104 90 124 60 136 C30 124 8 104 8 70 V24 Z" />
            <path d="M60 20 L96 34 V70 C96 94 80 110 60 120 C40 110 24 94 24 70 V34 Z" opacity="0.5" />
            <path d="M42 70 L55 84 L82 52" strokeWidth="2" />
          </svg>
        </div>

        <div className={styles.box}>
          <h2 className={styles.header}>
            Shifting 100% of the Risk onto Our Shoulders
          </h2>
          <p className={styles.commit}>
            We are completely confident in our engineering capabilities and
            execution speed. If your custom online store, integrated CRM system,
            and custom ad frameworks are not live and fully stress-tested
            exactly 14 days before Black Friday, we instantly halt all remaining
            payments and run your Q4 digital marketing operations completely
            free of charge
          </p>
        </div>
      </div>
    </section>
  )
}
