import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import styles from "./FarmItem.module.css";

const FarmItem = ({ farm, farms }) => {
  const [isRedirect, serIsRedirect] = useState(true);

  const handleIsRedirect = () => {
    serIsRedirect(!isRedirect);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (e.target.name === "but") {
      fetch("http://localhost:8080/v1/farms/" + farm.Id, {
        method: "DELETE",
      });
      farms.filter((el) => el.Id !== farm.Id);
    }
  };

  if (isRedirect) {
    return (
      <div className={styles.main}>
        <button onClick={handleDelete} name="but">
          Delete
        </button>
        <div onClick={handleIsRedirect}>
          Farm name : <span> {farm.Name} </span>
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
