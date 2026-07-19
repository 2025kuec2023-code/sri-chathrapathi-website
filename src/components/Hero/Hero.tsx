import styles from "./Hero.module.css";
import heroImage from "../../assets/hero.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>

        <div className={styles.left}>

          <span className={styles.badge}>
            Ganesh Chaturthi • 2026
          </span>

          <h1>
            Sri
            <br />
            Chathrapathi
            <br />
            Shivaji
            <br />
            Youth Association
          </h1>

          <p>
            Celebrating devotion, culture and togetherness
            with elegance, unity and tradition.
          </p>

          <div className={styles.buttons}>
            <a href="#gallery" className={styles.primary}>
              Explore Gallery
            </a>

            <a href="#about" className={styles.secondary}>
              Learn More
            </a>
          </div>

        </div>

        <div className={styles.right}>
          <div className={styles.glow}></div>

          <img src={heroImage} alt="Lord Ganesha" />
        </div>

      </div>

      <div className={styles.scroll}>
        <span>Scroll Down</span>
        ↓
      </div>
    </section>
  );
}

export default Hero;