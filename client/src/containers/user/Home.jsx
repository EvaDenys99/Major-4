import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import NavigatieHome from "../../components/user/NavigatieHome";

// zoals editshort van opdrachtWAD -> als er geklikt wordt op de 'andere' worden de buttons weergeven

const Home = ({ zaalStore }) => {
  return (
    <>
      {zaalStore.hoofdZalen.map(zaal => {
        return (
          <Link to={`zaal/${zaal.id}`} key={zaal.id}>
            <div>
              <img src={zaal.img} alt={zaal.naam} />
            </div>
          </Link>
        );
      })}

      {zaalStore.bijZalen.map(zaal => {
        return (
          <Link to={`zaal/${zaal.id}`} key={zaal.id}>
            <div>
              <p>{zaal.naam}</p>
            </div>
          </Link>
        );
      })}
      {/* button andere */}
      {/* OF */}
      {/* button andere */}
      {/* forEach (hoofdZalen as hoofdZaal) => {<Link to="idk"><p>AMUZ</p></Link>} */}
      <NavigatieHome />
    </>
  );
};

export default inject(`zaalStore`)(observer(Home));
