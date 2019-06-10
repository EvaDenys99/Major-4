class Voorstelling {
  constructor(
    id,
    titel,
    discription,
    duur,
    pauze,
    imageUser,
    imageAdmin,
    plaats,
    zaalId,
    aantalAkts
  ) {
    this.id = id;
    this.titel = titel;
    this.discription = discription;
    this.duur = duur;
    this.pauze = pauze;
    this.imageUser = imageUser;
    this.imageAdmin = imageAdmin;
    this.plaats = plaats;
    this.zaalId = zaalId;
    this.aantalAkts = aantalAkts;
  }
}

export default Voorstelling;
