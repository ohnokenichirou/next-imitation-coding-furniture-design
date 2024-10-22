import React from "react";
import styles from "@/styles/Home.module.css";
import { Layout } from "@/components/Layout";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
            <li key={item.id}>
              <Link href={`/detail/${item.id}`}>
                <Image
                  src={item.url}
                  alt={item.title}
                  width={300}
                  height={300}
                />
                <p>{item.title}</p>
                <p>&yen;{item.price} +tax</p>
              </Link>
            </li>
          ))}
        </ul>
        <Link className={styles["link-text"]} href={"/products/1"}>
          View More
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
