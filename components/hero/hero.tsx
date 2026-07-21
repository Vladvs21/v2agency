import Image from 'next/image'
import styles from './hero.module.scss'
import CTA from './cta'

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <section className={styles.hero}>
        <div className={styles.screen_wrapper_left_1}>
          <img src="screen-2.png" alt="CRM Panel" />
        </div>
        <div className={styles.screen_wrapper_left_2}>
          <img src="screen-1.png" alt="CRM Panel" />
        </div>

        <div className={styles.screen_wrapper_right_1}>
          <img src="screen-3.png" alt="CRM Panel" />
        </div>
        <div className={styles.screen_wrapper_right_2}>
          <img src="screen-4.png" alt="CRM Panel" />
        </div>

        <span className={styles.tag}>
          Exclusive Q3/Q4 Performance Partner Program for US E-Commerce Brands
        </span>

        <h1 className={styles.headline}>
          High-converting online store for your Black Friday &amp; Cyber Monday rush
        </h1>

        <p className={styles.subhead}>
          We design your elite
          infrastructure, launch your targeted traffic acquisition and handle
          100% of your development support through the peak shopping season
        </p>

        <CTA />

        <p className={styles.urgency}>
          ⚡ Strictly limited to 3 brands for the pre-BFCM cycle to guarantee
          dedicated engineering and ad spend focus
        </p>

        {/* <div className={styles.showcase}>
          <Image
            src="/showcase-dashboard.png"
            alt="High-speed checkout flow overlapping the custom CRM dashboard"
            width={1000}
            height={640}
            priority
          />
        </div> */}
      </section>

      {/* <div className={styles.screen_wrapper}>
      </div> */}
    </div>
  )
}
