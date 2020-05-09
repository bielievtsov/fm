import React, { useEffect, useState } from "react";
import styles from "./GuidesPage.module.css";
import PlanItem from "../../components/PlanItem/PlanItem";

const GuidesPage = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/v1/plans/")
      .then((data) => data.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <div className={styles.main}>
      {plans.map((el) => {
        return <PlanItem plan={el} key={el.Id} />;
      })}
    </div>
  );
};

export default GuidesPage;
