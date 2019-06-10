import React from "react";
import { Link } from "react-router-dom";

import home from "../../assets/user/home.png";
import vertalenActive from "../../assets/user/vertalen-active.png";
import lines from "../../assets/user/lines.png";

import styles from "./Navigatie.module.css";

const NavigatieVertaling = () => {
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
              <img src={vertalenActive} alt="foto" width="40" height="40" />
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

export default NavigatieVertaling;
