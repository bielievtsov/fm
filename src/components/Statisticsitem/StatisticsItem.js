import React, { useState, useEffect } from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ statistics, sidemetrics = [] }) => {
  let i;
  let [metrics, setmetrics] = useState([]);
  if (statistics.Id === 2 || statistics.Id === 3) {
    i = require("../../images/metric_" + statistics.Id + ".png");
  }
  if (sidemetrics) {
    metrics = metrics.filter((el) => el.Id === statistics.Id);
    setmetrics(metrics);
    console.log(metrics);
  }
  return (
    <div className={styles.main}>
      {i ? <img src={i}></img> : <div></div>}
      <div>Name : {statistics.Name}</div>
      <div>Description : {statistics.Description}</div>
      <div></div>
    </div>
  );
};

export default StatisticsItem;
