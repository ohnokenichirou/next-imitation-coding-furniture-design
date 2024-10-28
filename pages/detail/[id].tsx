import React from "react";
import styles from "@/styles/detail.module.css";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { Item } from "@/types/Item";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (params) => {
  try {
    const id = params.params?.id;
    const req = await fetch(`http://localhost:3000/api/detail/${id}`);
    const item = await req.json();

    return {
      props: {
        item,
      },
    };
  } catch {
    return { notFound: true };
  }
};

const Detail = ({ item }: { item: Item }) => {
  return (
    <Layout>
      {item && (
        <div className={`${styles.content} ${styles.wrapper}`}>
          <h1 className={styles["page-title"]}>{item.title}</h1>
          <div className={styles.item}>
            <div className={styles["item-img"]}>
              <Image
                src={item.url}
                alt={item.title}
                width={400}
                height={400}
                priority
              />
            </div>
            <div className={styles["item-text"]}>
              {item.texts.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
              <p>&yen;{item.price} +tax</p>
              <dl>
                <dt>SIZE：</dt>
                <dd>
                  W{item.size.width} × D{item.size.depth} × H{item.size.height}
                </dd>
                <dt>COLOR：</dt>
                <dd>{item.color}</dd>
                <dt>MATERIAL：</dt>
                <dd>{item.material}</dd>
              </dl>
            </div>
          </div>
          <Link className={styles["link-text"]} href={"/products/"}>
            Back To Products
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Detail;
