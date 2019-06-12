import React from "react";
import ProgressBar from "./Progressbar";
import { Link } from "react-router-dom";

import styles from "./Voorstelling.module.css";
import stylesUI from "./../../styles/uiControls.module.css";
import stylesLayout from "./../../styles/layout.module.css";
import stylesTypo from "./../../styles/typo.module.css";

import duur from "./../../assets/user/duur.png";
import pauze from "./../../assets/user/pauze.png";

const Voorstelling = ({ voorstelling }) => {
  return (
    <>
      <img
        src={voorstelling.imageUserGroot}
        alt="foto"
        className={styles.foto}
        width="375"
        height="275"
      />
      <div className={styles.header}>
        <div>
          <Link to="/" className={stylesUI.back} />
        </div>
        <p>{voorstelling.plaats}</p>
      </div>
      <div className={styles.container}>
        <h1 className={styles.titel}>{voorstelling.titel}</h1>
        <ProgressBar voorstelling={voorstelling} />
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <img src={duur} alt="" width="27" height="27" />
            <div className={stylesLayout.line}></div>
            <p className={stylesTypo.userParagraphs}>{voorstelling.duur}</p>
          </div>
          <div className={styles.info}>
            <img src={pauze} alt="" width="13" height="20" />
            <div className={stylesLayout.line}></div>
            <p className={stylesTypo.userParagraphs}>{voorstelling.pauze}</p>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.descriptionBoven}></p>
          <p className={styles.description}>{voorstelling.discription}</p>
          <p className={styles.descriptionOnder}></p>
        </div>
        <div className={styles.checkbox}>
          <p htmlFor="checkbox" className={stylesTypo.userParagraphs}>
            Ontvang tips
          </p>
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Voorstelling;
