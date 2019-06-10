import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import styles from "./OnderMenu.module.css";

const io = require(`socket.io-client`);
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
    // SOCKET.IO DEFINIEREN
    const socket = io.connect(`:3000`);
    socket.emit(`start`, e.currentTarget.value);
    this.setState({ playing: true });
  };

  handlePauze = e => {
    e.preventDefault();
    // SOCKET.IO DEFINIEREN
    const socket = io.connect(`:3000`);
    socket.emit(`reset`, e.currentTarget.value);
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
      <div className={styles.container}>
        <div className={styles.navigatie}>
          <div onClick={this.handleAddReset} className={styles.sluit}></div>
        </div>
      </div>
    ) : playing ? (
      <>
        <div className={styles.container}>
          <div className={styles.navigatie}>
            <div>
              <div onClick={this.handlePauze} className={styles.pauze}></div>
              <div onClick={this.handleStop} className={styles.stop}></div>
            </div>

            <Link to={`/add/${id}/${zaal}`} id={id} zaal={zaal}>
              <div className={styles.add}></div>
            </Link>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={styles.container}>
          <div className={styles.navigatie}>
            <div>
              <div onClick={this.handlePlay} className={styles.play}></div>
              <div onClick={this.handleStop} className={styles.stop}></div>
            </div>

            <Link to={`/add/${id}/${zaal}`} id={id} zaal={zaal}>
              <div className={styles.add}></div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(OnderMenu2);
