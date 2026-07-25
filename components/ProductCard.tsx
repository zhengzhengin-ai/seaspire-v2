import Image from "next/image";
import Link from "next/link";

import styles from "../styles/ProductCard.module.css";


interface ProductCardProps {

  name: string;

  image: string;

  description?: string;

  href?: string;

  variant?: "landing" | "content";

}


export default function ProductCard({

  name,

  image,

  description,

  href = "/products",

  variant = "content",

}: ProductCardProps) {


  const isLanding = variant === "landing";


  return (

    <Link

      href={href}

      className={`${styles.card} ${
        isLanding
          ? styles.landing
          : styles.contentCard
      }`}

    >


      <div className={styles.imageWrapper}>


        <Image

          src={image}

          alt={`${name} Seafood Product`}

          width={600}

          height={450}

          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

          className={styles.image}

        />


        {isLanding && (

          <div

            className={styles.overlay}

            aria-hidden="true"

          >

            <h3>

              {name}

            </h3>

          </div>

        )}


      </div>



      {!isLanding && (

        <div className={styles.contentBody}>

          <h3>

            {name}

          </h3>


          {description && (

            <p>

              {description}

            </p>

          )}

        </div>

      )}


    </Link>

  );

}