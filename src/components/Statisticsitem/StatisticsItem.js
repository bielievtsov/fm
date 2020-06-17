import React from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ statistics, strings }) => {
  let i = require("../../" + statistics.ImageUrl);

  console.log(statistics);
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>
          {strings.Name} : {statistics.MetricName}
        </h2>
        {i ? <img className={styles.img} src={i}></img> : <div></div>}
      </div>
      <div className={styles.info}>
        <div>
          {strings.Description} : {statistics.MetricDescription}
        </div>
        <div>
          {strings.Max} : {statistics.Max}
        </div>
        <div>
          {strings.Min} : {statistics.Min}
        </div>
        <div>
          {strings.Variance} : {statistics.Variance}
        </div>
        <div>
          {strings.Mean} : {statistics.Mean}
        </div>
      </div>
    </div>
  );
};

export default StatisticsItem;
