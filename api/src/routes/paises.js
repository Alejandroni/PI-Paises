const { Router } = require("express");
const router = Router();
const { Country, Activity, country_activity } = require("../db.js");
const axios = require("axios");
const {Op} = require("sequelize")


/* router.get("/", async (req, res) => {
  const name = req.query.name; // tomo el parametro name por query
  const countries = await Country.findAll({
    // Hago una busqueda en mi BD incluyendo la actividad
    include: Activity,
    where: {name: {[Op.iLike]: "%"+name+"%"}}
  });
  res.status(200).send(countries);
   if (name) {
    // si tengo name, filtro los elementos
    let countriesName = await countries.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    countriesName.length // si hay elementos en el filtro los devuelvo
      ? res.status(200).send(countriesName)
      : res.status(404).send("Pais no encontrado");
  } else {
    res.status(200).send(countries); // en caso de no tener un name, envio todos los elementos de mi BD de countries.
  } 

});
}); */
/* router.get("/", async (req, res) => {
  const name = req.query.name; // tomo el parametro name por query
  const countries = await Country.findAll({
    // Hago una busqueda en mi BD incluyendo la actividad
    include: Activity,
  });
  if (name) {
    // si tengo name, filtro los elementos
    let countriesName = await countries.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    countriesName.length // si hay elementos en el filtro los devuelvo
      ? res.status(200).send(countriesName)
      : res.status(404).send("Pais no encontrado");
  } else {
    res.status(200).send(countries); // en caso de no tener un name, envio todos los elementos de mi BD de countries.
  }
}); */


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

router.get("/nombre", async (req, res) => {
  const name = req.query.name; 
    const country = await Countries.findAll({
      include: Activities,
      where: {name: {[Op.iLike]: "%"+name+"%"}}
  });
  return res.status(200).send(country);
});

router.get("/:idPais", async(req, res)=>{
  const {idPais} = req.params;
  const countryId = await Countries.findByPk(idPais.toUpperCase(), {include:Activity })
  countryId ? res.json(countryId) : res.sendStatus(404)
  //res.status(200).send(countryId)
})

module.exports = router;
