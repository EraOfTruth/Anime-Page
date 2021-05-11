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
    <div className={styles.home}>
      <div className={styles.square}></div>
            {/* <button className={styles.tourstart}>Click Here</button> */}

      {/* <button className={styles.tourstart} onClick={setActive}>
        CLICK HERE
      </button> */}
      <div onClick={setActive}  className={styles.image}></div>
    </div>
  );
};

export default Home;
