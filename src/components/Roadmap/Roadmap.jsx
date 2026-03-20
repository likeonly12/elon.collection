import roadmap from '../../data/roadmap';
import styles from './Roadmap.module.css';

export default function Roadmap() {
  return (
    <section className={styles.roadmap}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Roadmap</h2>
        <p className={styles.subtitle}>Our journey to building the ultimate collectible card ecosystem</p>
      </div>
      <div className={styles.timeline}>
        {roadmap.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.item} ${item.active ? styles.active : ''}`}
          >
            <div className={styles.line}>
              <div className={styles.dot}>
                {item.active && <div className={styles.pulse} />}
              </div>
              {index < roadmap.length - 1 && <div className={styles.connector} />}
            </div>
            <div className={styles.content}>
              <div className={styles.phase}>Phase {item.id}</div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              {item.active && <span className={styles.badge}>Current</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
