import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import StatisticsItem from "../../components/Statisticsitem/StatisticsItem";
import styles from "./farmStatistics.module.css";

const FarmStatistics = (props) => {
  const [metrics, setMetrics] = useState([]);
  const [q, sq] = useState(true);
  let i = 0;
  queryString.parse(props.location.search);
  const Id = props.location.state.farm.Id;

  const fetchData = async () => {
    const data = await fetch("http://localhost:8080/v1/farms/" + Id + "/stats");
    const dataJSON = await data.json();
    console.log(dataJSON);
    setMetrics(dataJSON);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {metrics.map((metric) => {
        return <StatisticsItem statistics={metric} key={i++}></StatisticsItem>;
      })}
    </div>
  );
};

export default withRouter(FarmStatistics);
