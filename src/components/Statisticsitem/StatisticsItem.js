import React from "react";

const StatisticsItem = ({ statistics }) => {
  return (
    <div>
      <div>Name : {statistics.Name}</div>
      <div>Description : {statistics.Description}</div>
    </div>
  );
};

export default StatisticsItem;
