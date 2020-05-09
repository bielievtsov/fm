import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import styles from "./PlanComponent.module.css";

const PlanItem = ({ plan }) => {
  const [isRedirect, setIsRedirect] = useState(true);

  const handleRedirectToSpecificPlan = () => {
    setIsRedirect(!isRedirect);
  };

  if (isRedirect) {
    return (
      <div className={styles.main} onClick={handleRedirectToSpecificPlan}>
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
