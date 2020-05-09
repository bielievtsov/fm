import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">Home Page</NavLink>
      <div className={styles["header-right"]}>
        <NavLink to="/guides">Guides</NavLink>
      </div>
      <div className={styles["header-right"]}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  );
};

export default Header;
