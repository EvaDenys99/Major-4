import React from "react";
import { ROUTES } from "../../constants";
import { Link } from "react-router-dom";

const OnderMenu2 = () => {
  return (
    <>
      <p>test</p>
      <Link to={`/notificatie/:id/add`}>
        <button>+</button>
      </Link>
    </>
  );
};

export default OnderMenu2;
