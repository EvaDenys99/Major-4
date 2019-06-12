import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import Bovenmenu from "./../../components/admin/BovenMenu";

import stylesLayout from "./../../styles/layout.module.css";

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
      </div>
    </>
  );
};

export default Login;
