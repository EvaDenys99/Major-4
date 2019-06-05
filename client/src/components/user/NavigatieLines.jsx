import React from "react";
import { Link } from "react-router-dom";

import home from "../../assets/user/home.png";
import vertalen from "../../assets/user/vertalen.png";
import linesActive from "../../assets/user/lines-active.png";

const NavigatieLines = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">
            <img src={home} alt="foto" width="100" height="100" />
          </Link>
        </li>
        <li>
          <Link to="/vertaal">
            <img src={vertalen} alt="foto" width="100" height="100" />
          </Link>
        </li>
        <li>
          <Link to="/lines">
            <img src={linesActive} alt="foto" width="100" height="100" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavigatieLines;
