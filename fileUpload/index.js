const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();
const PORT = 5050;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded());
app.use(
  "/upload",
  upload.fields([{ name: "coverImage" }, { name: "profileImage" }]),
  (req, res) => {
    return res.redirect("/");
  }
);

app.get("/", (req, res) => {
  return res.render("homepage");
});

app.listen(PORT, () => console.log(`server running at PORT ${PORT}`));
