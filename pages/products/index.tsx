import React from "react";
import styles from "@/styles/products.module.css";
import { Layout } from "@/components/Layout";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";
import { Paginator } from "@/components/Paginator";
import { Card } from "@/components/Card";

const Products = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    async function fetchItems() {
      // const response = await fetch(`/api/?page=${page}&limit=${limit}`);
      // const data = await response.json();
      // setItems(data.items);
      // setTotalPages(data.totalPages);
      const response = await fetch(`http://localhost:8080/api/v1/furnitures?limit=999`);
      const allItems = await response.json();
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedItems = allItems.slice(start, end);
      setItems(paginatedItems);
      setTotalPages(Math.ceil(allItems.length / limit));
    }

    fetchItems();
  }, [page]);

  return (
    <Layout>
      <div className={`${styles.content} ${styles.wrapper}`}>
        <h1 className={styles["page-title"]}>Products</h1>
        <ul className={styles["product-list"]}>
          {items.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </ul>
        <Paginator totalPages={totalPages} setPage={setPage} />
      </div>
    </Layout>
  );
};
export default Products;
