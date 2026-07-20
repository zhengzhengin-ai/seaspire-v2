import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/SEASPIRE-PHUKET-Logo-Color-300opx.webp"
          alt="Seaspire Logo"
          width={180}
          height={60}
          priority
        />
      </div>

      <nav className={styles.navLinks}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/applications">Applications</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}