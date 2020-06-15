import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PlanItem from "../../components/PlanItem/PlanItem";
import styles from "./GuidesPage.module.css";
import { Button } from "react-bootstrap";

const GuidesPage = ({ strings }) => {
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
      <div className={styles.root}>
        <Button
          onClick={handleRedirect}
          style={{ width: 200, marginLeft: 800 }}
        >
          {strings.createPlan}
        </Button>
        <div className={styles.main}>
          {plans.map((el) => {
            return <PlanItem plan={el} key={el.Id} strings={strings} />;
          })}
        </div>
      </div>
    );
  }
};

export default GuidesPage;
