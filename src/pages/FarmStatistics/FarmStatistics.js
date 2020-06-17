import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import StatisticsItem from "../../components/Statisticsitem/StatisticsItem";

const FarmStatistics = (props) => {
  const [metrics, setMetrics] = useState([]);
  const [q, sq] = useState(true);
  let i = 0;
  queryString.parse(props.location.search);
  const Id = props.location.state.farm.Id;

  const { strings } = props;

  const fetchData = async () => {
    const data = await fetch("http://localhost:8080/v1/farms/" + Id + "/stats");
    const dataJSON = await data.json();
    setMetrics(dataJSON);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (metrics.length) {
    return (
      <div>
        {metrics.map((metric) => {
          return (
            <StatisticsItem
              statistics={metric}
              key={i++}
              strings={strings}
            ></StatisticsItem>
          );
        })}
      </div>
    );
  } else {
    return <div>No metrics so far...</div>;
  }
};

export default withRouter(FarmStatistics);
