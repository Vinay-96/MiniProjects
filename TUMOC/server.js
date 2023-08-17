const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded(true))

app.listen(PORT, () => {
  console.log(`sever up http:localhost:${PORT}`);
});
