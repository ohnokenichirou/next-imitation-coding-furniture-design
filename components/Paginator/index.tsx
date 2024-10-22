import React from "react";
import styles from "@/components/Paginator/Paginator.module.css";

export const Paginator = ({
  totalPages,
  setPage,
}: {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  let pageNumbers: number[] = [];
  for (let i = 1; i < totalPages; i++) {
    pageNumbers = [...pageNumbers, i];
  }

  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((number) => (
        <li onClick={() => setPage(number)}>{number}</li>
      ))}
    </ul>
  );
};
