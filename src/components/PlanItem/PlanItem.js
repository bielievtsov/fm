import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import styles from "./PlanComponent.module.css";

const PlanItem = ({ plan }) => {
  const [isRedirect, setIsRedirect] = useState(true);

  const handleRedirectToSpecificPlan = () => {
    setIsRedirect(!isRedirect);
  };

  const handleDeletePlan = (e) => {
    if (e.target.name === "del") {
      setIsRedirect(isRedirect);
      fetch("http://localhost:8080/v1/plans/" + plan.Id, {
        method: "DELETE",
      });
    }
  };

  const userId = JSON.parse(localStorage.getItem("user")).Id;

  if (isRedirect) {
    return (
      <div className={styles.main} onClick={handleRedirectToSpecificPlan}>
        <button
          onClick={handleDeletePlan}
          style={{ display: userId === plan.UserId.Id ? "block" : "none" }}
          name="del"
        >
          Delete
        </button>
        <div>
          <b>Plan name</b>
          <div>{plan.Name || "no plan name"}</div>
        </div>
        <div>
          <b>Plan Description</b>
          <div>{plan.Description || "no description"}</div>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{ pathname: `/plan/:${plan.Id}`, state: { plan } }}
      ></Redirect>
    );
  }
};

export default PlanItem;
