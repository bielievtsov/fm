import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./Header.module.css";
import { Button } from "react-bootstrap";

const Header = (props) => {
  const [isRedirect, setIsRedirect] = useState(false);

  const { strings } = props;

  const handleRedirect = () => {
    localStorage.clear();
    setIsRedirect(!isRedirect);
    props.LogIn();
  };

  return (
    <div className={styles.header}>
      <NavLink to="/">{strings.hPage}</NavLink>
      <div className={styles["header-right"]} onClick={props.changeLang}>
        <Button variant="outline-secondary">{strings.clang}</Button>
      </div>
      <div
        className={styles["header-right"]}
        style={{ display: props.isLoggedIn ? "block" : "none" }}
        onClick={handleRedirect}
      >
        <NavLink to="/">{strings.LogOut} </NavLink>
      </div>
      <div
        className={styles["header-right"]}
        style={{ display: props.isLoggedIn ? "block" : "none" }}
      >
        <NavLink to="/guides">{strings.guides}</NavLink>
      </div>
      <div
        className={styles["header-right"]}
        style={{ display: props.isLoggedIn ? "block" : "none" }}
      >
        <NavLink to="/profile">{strings.profile}</NavLink>
      </div>
      <div
        className={styles["header-right"]}
        style={{ display: !props.isLoggedIn ? "block" : "none" }}
      >
        <NavLink to="/login">{strings.LogIn} </NavLink>
      </div>
      <div
        className={styles["header-right"]}
        style={{ display: !props.isLoggedIn ? "block" : "none" }}
      >
        <NavLink to="/registration">{strings.signUpp} </NavLink>
      </div>
    </div>
  );
  //}
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

const dispatchPropsToState = (dispatch) => {
  return {
    LogIn: () => {
      dispatch({ type: "LOG_IN" });
    },
  };
};

export default connect(mapStateToProps, dispatchPropsToState)(Header);
