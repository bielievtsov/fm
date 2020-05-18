import React, { useEffect, useState } from "react";
import styles from "./GuidesPage.module.css";
import { Redirect } from "react-router-dom";
import PlanItem from "../../components/PlanItem/PlanItem";

const GuidesPage = () => {
  const [plans, setPlans] = useState([]);
  const [isRedirect, setIsRedirect] = useState(false);

  const handleRedirect = () => {
    setIsRedirect(!isRedirect);
  };

  useEffect(() => {
    fetch("http://localhost:8080/v1/plans/")
      .then((data) => data.json())
      .then((data) => setPlans(data));
  }, []);

  if (isRedirect) {
    return <Redirect to={{ pathname: "/plan_create" }}></Redirect>;
  } else {
    return (
      <div>
        <button onClick={handleRedirect}>Create plan</button>
        <div className={styles.main}>
          {plans.map((el) => {
            return <PlanItem plan={el} key={el.Id} />;
          })}
        </div>
      </div>
    );
  }
};

export default GuidesPage;
