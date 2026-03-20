import { useState } from 'react';
import styles from './Catalog.module.css';

export default function CardItem({ card }) {
  const [qty, setQty] = useState(1);
  const maxQty = 10;

  const decrement = () => setQty((q) => Math.max(1, q - 1));
  const increment = () => setQty((q) => Math.min(maxQty, q + 1));
  const setMax = () => setQty(maxQty);

  const handleBuy = () => {
    alert(`Added ${qty}x "${card.name}" to cart! (demo)`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={card.image} alt={card.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{card.name}</span>
        <span className={styles.price}>&#8212;</span>
      </div>
      <div className={styles.quantityRow}>
        <button className={styles.qtyBtn} onClick={decrement}>&#8722;</button>
        <span className={styles.qtyValue}>{qty}</span>
        <button className={styles.qtyBtn} onClick={increment}>+</button>
        <button className={styles.maxBtn} onClick={setMax}>MAX</button>
      </div>
      <button className={styles.buyBtn} disabled>Coming soon</button>
    </div>
  );
}
