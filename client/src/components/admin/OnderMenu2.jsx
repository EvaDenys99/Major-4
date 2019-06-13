import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";
import styles from "./OnderMenu.module.css";

// const socket = require(`socket.io-client`)(
//   `https://pushlines-obv.herokuapp.com`
// );
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
    const socket = require(`socket.io-client`)(
      `https://pushlines-obv.herokuapp.com`
    );
    socket.emit(`start`, e.currentTarget.value);
    this.setState({ playing: true });
  };

  handlePauze = e => {
    e.preventDefault();
    // SOCKET.IO DEFINIEREN
    const socket = require(`socket.io-client`)(
      `https://pushlines-obv.herokuapp.com`
    );
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
        <div className={styles.navigatieAlleen}>
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

export default observer(withRouter(OnderMenu2));
