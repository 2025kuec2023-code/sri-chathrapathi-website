import styles from "./Highlights.module.css";

const events = [
  "Murti Arrival",
  "Decoration",
  "Ganesh Sthapana",
  "Cultural Events",
  "Maha Aarti",
  "Nimajjanam",
];

function Highlights() {
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <p className={styles.tag}>FESTIVAL</p>

        <h2 className={styles.heading}>
          Festival
          <br />
          Highlights
        </h2>

        <div className={styles.grid}>
          {events.map((event) => (
            <div key={event} className={styles.card}>
              {event}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;