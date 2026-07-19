import styles from "./Gallery.module.css";

import img1 from "../../assets/Gallery/1.png";
import img2 from "../../assets/Gallery/2.png";
import img3 from "../../assets/Gallery/3.png";
import img4 from "../../assets/Gallery/4.png";
import img5 from "../../assets/Gallery/5.png";
import img6 from "../../assets/Gallery/6.png";
import img7 from "../../assets/Gallery/7.png";
import img8 from "../../assets/Gallery/8.png";



function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>

      <p className={styles.tag}>GALLERY</p>

      <h2 className={styles.heading}>
        Moments
        <br />
        We Celebrate
      </h2>

      <div className={styles.grid}>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>

    </section>
  );
}

export default Gallery;