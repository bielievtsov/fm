import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import styles from "./FarmItem.module.css";

const FarmItem = ({ farm }) => {
  const [isRedirect, serIsRedirect] = useState(true);

  const handleIsRedirect = () => {
    serIsRedirect(!isRedirect);
  };

  if (isRedirect) {
    return (
      <div className={styles.main} onClick={handleIsRedirect}>
        <div>
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
