const { Router } = require('express');
const { Countries, Activities, country_activity } = require("../db");
const axios = require("axios");  
const {Op} = require("sequelize")
const {v4: uuidv4} = require('uuid');
const router = Router();
//Traer paises
 //------------------------------------------------------------------Mostarme los paises 

router.get('/', (req,res,next) => {
  return Countries.findAll().then((el)=>{
    res.send(el)
  })
  .catch((err)=>{
    next(err)
  })
})//------------------------------------------------------------------
 //------------------------------------------------------------------Mostar Pais en especifico
router.get("/nombre", async (req, res) => {
  const name = req.query.name; 
    const country = await Countries.findAll({
      include: Activities,
      where: {name: {[Op.iLike]: "%"+name+"%"}}
  });
  return res.status(200).send(country);
});
//------------------------------------------------------------------
 //------------------------------------------------------------------Mostar Pais por ID
 router.get("/:idPais", async(req, res)=>{
  const {idPais} = req.params;
  const countryId = await Countries.findByPk(idPais.toUpperCase(), {include:Activities })
  countryId ? res.json(countryId) : res.sendStatus(404)
  //res.status(200).send(countryId)
})
 //------------------------------------------------------------------
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
router.get("/", async (req, res) => {
  const name = req.query.name; // tomo el parametro name por query
  const countries = await Country.findAll(name);
  res.status(200).send(countries);
});*/


/*
router.get('/', async (req,res) =>{
  const name = req.query.name
  let paisesT = await Country.findByName();
   
  if(name){ //                                    nombre que llega de todo          por query
    let nameCountry = await paisesT.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    nameCountry.length ? //encontramos algo acá?
    res.status(200).send(nameCountry) : 
    res.status(404).send("no existe pais")
    console.log("name")
  }else{
    res.status(200).send(paisesT)
  }
})
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