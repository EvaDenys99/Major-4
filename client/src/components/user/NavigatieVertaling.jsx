import React from "react";
import { Link } from "react-router-dom";

import home from "../../assets/user/home.png";
import vertalenActive from "../../assets/user/vertalen-active.png";
import lines from "../../assets/user/lines.png";

const NavigatieVertaling = () => {
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
            <img src={vertalenActive} alt="foto" width="100" height="100" />
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

export default NavigatieVertaling;
