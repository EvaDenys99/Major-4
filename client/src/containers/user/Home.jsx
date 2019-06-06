import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import NavigatieHome from "../../components/user/NavigatieHome";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { uitgeklapt: false };
  }

  handleSubmitMeer = e => {
    e.preventDefault();
    this.setState({ uitgeklapt: true });
  };

  handleSubmitMinder = e => {
    e.preventDefault();
    this.setState({ uitgeklapt: false });
  };

  render() {
    const { zaalStore } = this.props;
    const { uitgeklapt } = this.state;

    return uitgeklapt ? (
      <>
        {zaalStore.hoofdZalen.map(zaal => {
          return (
            <Link to={`zaal/${zaal.id}`} key={zaal.id}>
              <div>
                <img src={zaal.img} alt={zaal.naam} />
              </div>
            </Link>
          );
        })}
        <button onClick={this.handleSubmitMinder}>Andere locaties</button>
        {zaalStore.bijZalen.map(zaal => {
          return (
            <Link to={`zaal/${zaal.id}`} key={zaal.id}>
              <div>
                <p>{zaal.naam}</p>
              </div>
            </Link>
          );
        })}
        <NavigatieHome />
      </>
    ) : (
      <>
        {zaalStore.hoofdZalen.map(zaal => {
          return (
            <Link to={`zaal/${zaal.id}`} key={zaal.id}>
              <div>
                <img src={zaal.img} alt={zaal.naam} />
              </div>
            </Link>
          );
        })}
        <button onClick={this.handleSubmitMeer}>Andere locaties</button>
        <NavigatieHome />
      </>
    );
  }
}

export default inject(`zaalStore`)(observer(Home));
