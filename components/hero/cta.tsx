import React from 'react'
import styles from './hero.module.scss'

const calLink = process.env.NEXT_PUBLIC_CAL_LINK

const CTA = () => {
  return (
    <a href={calLink} className={styles.cta}>
      Apply for a Pre-Black Friday Sprint Slot →
    </a>
  )
}

export default CTA