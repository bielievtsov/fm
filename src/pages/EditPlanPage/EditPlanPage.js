import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import styles from "./EditPlanPage.module.scss";

const EditPlanPage = (props) => {
  const [plan, setPlan] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  queryString.parse(props.location.search);

  const { strings } = props;

  const [isRedirect, setIsRedirect] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
  };

  const handleEditSpecificPlan = () => {
    const Id = props.location.state.plan.Id;
    const userId = props.location.state.plan.UserId.Id;
    var bodyData = {
      Id: Id,
      UserId: {
        Id: userId,
      },
      Name: name,
      Description: description,
    };
    fetch("http://localhost:8080/v1/plans/" + Id, {
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then((d) => {
      setIsRedirect(!isRedirect);
    });
  };

  useEffect(() => {
    setPlan(props.location.state.plan);
  }, []);

  if (isRedirect) {
    return (
      <div onChange={handleChange} className={styles.wrapper}>
        <div className={styles["form-signin"]}>
          <h2 className={styles["form-signin-heading"]}>Plan Editing</h2>
          <div>
            <input
              defaultValue={plan.Name}
              name="name"
              type="text"
              className={styles["form-control"]}
            ></input>
          </div>
          <div>
            <input
              defaultValue={plan.Description}
              name="description"
              type="text"
              className={styles["form-control"]}
            ></input>
          </div>
          <div>
            <button
              className={styles["btn btn-lg btn-primary btn-block"]}
              type="submit"
              onClick={handleEditSpecificPlan}
            >
              {strings.submitEdit}
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: `/guides/:${plan.Id}`,
          state: { plan: props.location.state.plan },
        }}
      ></Redirect>
    );
  }
};

export default withRouter(EditPlanPage);
