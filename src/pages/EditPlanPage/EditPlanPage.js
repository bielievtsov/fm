import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import queryString from "query-string";
import { Button, Form } from "react-bootstrap";
import styles from "../CreateGuide/CreateGuide.module.css";

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
      <div onChange={handleChange} className={styles.main}>
        <Form>
          <h2>Plan Editing</h2>
          <Form.Group>
            <Form.Control
              defaultValue={plan.Name}
              name="name"
              type="text"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              defaultValue={plan.Description}
              name="description"
              type="text"
            ></Form.Control>
          </Form.Group>
          <div>
            <Button type="submit" onClick={handleEditSpecificPlan}>
              {strings.submitEdit}
            </Button>
          </div>
        </Form>
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
