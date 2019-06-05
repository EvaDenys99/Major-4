import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";

const AktLijst = ({ aktStore }) => {
  const { akts } = aktStore;
  return (
    <>
      <div>
        {voorstellingen.map(voorstelling => (
          <Link to={`admin/voorstelling/${voorstelling.id}`}>
            <div>
              <img
                src={voorstelling.imageAdmin}
                alt="een foto"
                width="382"
                height="270"
              />
              <h3>{voorstelling.titel}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default inject(`aktStore`)(AktLijst);
