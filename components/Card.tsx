import { ReactNode } from "react";
import styles from "../styles/Card.module.css";

type CardProps = {
  children: ReactNode;
  hover?: boolean;
  center?: boolean;
  className?: string;
};

export default function Card({
  children,
  hover = true,
  center = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={[
        styles.card,
        hover ? styles.hover : "",
        center ? styles.center : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}