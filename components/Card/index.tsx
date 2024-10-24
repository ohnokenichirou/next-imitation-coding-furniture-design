import React from "react";
import { Item } from "@/types/Item";
import Link from "next/link";
import Image from "next/image";

export const Card = ({ item }: { item: Item }) => {
  return (
    <li key={item.id}>
      <Link href={`/detail/${item.id}`}>
        <Image src={item.url} alt={item.title} width={300} height={300} />
        <p>{item.title}</p>
        <p>&yen;{item.price} +tax</p>
      </Link>
    </li>
  );
};
