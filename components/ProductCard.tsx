import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  href?: string;
}

export default function ProductCard({
  name,
  image,
  description,
  href = "/products",
}: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>

        <p>{description}</p>

        <Link
          href={href}
          className={styles.link}
        >
          Learn More →
        </Link>
      </div>
    </article>
  );
}