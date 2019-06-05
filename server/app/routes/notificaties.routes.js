module.exports = app => {
  const { checkToken } = require("../middleware");
  const controller = require("../controllers/notificaties.controller.js");
  app.post("/api/notificaties", checkToken, controller.create);
  app.get("/api/notificaties", controller.findAll);
  app.delete("/api/notificaties/:notificatieId", checkToken, controller.delete);
};
