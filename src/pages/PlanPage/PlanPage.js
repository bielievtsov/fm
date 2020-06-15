import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import styles from "./PlanPage.module.css";

const PlanPage = (props) => {
  const [plan, setPlan] = useState({});
  const [isRedirect, setIsRedirect] = useState(true);
  const [userIdFarm, setUserId] = useState(0);

  const userId = JSON.parse(localStorage.getItem("user")).Id;

  const { strings } = props;

  const handleRedirectToSpecificPlanEdit = () => {
    setIsRedirect(!isRedirect);
  };

  queryString.parse(props.location.search);

  useEffect(() => {
    const Id = props.location.state.plan.Id;

    fetch(`http://localhost:8080/v1/plans/${Id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((dataInJSON) => {
        setPlan(dataInJSON);
        setUserId(dataInJSON.UserId.Id);
      });
  }, []);

  if (isRedirect) {
    return (
      <div className={styles.main}>
        <img
          alt="edit icon"
          onClick={handleRedirectToSpecificPlanEdit}
          style={{
            display: userId === userIdFarm ? "block" : "none",
            cursor: "pointer",
          }}
        />
        <div className={styles.list}>
          <div>
            <b>{strings.planName}</b>
            <div>{plan.Name || "no plan name"}</div>
          </div>
          <div>
            <b>{strings.planDesc}</b>
            <div>{plan.Description || "no description"}</div>
          </div>
          <div className={styles.info}>
            <div>
              <b>{strings.user}</b>
              <div>{plan.FirstName || "no FirstName"}</div>
            </div>
            <div>
              <b>{strings.email}</b>
              <div>{plan.Email || "no Email"}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{ pathname: `/plan/edit/:${plan.Id}`, state: { plan } }}
      ></Redirect>
    );
  }
};

export default withRouter(PlanPage);
