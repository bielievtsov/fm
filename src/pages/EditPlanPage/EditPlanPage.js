import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import queryString from "query-string";

const EditPlanPage = (props) => {
  const [plan, setPlan] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  queryString.parse(props.location.search);

  const [isRedirect, setIsRedirect] = useState(true);

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
  };

  const handleEditSpecificPlan = () => {
    const Id = props.location.state.plan.Id;
    const userId = props.location.state.plan.UserId.Id;
    var bodyData = {
      "Id": Id,
      "UserId": {
        "Id": userId,
      },
      "Name": name,
      "Description": description
    }
    fetch("http://localhost:8080/v1/plans/" + Id, {
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    }).then(() => {
      setIsRedirect(!isRedirect);
    });
  };

  useEffect(() => {
    setPlan(props.location.state.plan);
  }, []);

  if (isRedirect) {
    return (
      <div onChange={handleChange}>
        <div>
          <input defaultValue={plan.Name} name="name"></input>
        </div>
        <div>
          <input defaultValue={plan.Description} name="description"></input>
        </div>
        <div>
          <button onClick={handleEditSpecificPlan}>Submit edit</button>
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
