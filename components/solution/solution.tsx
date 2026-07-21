import styles from './solution.module.scss'

const columnOne = {
  heading: 'Premium Customer Experience',
  cards: [
    {
      title: '1-Click Express Flows',
      desc: 'Native implementation of instant payment gateways configured to bypass cart steps entirely',
      metric: '+17% Conversion Lift',
    },
    {
      title: 'Instant User Profiles',
      desc: 'Fast, passwordless consumer account generation that securely locks shipping data for immediate recurring purchases',
      metric: '+8% AOV Boost',
    },
    {
      title: 'Fluid Edge Transitions',
      desc: 'Ultra-responsive interface micro-interactions that completely eliminate visual latency during catalog browsing',
      metric: '+12% Mobile Retention',
    },
  ],
}

const columnTwo = {
  heading: 'Total Business Control',
  cards: [
    {
      title: 'Fully Custom CRM System',
      desc: 'A deeply integrated, proprietary CRM built straight into your core database stack. Control customer lifecycles with zero monthly SaaS bills',
      metric: '$0 Hidden Software Fees',
    },
    {
      title: 'Omnichannel Retargeting Hub',
      desc: 'Deep data hooks triggering instant abandoned cart sequences directly across Email, SMS, and Messengers',
      metric: '+22% Recovered Carts',
    },
    {
      title: 'Serverless Database Architecture',
      desc: 'High-grade server architecture built to process thousands of concurrent database requests simultaneously',
      metric: '100% Peak Load Uptime',
    },
  ],
}

function Column({ data }: { data: typeof columnOne }) {
  return (
    <div>
      <h3 className={styles.colHeading}>{data.heading}</h3>
      <div className={styles.stack}>
        {data.cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardDesc}>{card.desc}</p>
            <span className={styles.metric}>{card.metric}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export function Solution() {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>
        We are targeting
      </h2>

      <div className={styles.grid}>
        <Column data={columnOne} />
        <Column data={columnTwo} />
      </div>
    </section>
  )
}
