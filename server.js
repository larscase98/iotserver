const express = require("express");
const mongoose = require("mongoose");

const app = express();

const keys = require("./config/keys");

const dev = process.env.NODE_ENV === "development";

const port = 42069;

mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err, db) => {
    if (err) throw err;
    else console.log(`Connected to database.`);
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/api"));

app.listen(port, (err) => {
  if (err) {
    return console.log("Error starting server:", res);
  }

  console.log(`Listening on ${port}`);
});
