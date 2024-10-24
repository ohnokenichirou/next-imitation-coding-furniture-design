import React from "react";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);
  const limit = 8;

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(`/api/?limit=${limit}`);
      const data = await response.json();
      setItems(data.items);
    }

    fetchItems();
  }, []);

  return (
    <Layout>
      <div className={`${styles.top} ${styles.wrapper}`}>
        <ul className={styles["product-list"]}>
          {items.map((item) => (
            <Card item={item} />
          ))}
        </ul>
        <Link className={styles["link-text"]} href={"/products/"}>
          View More
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
