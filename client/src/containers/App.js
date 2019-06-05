import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// import Home from "./Home";
// import { ROUTES } from "../constants";
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
          {/* <Route path={ROUTES.home} exact strict component={Home} />
          <Route path={ROUTES.aftercare} exact strict component={Aftercare} />
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
