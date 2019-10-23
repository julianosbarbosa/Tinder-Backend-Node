const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

mongoose.connect(
  "mongodb+srv://goweek:goweek123@cluster0-uspv9.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(express.json());
app.use(require("./routes"));

server.listen(3333, () => {
  console.log("server started");
});
