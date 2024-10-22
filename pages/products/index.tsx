import React from "react";
import styles from "@/styles/detail.module.css";
import { Layout } from "@/components/Layout";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Paginator } from "@/components/Paginator";

const Products = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(`/api/?page=${page}&limit=${limit}`);
      const data = await response.json();
      setItems(data.items);
      setTotalPages(data.totalPages);
    }

    fetchItems();
  }, [page]);

  return (
    <Layout>
      <div className={`${styles.content} ${styles.wrapper}`}>
        <h1 className={styles["page-title"]}>Products</h1>
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
        <Paginator totalPages={totalPages} setPage={setPage} />
      </div>
    </Layout>
  );
};
export default Products;
