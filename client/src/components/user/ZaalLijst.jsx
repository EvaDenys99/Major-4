import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";

import styles from "./../user/ZaalLijst.module.css";
import stylesUI from "./../../styles/uiControls.module.css";

class ZaalLijst extends Component {
  constructor(props) {
    super(props);
    this.state = { uitgeklapt: false };
  }

  handleSubmitMeer = e => {
    e.preventDefault();
    this.setState({ uitgeklapt: true });
    window.scrollTo({ top: 0, left: 812, behavior: `smooth` });
  };

  handleSubmitMinder = e => {
    e.preventDefault();
    this.setState({ uitgeklapt: false });
    window.scrollTo({ top: 0, left: 0, behavior: `smooth` });
  };

  render() {
    const { zaalStore } = this.props;
    const { uitgeklapt } = this.state;

    return uitgeklapt ? (
      <>
        <section className={styles.section}>
          {zaalStore.hoofdZalen.map(zaal => {
            return (
              <Link
                to={`zaal/${zaal.id}`}
                key={zaal.id}
                className={styles.groteZaal}
              >
                <div>
                  <img src={zaal.img} alt={zaal.naam} />
                </div>
              </Link>
            );
          })}
        </section>
        <button onClick={this.handleSubmitMinder} className={styles.buttonDark}>
          <p>Andere locaties</p>
          <p className={stylesUI.upArrow}></p>
        </button>
        <ul className={styles.locatieGrid}>
          {zaalStore.bijZalen.map(zaal => {
            return (
              <Link
                to={`zaal/${zaal.id}`}
                key={zaal.id}
                className={styles.listItems}
              >
                <div className={styles.line} />
                <li>{zaal.naam}</li>
              </Link>
            );
          })}
        </ul>
      </>
    ) : (
      <>
        <section className={styles.section}>
          {zaalStore.hoofdZalen.map(zaal => {
            return (
              <Link
                to={`zaal/${zaal.id}`}
                key={zaal.id}
                className={styles.groteZaal}
              >
                <div>
                  <img src={zaal.img} alt={zaal.naam} />
                </div>
              </Link>
            );
          })}
        </section>
        <button onClick={this.handleSubmitMeer} className={styles.buttonLight}>
          <p>Andere locaties</p>
          <p className={stylesUI.downArrow}></p>
        </button>
      </>
    );
  }
}

export default inject(`zaalStore`)(observer(ZaalLijst));
