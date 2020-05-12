import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import StatisticsItem from "../../components/Statisticsitem/StatisticsItem";

const FarmStatistics = (props) => {
  const [metrics, setMetrics] = useState([]);

  queryString.parse(props.location.search);
  const Id = props.location.state.farm.Id;

  useEffect(() => {
    fetch("http://localhost:8080/v1/farms/" + Id + "/stats")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  useEffect(() => {
    fetch("http://localhost:8080/v1/metrics/")
      .then((res) => res.json())
      .then((data) => {
        setMetrics(data);
      });
  }, []);

  return (
    <div>
      <div>
        <img src={""}></img>
      </div>
      {metrics.map((metric) => {
        return (
          <StatisticsItem statistics={metric} key={metric.Id}></StatisticsItem>
        );
      })}
    </div>
  );
};

export default withRouter(FarmStatistics);
