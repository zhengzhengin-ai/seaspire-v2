"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();  
  return (
    <header className={styles.navbar} role="banner">
      <div className={styles.logo}>
        <Link href="/" aria-label="Seaspire Home">
          <Image
            src="/SEASPIRE-PHUKET-Logo-Color-300opx.webp"
            alt="Seaspire Logo"
            width={210}
            height={70}
            priority
          />
        </Link>
      </div>

      <nav
        className={styles.navLinks}
        aria-label="Main Navigation"
      >
        <Link
          href="/"
          className={pathname === "/" ? styles.active : ""}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={pathname === "/about" ? styles.active : ""}
        >
          About
        </Link>
        <Link
          href="/products"
          className={pathname === "/products" ? styles.active : ""}
        >
          Products
        </Link>
        <Link
          href="/solutions"
          className={pathname === "/solutions" ? styles.active : ""}
        >
          Solutions
        </Link>
        <Link
          href="/contact"
          className={pathname === "/contact" ? styles.active : ""}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}