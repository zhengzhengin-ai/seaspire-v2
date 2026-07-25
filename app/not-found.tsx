import Link from "next/link";
import styles from "@/styles/NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <div className={styles.container}>

        <h1 className={styles.code}>
          404
        </h1>

        <h2 className={styles.title}>
          Page Not Found
        </h2>

        <p className={styles.description}>
          The page you are looking for may have been removed,
          renamed or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className={styles.button}
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}