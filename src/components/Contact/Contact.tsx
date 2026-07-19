import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>

        <p className={styles.tag}>CONTACT</p>

        <h2>Let's Celebrate Together.</h2>

        <div className={styles.cards}>

          <div>
            <h3>📍 Address</h3>
            <p>Your Area, Hyderabad</p>
          </div>

          <div>
            <h3>📞 Phone</h3>
            <p>+91 62817 93306</p>
          </div>

          <div>
            <h3>📷 Instagram</h3>
            <p>@chatrapati_shivaji_youth_</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;