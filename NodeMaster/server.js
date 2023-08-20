const express = require("express");
const app = express();
const PORT = process.env.PORT || 4040 ;
const urlRoutes = require("./routes/url.routes");
const dotenv = require("dotenv").config()
const connectDB = require("./connections/db");

connectDB()
app.use(express.json())
app.use("/url", urlRoutes);

app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
