import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class OnderMenu2 extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: false, adding: props.adding };
  }

  handleAdd = e => {
    e.preventDefault();
    this.setState({ adding: true });
  };

  handleAddReset = e => {
    e.preventDefault();
    this.setState({ adding: false });
    this.props.history.goBack();
  };

  handlePlay = e => {
    e.preventDefault();
    this.setState({ playing: true });
  };

  handlePauze = e => {
    e.preventDefault();
    this.setState({ playing: false });
  };

  handleStop = e => {
    e.preventDefault();
    this.setState({ playing: false });
    this.props.history.goBack();
    console.log(`voorstelling afgelopen`);
  };

  render() {
    const { id, zaal } = this.props;
    const { playing } = this.state;
    const { adding } = this.state;
    // console.log(zaal);

    return adding ? (
      <p onClick={this.handleAddReset}>x</p>
    ) : playing ? (
      <>
        <p onClick={this.handlePauze}>pauze</p>
        <p onClick={this.handleStop}>stop</p>
        <Link to={`/add/${id}/${zaal}`} id={id} zaal={zaal}>
          <p>+</p>
        </Link>
      </>
    ) : (
      <>
        <p onClick={this.handlePlay}>play</p>
        <p onClick={this.handleStop}>stop</p>
        <Link to={`/add/${id}/${zaal}`} id={id} zaal={zaal}>
          <p>+</p>
        </Link>
      </>
    );
  }
}

export default withRouter(OnderMenu2);
