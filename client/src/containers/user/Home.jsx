import React from "react";

import NavigatieHome from "../../components/user/NavigatieHome";

import info from "./../../data/info.json";

// zoals editshort van opdrachtWAD -> als er geklikt wordt op de 'andere' worden de buttons weergeven

const Home = () => {
  return (
    <>
      <h1>Homepagina</h1>
      {/* forEach (hoofdZalen as hoofdZaal) => {<Link to="idk"><img src="hoofdZaal.img"></Link>} */}
      {info.hoofdZalen.map(zalen => {
        return (
          <div>
            <p>{zalen.name}</p>
          </div>
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

export default Home;
