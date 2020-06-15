import React from "react";
import styles from "./HomePage.module.css";

const HomePage = ({ strings }) => {
  return (
    <div className={styles["main"]}>
      <div>{strings.welcome}</div>
    </div>
  );
};

export default HomePage;
