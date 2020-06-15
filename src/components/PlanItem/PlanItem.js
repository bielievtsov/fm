import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./PlanComponent.module.css";

const PlanItem = ({ plan, strings }) => {
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
      <div onClick={handleRedirectToSpecificPlan} className={styles.main}>
        <div>
          <Button
            onClick={handleDeletePlan}
            variant="danger"
            style={{ display: userId === plan.UserId.Id ? "block" : "none" }}
            name="del"
          >
            {strings.Delete}
          </Button>
        </div>

        <div>
          <b>{strings.planName}</b>
          <div>{plan.Name || "no plan name"}</div>
        </div>
        <div>
          <b>{strings.planDesc}</b>
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
