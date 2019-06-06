import React from "react";
import { Link } from "react-router-dom";

const OnderMenu2 = id => {
  console.log(id.id);
  return (
    <>
      <p>test</p>
      <Link to={`/add/${id.id}`} id={id.id}>
        <button>+</button>
      </Link>
    </>
  );
};

export default OnderMenu2;
