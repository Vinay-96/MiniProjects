const URLModel = require("../models/url.model");
const { nanoid } = require("nanoid");

async function generateNewURL(req, res) {
  if (!req.body.url) {
    return res.status(400).json({ message: "URL not defined" });
  }
  const shortId = nanoid(8);

  await URLModel.create({
    shortId: shortId,
    redirectUrl: req.body.url,
    vistHistory: [],
  });

  return res.render("home", { id: shortId });

  // return res.json({ message: shortId });
}

async function redirectToSite(req, res) {
  const searchShortId = req.params.shortId;

  const redirectTo = await URLModel.findOneAndUpdate(
    { shortId: searchShortId },
    {
      $push: {
        vistHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  ).lean();

  res.redirect(redirectTo.redirectUrl);
}

async function analyticsOfShortId(req, res) {
  const id = req.params.shortId;
  const analytics = await URLModel.findOne({ shortId: id }).lean();
  return res.json({
    message: `Analytics of Provided id ${id}`,
    results: {
      visitCount: analytics.vistHistory.length,
      vistHistory: analytics.vistHistory,
    },
  });
}

async function getAllShortIds(req, res) {
  const shortIds = await URLModel.find({}).lean();
  return res.render("home", { urls: shortIds });
}

module.exports = {
  generateNewURL,
  redirectToSite,
  analyticsOfShortId,
  getAllShortIds,
};
