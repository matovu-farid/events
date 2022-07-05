import Link from "next/link";
import React from "react";
import styles from './button.module.css'

const Button = ({ children, link }) => {
  return <div className={styles.btn}>
  <Link  href={link}>

      {children}
    </Link>
    </div>
    ;
};

export default Button;
