import Link from "next/link";
import styles from "../styles/Hero.module.css";


export default function Hero() {

  return (

    <section className={styles.hero}>


      <div className={styles.content}>


        <p className={styles.subtitle}>
          The Best Quality from SEA
        </p>



        <h1 className={styles.title}>

          SEASPIRE
          <br />
          TRUSTWORTHY
          <br />
          PRODUCTS

        </h1>



        <p className={styles.description}>
          Reliable • Safe • Professional
        </p>



        <Link
          href="#products"
          className={styles.button}
        >
          Explore Products
        </Link>


      </div>




      <div className={styles.scroll}>
        ↓ Scroll
      </div>



    </section>

  );

}