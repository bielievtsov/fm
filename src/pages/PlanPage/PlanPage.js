import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import styles from "../../components/PlanItem/PlanComponent.module.css";
import planPageStyles from "./PlanPage.module.css";
import queryString from "query-string";
import editIcon from "../../pictures/editIcon.png";

const PlanPage = (props) => {
  const [plan, setPlan] = useState({});
  const [isRedirect, setIsRedirect] = useState(true);

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
      .then((dataInJSON) => setPlan(dataInJSON));
  }, []);

  if (isRedirect) {
    return (
      <div className={planPageStyles.main}>
        <img
          src={editIcon}
          alt="edit icon"
          onClick={handleRedirectToSpecificPlanEdit}
        />
        <div className={styles.main} style={{ cursor: "default" }}>
          <div>
            <b>Plan name</b>
            <div>{plan.Name || "no plan name"}</div>
          </div>
          <div>
            <b>Plan Description</b>
            <div>{plan.Description || "no description"}</div>
          </div>
          <div className={planPageStyles.userInfo}>
            <div>
              <b>User</b>
              <div>{plan.FirstName || "no FirstName"}</div>
            </div>
            <div>
              <b>User email</b>
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
