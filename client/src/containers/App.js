import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./admin/Home";
import UserHome from "./user/Home";
import UserDetail from "./user/Detail";
import UserVertaal from "./user/Vertaal";
import UserLines from "./user/Lines";
import { ROUTES } from "../constants";
// import Login from "./Login";
// import Register from "./Register";
// import Add from "./Add";
// import Detail from "./Detail";
// import Aftercare from "./Aftercare";

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path={ROUTES.home} exact strict component={UserHome} />
          <Route path={ROUTES.detail} exact strict component={UserDetail} />
          <Route path={ROUTES.vertaal} exact strict component={UserVertaal} />
          <Route path={ROUTES.lines} exact strict component={UserLines} />
          <Route path={ROUTES.homeAdmin} exact strict component={Home} />
          {/* <Route path={ROUTES.aftercare} exact strict component={Aftercare} />
          <Route path={ROUTES.login} component={Login} />
          <Route path={ROUTES.register} component={Register} />
          <Route path={ROUTES.addTattoo} component={Add} />
          <Route
            path={ROUTES.detail}
            render={({ match }) => <Detail id={match.params.id} />}
          /> */}
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
