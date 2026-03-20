import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>&#9830;</span>
          <span className={styles.logoText}>elon.collection</span>
        </div>
        <p className={styles.description}>
          Discover the world's first Elon cards where e-cards can be bought, sold, traded, vaulted, and earn income, instantaneously, all in one seamless platform.
        </p>
        <div className={styles.divider} />
        <p className={styles.copy}>&copy; 2026 elon.collection. All rights reserved.</p>
      </div>
    </footer>
  );
}
