const { Router } = require("express");
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const activity = await Activity.findAll({
    include: Country,
  });
  res.json(activity);
});


router.post("/", async (req, res) => {
  const { name, level, time, season, /* id */ paises } = req.body;
 
  const createdActivity = await Activity.create({
 
    name,
    level,
    time,
    season,
  });
  try {
    await createdActivity.addCountries(paises)
    return res.send("agregado");
  } catch (err) {
    return res.sendStatus(404);
  }
});

module.exports = router; 
