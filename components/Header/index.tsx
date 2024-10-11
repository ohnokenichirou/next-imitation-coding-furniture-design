import React, { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";

export const Header = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className={`${styles.header} ${styles.wrapper}`}>
      <h1 className={styles["site-title"]}>
        <Link href="/">
          <Image src={Logo} alt="Furniture Design" priority />
        </Link>
      </h1>

      <nav id="navi" className={`${isShow ? styles.open : ""}`}>
        <ul className={styles["nav-menu"]}>
          <li>
            <Link href="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
          <li>
            <Link href="/company">COMPANY</Link>
          </li>
          <li>
            <Link href="mailto:xxxxx@xxx.xxx?subject=お問い合わせ">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`${styles.toggle_btn} ${isShow ? styles.open : ""}`}
        onClick={() => setIsShow(!isShow)}
      >
        <span></span>
        <span></span>
      </div>

      <div
        id="mask"
        className={`${isShow ? styles.open : ""}`}
        onClick={() => setIsShow(!isShow)}
      ></div>
    </header>
  );
};
