import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Bovenmenu from "./../../components/admin/BovenMenu";

import stylesLayout from "./../../styles/layout.module.css";
import OnderMenu from "../../components/admin/OnderMenu";

const Login = () => {
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <Bovenmenu />
        <div className={stylesLayout.contentAdminContainer}>
          <section className={stylesLayout.contentAdmin}>
            <LoginForm />
          </section>
        </div>
        <OnderMenu />
      </div>
    </>
  );
};

export default Login;
