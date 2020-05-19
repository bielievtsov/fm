import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styles from "./CreateFarm.module.scss";

const CreateFarm = () => {
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  const handleChange = (e) => {
    if ((e.target.name = "desc")) {
      setDescription(e.target.value);
    }
    if ((e.target.name = "name")) {
      setName(e.target.value);
    }
  };

  const handleCreation = () => {
    var bodyData = {
      CreationDate: new Date().toJSON(),
      UserId: {
        Id: 1,
      },
      Name: name,
      Description: description,
    };
    fetch("http://localhost:8080/v1/farms/", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => setIsRedirect(!isRedirect));
  };

  if (isRedirect) {
    return <Redirect to={{ pathname: "/" }}></Redirect>;
  } else {
    return (
      <div onChange={handleChange} className={styles.wrapper}>
        <div className={styles["form-signin"]}>
          <h2 className={styles["form-signin-heading"]}>Farm creating</h2>
          <div className={styles["form-control"]}>
            <div>Farm's description</div>
            <input name="desc"></input>
          </div>
          <div className={styles["form-control"]}>
            <div>Name of the farm</div>
            <input name="name"></input>
          </div>
          <button
            onClick={handleCreation}
            className={styles["btn btn-lg btn-primary btn-block"]}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(CreateFarm);
