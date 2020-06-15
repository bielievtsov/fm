import React from "react";

const StatisticsItem = ({ statistics, strings }) => {
  let i = require("../../" + statistics.ImageUrl);
  return (
    <div>
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
