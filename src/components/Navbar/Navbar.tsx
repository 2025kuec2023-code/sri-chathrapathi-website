import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        <a href="#">
          <img src={logo} alt="Logo" className={styles.logo} />
        </a>

        <nav
          className={`${styles.navLinks} ${
            menuOpen ? styles.show : ""
          }`}
        >
          <a href="#about">About</a>
          <a href="#ganesh">Ganesh</a>
          <a href="#members">Members</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className={styles.menu}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;