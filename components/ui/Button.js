import Link from "next/link";
import React from "react";
import styles from "./button.module.css";

const Button = ({ children, link, onClick }) => {
  return (
    <>
      {link && (
        <Link href={link}>
          <a className={styles.btn}>{children}</a>
        </Link>
      )}
      {link || (
        <button className={styles.btn} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
