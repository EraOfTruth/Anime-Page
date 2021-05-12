import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { motion } from "framer-motion";

const Home = () => {
  const [isActive, setIsActive] = React.useState(false);

  const setActive = () => {
    setIsActive(isActive);
    console.log("hi");
  };

  return (
    <div className={styles.home_page_container}>
      <div className={styles.home_page_center}></div>
      <div className={styles.home_page_left}></div>
      <div className={styles.home_page_right}></div>
      <div className={styles.start_button}></div>
      <div className={[styles.home, styles.home_top].join(" ")}>
        <div className={[styles.square, styles.square_top].join(" ")}></div>
        <div onClick={setActive} className={[styles.image, styles.image_top].join(" ")}></div>
      </div>
      <div className={[styles.home, styles.home_bottom].join(" ")}>
        <div className={[styles.square, styles.square_bottom].join(" ")}></div>
        <div onClick={setActive} className={[styles.image, styles.image_bottom].join(" ")}></div>
      </div>
    </div>
  );
};

export default Home;
