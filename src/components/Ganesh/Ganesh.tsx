import styles from "./Ganesh.module.css";
import ganeshImage from "../../assets/ganesh.png";

function Ganesh() {
  return (
    <section id="ganesh" className={styles.ganesh}>
      <div className={styles.container}>

        <p className={styles.tag}>OUR GANESH</p>

        <h2 className={styles.heading}>
          Where devotion
          <br />
          meets celebration.
        </h2>

        <p className={styles.description}>
          Every year, our association welcomes Lord Ganesha with faith,
          creativity, and togetherness. Every decoration, every prayer,
          and every celebration reflects our love for tradition and our
          commitment to the community.
        </p>

        <div className={styles.imageWrapper}>
          <img
            src={ganeshImage}
            alt="Lord Ganesha"
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}

export default Ganesh;