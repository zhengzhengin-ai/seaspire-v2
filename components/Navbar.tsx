"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/constants";

import styles from "@/styles/Navbar.module.css";


export default function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);


  return (

    <header className={styles.navbar}>


      <div className={styles.logo}>

        <Link
          href="/"
          aria-label="Seaspire Home"
          onClick={()=>setOpen(false)}
        >

          <Image

            src="/SEASPIRE-PHUKET-Logo-Color-300opx.webp"

            alt="Seaspire Logo"

            width={210}

            height={70}

            priority

          />

        </Link>

      </div>




      <nav className={styles.navLinks}>


        {navigation.map((item)=>(

          <Link

            key={item.href}

            href={item.href}

            className={
              pathname === item.href
              ? styles.active
              : ""
            }

          >

            {item.label}

          </Link>

        ))}


      </nav>





      <button

        className={styles.menuButton}

        onClick={()=>setOpen(!open)}

        aria-label="Toggle Menu"

      >

        <span></span>

        <span></span>

        <span></span>

      </button>





      <div

        className={
          open
          ? styles.mobileMenuOpen
          : styles.mobileMenu
        }

      >

        {navigation.map((item)=>(


          <Link

            key={item.href}

            href={item.href}

            onClick={()=>setOpen(false)}

            className={
              pathname === item.href
              ? styles.active
              : ""
            }

          >

            {item.label}

          </Link>


        ))}


      </div>



    </header>

  );

}