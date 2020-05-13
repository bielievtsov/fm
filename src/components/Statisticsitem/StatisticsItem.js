import React from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ statistics }) => {
  return (
    <div className={styles.main}>
      <div>Name : {statistics.Name}</div>
      <div>Description : {statistics.Description}</div>
    </div>
  );
};

export default StatisticsItem;
