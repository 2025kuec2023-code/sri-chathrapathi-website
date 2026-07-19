import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>

        <p className={styles.tag}>ABOUT US</p>

        <h2 className={styles.heading}>
          More than a celebration.
          <br />
          A tradition that unites generations.
        </h2>

        <div className={styles.content}>
          <p>
            Sri Chathrapathi Shivaji Youth Association was founded with a
            vision to bring people together through devotion, culture, and
            community service. Every Ganesh Chaturthi, we strive to create a
            meaningful celebration that reflects faith, unity, and togetherness.
          </p>

          <p>
            Beyond the festival, our association encourages youth participation,
            social responsibility, and cultural preservation. Every event we
            organize is dedicated to strengthening our community while creating
            memories that inspire future generations.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;