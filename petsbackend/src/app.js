const express = require("express");
const cors = require("cors")
const morgan = require("morgan");

app = express();

app.set("PORT", process.env.PORT || 4000);
app.use(morgan("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/pet", require("./routes/pet"));
app.use("/appointment", require("./routes/appointment"));

module.exports = app;