const Notificatie = require("../models/notificatie.model.js");

exports.create = (req, res) => {
  if (!req.body.tekst) {
    return res.status(500).send({ err: "tekst can not be empty" });
  }

  const notificatie = new Notificatie({
    tekst: req.body.tekst,
    AktId: req.body.AktId,
    AktVoorstellingZaal: req.body.AktVoorstellingZaal
  });

  notificatie
    .save()
    .then(notificatie => res.send(notificatie))
    .catch(err => {
      res.status(500).send({ error: err.notificatie || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const notificaties = await Notificatie.find();
    res.send(notificaties);
  } catch (err) {
    res.status(500).send({ err: err.notificatie || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const notificatie = await Notificatie.findOne({
      _id: req.params.notificatieId
    });
    if (notificatie) {
      res.send(notificatie);
    } else {
      res.status(404).send("No notification found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.tekst) {
    return res.status(400).send("tekst mag niet leeg zijn");
  }

  try {
    const notificatie = await Notificatie.findOneAndUpdate(
      {
        _id: req.params.notificatieId
      },
      {
        tekst: req.body.tekst,
        AktId: req.body.AktId,
        AktVoorstellingZaal: req.body.AktVoorstellingZaal
      },
      {
        new: true
      }
    );

    if (!notificatie) {
      return res.status(404).send("No notificationn found");
    }
    res.send(notificatie);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const notificatie = await Notificatie.findOneAndRemove({
      _id: req.params.notificatieId
    });
    if (!notificatie) {
      return res.status(404).send("No notification found");
    }
    res.send(notificatie);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
