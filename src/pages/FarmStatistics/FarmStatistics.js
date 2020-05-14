import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import StatisticsItem from "../../components/Statisticsitem/StatisticsItem";
import styles from "./farmStatistics.module.css";

const FarmStatistics = (props) => {
  const [metrics, setMetrics] = useState([]);
  const [sidematrics, setSideMetrics] = useState([]);

  queryString.parse(props.location.search);
  const Id = props.location.state.farm.Id;

  return (
    <div className={styles.main}>
      {metrics.map((metric) => {
        return (
          <StatisticsItem
            statistics={metric}
            key={metric.Id}
            sidemetrics={sidematrics}
          ></StatisticsItem>
        );
      })}
    </div>
  );
};

export default withRouter(FarmStatistics);
