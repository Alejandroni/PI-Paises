const { Router } = require("express");
const router = Router();
const { Country, Activity, country_activity } = require("../db.js");
const axios = require("axios");
const {Op} = require("sequelize")


router.get("/", async (req, res) => {
  const name = req.query.name;
  const countries = await Country.findAll({
    include: Activity,
  });
  if (name) {
    let countriesName = await countries.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    countriesName.length
      ? res.status(200).send(countriesName)
      : res.status(404).send("Pais no encontrado");
  } else {
    res.status(200).send(countries);
  }
});
/*
router.get("/nombre", async (req, res) => {
  const name = req.query.name; 
    const country = await Country.findAll({
      include: Activity,
      where: {name: {[Op.iLike]: "%"+name+"%"}}
  });
  return res.status(200).send(country);
});
*/

router.get("/:idPais", async(req, res)=>{
  const {idPais} = req.params;
  const countryId = await Country.findByPk(idPais.toUpperCase(), {include:Activity })
  countryId ? res.json(countryId) : res.sendStatus(404)
  //res.status(200).send(countryId)
})

module.exports = router;
