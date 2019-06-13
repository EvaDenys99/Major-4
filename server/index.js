const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log("db connected"))
  .catch(e => {
    console.log("Error, exiting", e);
    process.exit();
  });

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build/")));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/auth.routes.js")(app);
require("./app/routes/notificaties.routes.js")(app);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/", "index.html"));
});

/* app.listen(PORT, () => {
  console.log(`Server luistert op poort ${PORT}`);
}); */

const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(PORT, () => console.log("Server op " + PORT));

io.on("connection", function(socket) {
  console.log("connected");
  //moet erin anders werkt niet
  socket.on("chat message", function(msg) {
    io.emit("chat message", msg);
  });
  socket.on("start", function(msg) {
    io.emit("start", msg);
  });
  socket.on("reset", function(msg) {
    io.emit("reset", msg);
  });
  /* … */
});
