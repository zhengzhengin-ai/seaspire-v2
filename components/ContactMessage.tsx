"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import styles from "@/styles/ContactPage.module.css";

type MessageType = "success" | "error" | null;

export default function ContactMessage() {
  const searchParams = useSearchParams();

  const [messageType, setMessageType] =
    useState<MessageType>(() => {
      if (searchParams.get("success") === "1") {
        return "success";
      }

      if (searchParams.get("error") === "1") {
        return "error";
      }

      return null;
    });

  useEffect(() => {
    if (!messageType) {
      return;
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}#contact-form`
    );
  }, [messageType]);

  if (!messageType) {
    return null;
  }

  return (
    <>
      {messageType === "success" && (
        <div className={styles.successMessage}>
          <strong>
            ✓ Inquiry Sent Successfully
          </strong>

          <p>
            Thank you for your inquiry.
            Our team will contact you shortly.
          </p>
        </div>
      )}

      {messageType === "error" && (
        <div className={styles.errorMessage}>
          Unable to send inquiry.
          Please try again.
        </div>
      )}
    </>
  );
}