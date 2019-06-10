import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";

import stylesLayout from "./../../styles/layout.module.css";

const Register = () => {
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <h1>Tattoo Keeper</h1>
        <section>
          <RegisterForm />
        </section>
      </div>
    </>
  );
};

export default Register;
