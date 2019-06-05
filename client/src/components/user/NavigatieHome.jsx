import React from "react";
import { Link } from "react-router-dom";

import homeActive from "../../assets/user/home-active.png";
import vertalen from "../../assets/user/vertalen.png";
import lines from "../../assets/user/lines.png";

const NavigatieHome = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">
            <img src={homeActive} alt="foto" width="100" height="100" />
          </Link>
        </li>
        <li>
          <Link to="/vertaal">
            <img src={vertalen} alt="foto" width="100" height="100" />
          </Link>
        </li>
        <li>
          <Link to="/lines">
            <img src={lines} alt="foto" width="100" height="100" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavigatieHome;
