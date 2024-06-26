const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4040;
const urlRoutes = require("./routes/url.routes");
const staticRoutes = require("./routes/staticRoutes.routes");
const userRoutes = require("./routes/user.routes");
const dotenv = require("dotenv").config();
const connectDB = require("./connections/db");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");
const cookieParser = require("cookie-parser");

connectDB();
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(checkForAuthentication);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoutes);
app.use("/", staticRoutes);
app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
