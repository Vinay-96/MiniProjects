const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4040;
const urlRoutes = require("./routes/url.routes");
const staticRoutes = require("./routes/staticRoutes.routes");
const dotenv = require("dotenv").config();
const connectDB = require("./connections/db");

connectDB();
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use("/url", urlRoutes);
app.use("/", staticRoutes);

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
