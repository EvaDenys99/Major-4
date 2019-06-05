import React from "react";

import VertaalForm from "./../../components/user/VertaalForm";

import NavigatieVertaling from "../../components/user/NavigatieVertaling";

const Vertaal = () => {
  return (
    <>
      <h1>Vertaal je zin</h1>
      <VertaalForm />
      <NavigatieVertaling />
    </>
  );
};

export default Vertaal;
