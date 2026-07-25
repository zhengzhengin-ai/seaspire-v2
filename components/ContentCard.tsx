import Image from "next/image";
import styles from "@/styles/ContentCard.module.css";

type ContentCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function ContentCard({
  title,
  description,
  image,
}: ContentCardProps) {
  return (
    <article className={styles.card}>

      <div className={styles.imageWrapper}>

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1100px) 33vw, 20vw"
          className={styles.image}
        />

      </div>

      <div className={styles.content}>

        <h3>{title}</h3>

        <p>{description}</p>

      </div>

    </article>
  );
}