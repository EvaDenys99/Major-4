import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { decorate, observable } from "mobx";
import { Link } from "react-router-dom";
import Select from "react-select";
import emptyVoorstelling from "../../assets/user/emptyVoorstelling.png";

import macbethUser from "../../assets/user/macbeth.png";
import macbeth from "../../assets/admin/macbeth.png";
import demonsUser from "../../assets/user/demons.png";
import demons from "../../assets/admin/demons.png";
import bachUser from "../../assets/user/bach.png";
import bach from "../../assets/admin/bach.png";
class VoorstellingLijst extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      voorstellingen: [
        {
          id: 5,
          titel: `BACH STUDIOS`,
          discription: `testestestest`,
          duur: `2u`,
          pauze: `1xpauze`,
          imageUser: bachUser,
          imageAdmin: bach,
          plaats: `gent`,
          zaalId: 1,
          aantalAkts: 4
        },
        {
          id: 2,
          titel: `MIDDAGCONCERT: DEMONS, WITCHES AND MADNESS`,
          discription: `testestestest`,
          duur: `2u`,
          pauze: `1xpauze`,
          imageUser: demonsUser,
          imageAdmin: demons,
          plaats: `antwerpen`,
          zaalId: 2,
          aantalAkts: 3
        },
        {
          id: 1,
          titel: `MACBETH`,
          discription: `testestestest`,
          duur: `2u`,
          pauze: `1xpauze`,
          imageUser: macbethUser,
          imageAdmin: macbeth,
          plaats: `antwerpen`,
          zaalId: 2,
          aantalAkts: 2
        }
      ]
    };
  }

  render() {
    const { voorstellingStore } = this.props;
    const { voorstellingen } = this.state;

    const showVoorstelling = (voorstelling, index) => {
      return (
        <li key={index}>
          <Link
            key={voorstelling.id}
            to={`admin/voorstelling/${voorstelling.id}`}
          >
            <div>
              <img
                src={voorstelling.imageAdmin}
                alt="een foto"
                width="382"
                height="270"
              />
              <h3>{voorstelling.titel}</h3>
            </div>
          </Link>
        </li>
      );
    };

    const handleSelection = e => {
      const gefilterdeVoorstellingen = [];
      // console.log(e.value);
      const voorstellinges = voorstellingStore.findAllesByPlaats(e.value);
      if (voorstellingen.length > 0) {
        // als er eerdere voorstellingen in de array zitten moeten die er eerst uit
        voorstellingen.length = 0;
        voorstellinges.map(voorstelling =>
          gefilterdeVoorstellingen.push(voorstelling)
        );
        console.log(voorstellingen);
      } else {
        voorstellinges.map(voorstelling =>
          gefilterdeVoorstellingen.push(voorstelling)
        );
        console.log(voorstellingen);
      }

      this.setState({ voorstellingen: gefilterdeVoorstellingen });
    };

    const options = [
      { label: `HOOFD ZALEN`, isDisabled: true },
      { label: `Antwerpen`, value: `antwerpen` },
      { label: `Gent`, value: `gent` },
      { label: `'t Eilandje`, value: `eilandje` },
      { label: `BIJ ZALEN`, isDisabled: true },
      { label: `AMUZ`, value: `AMUZ` },
      { label: `De Bijloke`, value: `De Bijloke` },
      { label: `Geuzenhuis`, value: `Geuzenhuis` },
      { label: `St-Pieterskerk`, value: `St-Pieterskerk` },
      { label: `St-Pauluskerk`, value: `St-Pauluskerk` },
      { label: `Vooruit`, value: `Vooruit` },
      { label: `Cinema Zuid`, value: `Cinema Zuid` },
      { label: `De Singel`, value: `De Singel` },
      { label: `K. Elizabethzaal`, value: `K. Elizabethzaal` },
      { label: `St-Carolus`, value: `St-Carolus` },
      { label: `Schouwburg A.`, value: `Schouwburg A.` },
      { label: `Zebrastraat`, value: `Zebrastraat` }
    ];

    return (
      <>
        <div>
          <Select
            onChange={handleSelection}
            options={options}
            placeholder="--- Kies uw zaal ---"
          />
        </div>
        <ul>
          {voorstellingen.length > 0 ? (
            voorstellingen.map((voorstelling, index) =>
              showVoorstelling(voorstelling, index)
            )
          ) : (
            <div>
              <div>Geen voorstellingen</div>
              <img src={emptyVoorstelling} alt="titel" />
            </div>
          )}
        </ul>
      </>
    );
  }
}

decorate(VoorstellingLijst, {
  voorstellingen: observable
});

export default inject(`voorstellingStore`)(observer(VoorstellingLijst));
