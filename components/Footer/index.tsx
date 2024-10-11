import React from "react";
import styles from "@/components/Footer/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.wrapper}`}>
      <ul className={styles.menu}>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            TWITTER
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            FACEBOOK
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>&copy; Furniture Design</p>
    </footer>
  );
};
