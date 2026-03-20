import cards from '../../data/cards';
import CardItem from './CardItem';
import styles from './Catalog.module.css';

export default function Catalog() {
  return (
    <section className={styles.catalog} id="catalog">
      <div className={styles.header}>
        <h2 className={styles.title}>Incoming Cards</h2>
      </div>
      <div className={styles.grid}>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
