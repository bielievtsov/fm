import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./FarmItem.module.css";

const FarmItem = ({ farm, filter, strings }) => {
  const [isRedirect, serIsRedirect] = useState(true);

  const handleIsRedirect = () => {
    serIsRedirect(!isRedirect);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (e.target.name === "but") {
      fetch("http://localhost:8080/v1/farms/" + farm.Id, {
        method: "DELETE",
      }).then(() => filter(farm.Id));
    }
  };

  if (isRedirect) {
    return (
      <div className={styles.main}>
        <Button variant="danger" onClick={handleDelete} name="but">
          {strings.Delete}
        </Button>
        <div onClick={handleIsRedirect}>
          {strings.farmName} : <span> {farm.Name} </span>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect
        to={{ pathname: `/profile/farm/:${farm.Id}`, state: { farm } }}
      ></Redirect>
    );
  }
};

export default FarmItem;
