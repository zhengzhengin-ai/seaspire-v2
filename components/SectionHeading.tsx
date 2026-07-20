import styles from "../styles/SectionHeading.module.css";

type SectionHeadingProps = {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`${styles.heading} ${
        align === "left" ? styles.left : styles.center
      }`}
    >
      {tag && (
        <p className={styles.tag}>
          {tag}
        </p>
      )}

      <h2>
        {title}
      </h2>

      {subtitle && (
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </div>
  );
}