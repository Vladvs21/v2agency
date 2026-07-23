import Image from 'next/image'
import styles from './hero.module.scss'
import CTA from './cta'
import Logo from './logo'

export function Hero() {
  return (
    <div className={styles.hero_container}>
      <section className={styles.hero}>
        <div className={styles.screen_wrapper_left_1}>
          <img src="screen-2.webp" alt="CRM Panel" />
        </div>
        <div className={styles.screen_wrapper_left_2}>
          <img src="screen-1.webp" alt="CRM Panel" />
        </div>

        <div className={styles.screen_wrapper_right_1}>
          <img src="screen-3.webp" alt="CRM Panel" />
        </div>
        <div className={styles.screen_wrapper_right_2}>
          <img src="screen-4.webp" alt="CRM Panel" />
        </div>
        
        <Logo />

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
      </section>
    </div>
  )
}
