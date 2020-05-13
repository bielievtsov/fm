import React, { useState, useEffect } from "react";
import styles from "./StatisticsItem.module.css";

const StatisticsItem = ({ statistics }) => {
  let i;
  const [metrics, setMetrics] = useState([]);
  if (statistics.Id === 2 || statistics.Id === 3) {
    i = require("../../images/metric_" + statistics.Id + ".png");
    fetch("http://localhost:8080/v1/farms/" + statistics.Id + "/stats")
      .then((res) => res.json())
      .then((data) => setMetrics(data.results))
      .then(() => console.log(metrics));
  }
  return (
    <div className={styles.main}>
      {i ? <img src={i}></img> : <div></div>}
      <div>Name : {statistics.Name}</div>
      <div>Description : {statistics.Description}</div>
      <div>
        <div>
          {metrics[0] && statistics.Id == 2 ? (
            <div>
              <div> Min {metrics[0].min} </div>
              <div> Max {metrics[0].max} </div>
              <div> Mean {metrics[0].mean} </div>
              <div> variance {metrics[0].variance} </div>
            </div>
          ) : metrics[1] && statistics.Id == 3 ? (
            <div>
              <div> Min {metrics[1].min} </div>
              <div> Max {metrics[1].max} </div>
              <div> Mean {metrics[1].mean} </div>
              <div> variance {metrics[1].variance} </div>
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsItem;
