const { Router } = require('express');
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");  
const {Op} = require("sequelize")
const {v4: uuidv4} = require('uuid');
const router = Router();
//Traer paises
router.get('/', (req,res,next) => { //mostarme los paises 
  
  /*
  return Country.findAll().then((paises)=>{
    res.send(paises)
  })
  .catch((err)=>{
    next(err)
  })*/
})
/*
router.get('/', async (req,res)=>{ //TRAIGO TODOS LOS PAISES!
const nombre = req.query.name
let paisesTotales = await traerPaises();
if(nombre){//-----------------------------------------el nombre del pais que viene en mayuscula
let nombrePaises = await paisesTotales.filter(el => el.nametoLowerCase().includes(nombre.toLowerCase())) //trame el pais con ese nombre especifico
nombrePaises.length ? //preguntar si encontre algo
res.status(200).send(nombrePaises) :
res.status(404).send("No esta el pais")
}else{ //otro caso .. si no hay query
res.status(200).send(paisesTotales)
}
})
*/
/*
router.get('/:idPais', async(req,res)=>{ //un pais en particular
    const { idPais } = req.params;
    if (!idPais) {
      return res.send("No hay id");
    }
  
    if (typeof idPais === "string" && idPais.length === 3) {
      let countryId = await Country.findAll({
        include: Activity,
      });
      let countriesId = await countryId.filter((el) =>
        el.id.toLowerCase().includes(idPais.toLowerCase())
      );
      countriesId.length
        ? res.status(200).send(countriesId)
        : res.status(404).send("Pais no encontrado");
    } else res.send("mal id");
  });
*/
/*
router.get('/paises/:idPais', async(req,res)=>{ //un pais en particular
    const {idPais} =req.params //traigo el pais por params
    const paisId = await Country.findByPk(idPais, {include: Activity}) //
    res.json(paisId)
})
router.get("/:idPais", async (req, res) => {
    const { idPais } = req.params;
    if (!idPais) {
      return res.send("No hay id");
    }
  
    if (typeof idPais === "string" && idPais.length === 3) {
      let countryId = await Country.findAll({
        include: Activity,
      });
      let countriesId = await countryId.filter((el) =>
        el.id.toLowerCase().includes(idPais.toLowerCase())
      );
      countriesId.length
        ? res.status(200).send(countriesId)
        : res.status(404).send("Pais no encontrado");
    } else res.send("mal id");
  });*/
/*
const name = req.query.name
let paises = await Country.findAll()
.then((paises)=>{
    res.send(paises) 
})*/

/*
-------------
res.send("soy get")
*/

module.exports = router; 