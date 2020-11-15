const express = require("express");
const mongoose = require("mongoose");

const app = express();

const keys = require("./config/keys");

process.env.NODE_ENV = "development";

const { PORT, NODE_ENV } = process.env;
const port = PORT || 4000;
const dev = NODE_ENV === "development";

// mongoose.connect(
//   keys.mongoURI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },
//   (err, db) => {
//     if (err) throw err;`
//     else console.log(`Connected to database.`);
//   }
// );

app.use("/api", require("./routes/api"));

app.listen(port, (err) => {
  if (err) {
    return console.log("Error starting server:", res);
  }

  console.log(`Listening on ${port}.`);
});
