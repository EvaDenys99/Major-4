import React from "react";

import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "../../components/admin/OnderMenu";
import VoorstellingLijst from "../../components/admin/VoorstellingLijst";

const Home = () => {
  return (
    <>
      <div>
        <BovenMenu />
        <section>
          <h2>Komende voorstellingen</h2>
          <VoorstellingLijst />
        </section>
        <OnderMenu />
      </div>
    </>
  );
};

export default Home;
