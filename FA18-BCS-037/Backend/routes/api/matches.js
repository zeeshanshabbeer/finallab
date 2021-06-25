const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Match } = require("../../models/match");
//get products

router.get("/", async (req, res) => {
  console.log(req.user);
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let matches = await Match.find().skip(skipRecords).limit(perPage);
  let total = await Match.countDocuments();
  return res.send({ total, matches });
});


router.get("/:id", async (req, res) => {
  try {
    let match = await Match.findById(req.params.id);
    if (!match)
      return res.status(400).send("Match With given TEAM ID is not");
    return res.send(match); 
  } catch (err) {
    return res.status(400).send("Invalid ID");
  }
});
//update a record

router.put("/:id", async (req, res) => {
  let match = await Match.findById(req.params.id);
  match.name = req.body.name;
  match.tagline = req.body.tagline;
  match.image_url = req.body.image_url;
  match.logo = req.body.logo;
  match.date = req.body.date;
  match.teama = req.body.teama;
  match.teamb = req.body.teamb;
  match.city = req.body.city;

  await match.save();
  return res.send(match);
});

//update a record

router.delete("/:id",async (req, res) => {
  let match = await Match.findByIdAndDelete(req.params.id);
  return res.send(match);
});
//Insert a record

router.post("/", async (req, res) => {
  let match = new Match();
  match.name = req.body.name;
  match.tagline = req.body.tagline;
  match.image_url = req.body.image_url;
  match.date = req.body.date;
  match.teama = req.body.teama;
  match.teamb = req.body.teamb;
  match.city = req.body.city;
  await match.save();
  return res.send(match);
});
module.exports = router;
