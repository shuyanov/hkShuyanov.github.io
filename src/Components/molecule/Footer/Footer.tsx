import React from "react";
import styles from "./styles.module.scss";

// import lineSVG from "../../../assets/line.svg";
import girlSVG from "../../../assets/gf3.svg";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img src={girlSVG} />
      <div className={styles.aboutContainer}>
        <div className={styles.info}>
          <span>Shuyanov</span>
          <span>Msxsim</span>
          <span>Andreevich</span>
          <span>Isuct</span>
          <span>3 curs</span>
          <span>3/147</span>
        </div>
      </div>
    </div>
  );
};
