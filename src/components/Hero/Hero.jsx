import heroVideo from '../../assets/video.webm';
import heroGif from '../../assets/video.gif';
import styles from './Hero.module.css';

export default function Hero() {
  const handleBuyNow = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Elon Musk Cards</h1>
        <p className={styles.description}>
          Open a digital pack to instantly reveal a real, graded collectible card.
          Collect, trade, and build your ultimate Elon Musk collection!
        </p>
        <button className={styles.cta} onClick={handleBuyNow}>
          Buy Now <span className={styles.arrow}>&#8594;</span>
        </button>
      </div>
      <div className={styles.visual}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/webm" />
          <img src={heroGif} alt="Collectible Cards Animation" />
        </video>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <div className={styles.fadeTop} />
        <div className={styles.fadeBottom} />
      </div>
    </section>
  );
}
