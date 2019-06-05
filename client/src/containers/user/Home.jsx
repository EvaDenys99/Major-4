import React from "react";
import { inject } from "mobx-react";
import { Link } from "react-router-dom";

import NavigatieHome from "../../components/user/NavigatieHome";

// zoals editshort van opdrachtWAD -> als er geklikt wordt op de 'andere' worden de buttons weergeven

const Home = ({ zaalStore }) => {
  const { zalen } = zaalStore;
  return (
    <>
      {/* <h1>PushLines</h1> */}
      {zalen.map(zaal => {
        return (
          <Link to={`zaal/${zaal.id}`}>
            <div key={zaal.id}>
              <img src={zaal.img} alt={zaal.naam} />
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

export default inject(`zaalStore`)(Home);
