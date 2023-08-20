const mongoose = require("mongoose");

async function connectDB() {
  mongoose
    .connect(process.env.DB)
    .then((res) => {
      console.log(`connected to DB -> ${res.connection.host}`);
    })
    .catch((err) => {
      console.log(
        `Not connected to DB please connect to VPN or check DB config`
      );
    });
}

module.exports = connectDB;
