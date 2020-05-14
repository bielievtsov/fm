import React, { useState, useEffect } from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ statistics }) => {
  let i = require("../../" + statistics.ImageUrl);
  return (
    <div className={styles.main}>
      {i ? <img src={i}></img> : <div></div>}
      <div>Name : {statistics.MetricName}</div>
      <div>Description : {statistics.MetricDescription}</div>
      <div>Max : {statistics.Max}</div>
      <div> Min : {statistics.Min}</div>
      <div>Variance : {statistics.Variance}</div>
    </div>
  );
};

export default StatisticsItem;
