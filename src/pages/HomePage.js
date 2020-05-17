import React from "react";
import styles from "./HomePage.module.css";
import LocalizedStrings from 'react-localization';
 
let strings = new LocalizedStrings({
 en:{
   welcome: "WELCOME TO FISH FARM"
 },
 ua: {
   welcome: "ЛАСКАВО ПРОСИМО ДО FISH FARM"
 }
});

const HomePage = () => {
  strings.setLanguage('en');

  return (
    <div className={styles["home-page"]}>
      <div>{strings.welcome}</div>
    </div>
  );
};

export default HomePage;
