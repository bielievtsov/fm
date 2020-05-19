import React, { useState } from "react";
import styles from "./HomePage.module.css";

const HomePage = ({ strings }) => {
  return (
    <div className={styles["home-page"]}>
      <div>{strings.welcome}</div>
    </div>
  );
};

export default HomePage;
