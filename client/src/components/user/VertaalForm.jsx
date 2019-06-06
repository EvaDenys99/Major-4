import React, { Component } from "react";

import switchImg from "../../assets/user/switch.png";

class VertaalForm extends Component {
  constructor(props) {
    super(props);
    this.state = { vertaald: false };
  }

  handleSubmitVertaal = e => {
    e.preventDefault();
    this.setState({ vertaald: true });
  };

  handleSubmitReset = e => {
    e.preventDefault();
    this.setState({ vertaald: false });
  };

  render() {
    const { vertaald } = this.state;

    return vertaald ? (
      <>
        <select name="" id="">
          <option value="Nederlands">Nederlands</option>
        </select>
        <img src={switchImg} alt="switch" width="50" height="50" />
        <select name="" id="">
          <option value="Engels">Engels</option>
        </select>
        <div>
          <input type="text" defaultValue="Ik ken geen andere taal" />
          <p>I don't know any other languages</p>
        </div>
        <button onClick={this.handleSubmitReset}>Opnieuw</button>
      </>
    ) : (
      <>
        <select name="" id="">
          <option value="Nederlands">Nederlands</option>
        </select>
        <img src={switchImg} alt="switch" width="50" height="50" />
        <select name="" id="">
          <option value="Engels">Engels</option>
        </select>
        <div>
          <input type="text" defaultValue="Ik ken geen andere taal" />
        </div>
        <button onClick={this.handleSubmitVertaal}>Vertaal</button>
      </>
    );
  }
}

export default VertaalForm;
