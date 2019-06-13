import React, { Component } from "react";

import switchImg from "../../assets/user/switch.png";

import styles from "./VertaalForm.module.css";
import stylesUI from "./../../styles/uiControls.module.css";
import stylesTypo from "./../../styles/typo.module.css";
import stylesLayout from "./../../styles/layout.module.css";

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
        <div className={styles.talen}>
          <select name="" id="" className={stylesTypo.userParagraphs}>
            <option value="Nederlands" className={stylesTypo.userParagraphs}>
              Nederlands
            </option>
          </select>
          <img src={switchImg} alt="switch" width="50" height="50" />
          <select name="" id="" className={stylesTypo.userParagraphs}>
            <option value="Engels" className={stylesTypo.userParagraphs}>
              Engels
            </option>
          </select>
        </div>
        <div className={stylesLayout.lijn}></div>
        <div>
          <p className={styles.vertalen}>Ik ken geen andere taal</p>
          <p className={styles.vertaald}>I don't know any other languages</p>
        </div>
        <div className={styles.buttonRechts}>
          <button onClick={this.handleSubmitReset} className={stylesUI.button}>
            Opnieuw
          </button>
        </div>
      </>
    ) : (
      <>
        <div className={styles.talen}>
          <select name="" id="" className={stylesTypo.userParagraphs}>
            <option value="Nederlands" className={stylesTypo.userParagraphs}>
              Nederlands
            </option>
          </select>
          <img src={switchImg} alt="switch" width="50" height="50" />
          <select name="" id="" className={stylesTypo.userParagraphs}>
            <option value="Engels" className={stylesTypo.userParagraphs}>
              Engels
            </option>
          </select>
        </div>
        <div className={stylesLayout.lijn}></div>
        <div>
          <input
            type="text"
            defaultValue="Ik ken geen andere taal"
            className={styles.formInput}
          />
        </div>
        <div className={styles.buttonRechts}>
          <button
            onClick={this.handleSubmitVertaal}
            className={stylesUI.button}
          >
            Vertaal
          </button>
        </div>
      </>
    );
  }
}

export default VertaalForm;
