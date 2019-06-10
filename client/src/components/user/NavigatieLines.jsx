import React from "react";
import { Link } from "react-router-dom";

import home from "../../assets/user/home.png";
import vertalen from "../../assets/user/vertalen.png";
import linesActive from "../../assets/user/lines-active.png";

import styles from "./Navigatie.module.css";

const NavigatieLines = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.navigatie}>
          <li>
            <Link to="/">
              <img src={home} alt="foto" width="40" height="40" />
            </Link>
          </li>
          <li>
            <Link to="/vertaal">
              <img src={vertalen} alt="foto" width="40" height="40" />
            </Link>
          </li>
          <li>
            <Link to="/lines">
              <img src={linesActive} alt="foto" width="40" height="40" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigatieLines;
