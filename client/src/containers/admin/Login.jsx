import React from "react";
// import PageHeader from "../components/PageHeader";
import LoginForm from "../../components/auth/LoginForm";

import stylesLayout from "./../../styles/layout.module.css";

const Login = () => {
  return (
    <>
      <div className={stylesLayout.layoutAdmin}>
        <h1>Push Lines</h1>

        <section>
          <LoginForm />
        </section>
      </div>
    </>
  );
};

export default Login;
