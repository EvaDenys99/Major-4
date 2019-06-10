import React from "react";
import { Link } from "react-router-dom";

import homeActive from "../../assets/user/home-active.png";
import vertalen from "../../assets/user/vertalen.png";
import lines from "../../assets/user/lines.png";

import styles from "./Navigatie.module.css";

const NavigatieHome = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.navigatie}>
          <li>
            <Link to="/">
              <img src={homeActive} alt="foto" width="40" height="40" />
            </Link>
          </li>
          <li>
            <Link to="/vertaal">
              <img src={vertalen} alt="foto" width="40" height="40" />
            </Link>
          </li>
          <li>
            <Link to="/lines">
              <img src={lines} alt="foto" width="40" height="40" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigatieHome;
