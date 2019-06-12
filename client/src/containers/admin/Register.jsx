import React from "react";
import RegisterForm from "../../components/auth/RegisterForm";

import stylesLayout from "./../../styles/layout.module.css";
import BovenMenu from "../../components/admin/BovenMenu";
import OnderMenu from "./../../components/admin/OnderMenu";

const Register = () => {
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <BovenMenu />
        <div className={stylesLayout.contentAdminContainer}>
          <section className={stylesLayout.contentAdmin}>
            <RegisterForm />
          </section>
        </div>
        <OnderMenu />
      </div>
    </>
  );
};

export default Register;
