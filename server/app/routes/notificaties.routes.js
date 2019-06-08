module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/notificaties.controller.js");
  app.post("/api/notificaties", controller.create);
  app.get("/api/notificaties", controller.findAll);
  app.delete("/api/notificaties/:notificatieId", controller.delete);
};
