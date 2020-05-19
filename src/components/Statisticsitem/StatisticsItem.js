import React, { useState, useEffect } from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ statistics, strings }) => {
  let i = require("../../" + statistics.ImageUrl);
  return (
    <div className={styles.main}>
      {i ? <img src={i}></img> : <div></div>}
      <div>
        {strings.Name} : {statistics.MetricName}
      </div>
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
  );
};

export default StatisticsItem;
