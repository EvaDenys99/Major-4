import React from "react";

const MeerVoorstellingen = ({ voorstellingen }) => {
  return (
    <>
      <ul>
        {console.log(voorstellingen)}
        {voorstellingen.slice(1).map(voorstelling => {
          return (
            <li>
              <img
                src={voorstelling.imageUser}
                alt={voorstelling.titel}
                width="316"
                height="284"
              />
              <p>{voorstelling.titel}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MeerVoorstellingen;
