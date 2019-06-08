const mongoose = require("mongoose");

const NotificatieSchema = mongoose.Schema(
  {
    tekst: String,
    AktId: String,
    AktVoorstellingZaal: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Notificatie", NotificatieSchema);
