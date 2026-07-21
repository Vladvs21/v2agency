import CTA from '../hero/cta'
import styles from './investment.module.scss'

const milestones = [
  {
    desc: 'Milestone 1: Architecture, Custom CRM Planning & SEO Setup',
    amount: '$2,900.00',
  },
  {
    desc: 'Milestone 2: Production Development, Checkout Engines & Ads Setup',
    amount: '$2,900.00',
  },
  {
    desc: 'Milestone 3: Successful Production Launch (14 Days Before BF)',
    amount: '$2,900.00',
  },
  {
    desc: 'Milestone 4: Post-Holiday Stabilization (Settled After BFCM)',
    amount: '$2,900.00',
  },
]

export function Investment() {
  return (
    <section className={styles.section} id="apply">
      <h2 className={styles.header}>Total Turnkey Growth Investment</h2>
      <p className={styles.subhead}>
        A transparent billing structure built to protect your marketing capital
        leading up to the holiday rush
      </p>

      <div className={styles.invoice}>
        <div className={styles.invoiceHead}>
          <span>Invoice Description</span>
          <span>Amount (USD)</span>
        </div>

        {milestones.map((m) => (
          <div key={m.desc} className={styles.line}>
            <span className={styles.lineDesc}>{m.desc}</span>
            <span className={styles.lineAmount}>{m.amount}</span>
          </div>
        ))}

        <div className={styles.total}>
          <span className={styles.totalLabel}>Total Project Investment</span>
          <span className={styles.totalAmount}>$11,600.00</span>
        </div>
      </div>

      <CTA />
    </section>
  )
}
