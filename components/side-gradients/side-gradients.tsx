import styles from './side-gradients.module.scss'

export function SideGradients() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={`${styles.glow} ${styles.left}`} />
      <div className={`${styles.glow} ${styles.right}`} />
    </div>
  )
}
