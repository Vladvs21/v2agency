'use client'

import React, { useEffect, useState } from 'react'
import styles from './thank-you.module.scss'
import Logo from '../hero/logo'
import { useSearchParams } from 'next/navigation'

const ThankYou = () => {
  const searchParams = useSearchParams();
  const [firstName, setFirstName] = useState<string>('');

  useEffect(() => {
    const rawName = searchParams.get('name');

    if (rawName) {
      const name = decodeURIComponent(rawName).trim().split(' ')[0];
      setFirstName(name);

      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, '', cleanUrl);
    }
  }, [searchParams]);

  return (
    <div className={styles.thank_container}>
      <section className={styles.thank}>
        <Logo />
        <div className={styles.hook}></div>

        <h1 className={styles.title}>🎉 You’re all set{firstName ? `, ${firstName}`: ''}<br /><span>Your BFCM Intro Session is confirmed!</span></h1>

        <div className={styles.divider} />

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.step_title}>Check Your Email 📩</div>

            <div className={styles.step_text}>You’ve been sent a calendar invite with the direct video call link. If you don't see it in 2 minutes, check your spam/promotions folder or search for V2AGENCY</div>
          </div>

          <div className={styles.step}>
            <div className={styles.step_title}>Add Your Team (Optional) 👥</div>

            <div className={styles.step_text}>If your Lead Marketer, Head of E-commerce, or CTO needs to be on the call to discuss technical implementations or strategy, forward them the calendar invite or send us their email so we can add them</div>
          </div>

          <div className={styles.step}>
            <div className={styles.step_title}>Bookmark Your Primary Metrics 📊</div>

            <div className={styles.step_text}>To make the most of our session, have a quick glance at your current numbers (AOV, conversion rate, and top traffic sources). We’ll dive straight into actionable CRO and infrastructure optimizations for BFCM</div>
          </div>
        </div>

        <span className={styles.annotation}>Need to reschedule? Use the link at the bottom of your email invite</span>
      </section>
    </div>
  )
}

export default ThankYou