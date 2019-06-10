import React from "react";

import styles from "./MeerVoorstellingen.module.css";

const MeerVoorstellingen = ({ voorstellingen }) => {
  return (
    <>
      <ul className={styles.container}>
        {console.log(voorstellingen)}
        {voorstellingen.slice(1).map(voorstelling => {
          return (
            <li key={voorstelling.id} className={styles.item}>
              <img
                src={voorstelling.imageUser}
                alt={voorstelling.titel}
                width="282"
                height="170"
              />
              <p>
                <span>{voorstelling.titel}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MeerVoorstellingen;
