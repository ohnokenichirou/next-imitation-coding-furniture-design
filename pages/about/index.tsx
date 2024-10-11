import React from "react";
import styles from "@/styles/about.module.css";
import { Layout } from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className={`${styles.content} ${styles.wrapper}`}>
        <h1 className={styles["page-title"]}>About</h1>
        <div className={styles.about}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
