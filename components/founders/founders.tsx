import Image from 'next/image'
import styles from './founders.module.scss'

export function Founders() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.portrait}>
          <Image
            src="/team-portrait-new.webp"
            alt="Senior software engineering team studio portrait"
            width={600}
            height={720}
          />
        </div>
        <div>
          <h2 className={styles.header}>
            No corporate layers. No junior account managers. Just elite
            technical execution
          </h2>
          <p className={styles.body}>
            We are a direct team of senior software engineers and growth
            infrastructure specialists. We move incredibly fast. We do not bury
            our progress under endless corporate alignment check-ins or pass
            your critical business systems down to junior interns. You talk
            directly to the engineers building your code, managing your database
            architecture, and deploying your advertising capital
          </p>
        </div>
      </div>
    </section>
  )
}
