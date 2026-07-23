import styles from './math-section.module.scss'

const rows = [
  {
    layer: '1. Mobile Infrastructure Speed',
    standard: '25% ($25,000)',
    optimization: '+10% Drop-off Recovery',
    yield: '35% ($35,000)',
    lift: '+$10,000',
  },
  {
    layer: '2. Frictionless Express Checkout',
    standard: '22% ($22,000)',
    optimization: '+5% Friction Elimination',
    yield: '27% ($27,000)',
    lift: '+$5,000',
  },
  {
    layer: '3. Automated Abandonment Recovery',
    standard: '20% ($20,000)',
    optimization: '+12% Omnichannel Reach',
    yield: '32% ($32,000)',
    lift: '+$12,000',
  },
  {
    layer: '4. Integrated Native CRM Upsells',
    standard: '18% ($18,000)',
    optimization: '+4% Post-Purchase AOV',
    yield: '22% ($22,000)',
    lift: '+$4,000',
  },
  {
    layer: '5. Structural SEO Foundations',
    standard: '15% ($15,000)',
    optimization: '+2% High-Intent Traffic',
    yield: '17% ($17,000)',
    lift: '+$2,000',
  },
]

export function MathSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        The Cost of a Sluggish Store: How Minor Performance Flaws Bleed Cash on
        Peak Shopping Season
      </h2>
      <p className={styles.subhead}>
        If your traffic volume is dialed in to hit a baseline of $100,000 over
        the holidays, here is how each infrastructure layer acts as a
        direct percentage of your revenue and how elite engineering increases
        that yield
      </p>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th scope="col">Infrastructure Optimization Layer</th>
              <th scope="col">Revenue Share (Standard Template)</th>
              <th scope="col">Performance Optimization</th>
              <th scope="col">Revenue Yield (Our Custom Engine)</th>
              <th scope="col">Net Real-Dollar Lift</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.layer}>
                <td className={styles.layer}>{r.layer}</td>
                <td className={styles.num}>{r.standard}</td>
                <td className={styles.num}>{r.optimization}</td>
                <td className={styles.num}>{r.yield}</td>
                <td className={styles.lift}>{r.lift}</td>
              </tr>
            ))}
            <tr className={styles.totalRow}>
              <td>Total Baseline Performance Value</td>
              <td className={styles.num}>100% ($100,000)</td>
              <td className={styles.num}>+33% Efficiency Gain</td>
              <td className={styles.num}>133% ($133,000)</td>
              <td className={styles.lift}>+$33,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
