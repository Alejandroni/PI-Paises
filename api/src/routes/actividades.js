const { Router } = require('express');
const { Countries, Activities, country_activity } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
  const activity = await Activities.findAll({
    include: Countries,
  });
   res.json(activity);
});


router.post("/", async (req, res) => {

  try {
    const { name, level, duration, season, paises } = req.body;
    console.log("si se hizo")
    let buscarDB = await Countries.findOne({
      where:{
          name:name
      },})
  if(buscarDB){
      throw 'Actividad Existente'
  }
  const guardarActividad= await Activities.findAll({where:{
      name:name,
  }})
  const nuevaActividad= await Activities.create({
      name, 
      level,
      duration,
      season,
      
  })
  nuevaActividad.addCountries(guardarActividad)
  res.json(nuevaActividad)
} 
catch(e){
  res.json(e)
}
/*
    const [createdActivity] = await Activities.findOrCreate({
  //  const createdActivity = await Activities.Create({
     where: { name: name },//verifica que no se repita el valor 
      defaults: {
      name,
      level: level,
      duration:duration,
      season: season,
      }
    });
    let countryArr = paises.split(",");
console.log(countryArr)
for (let i = 0; i<countryArr.length; i++) {
 let ContriApiBD = await Countries.findAll({
   where: { name: countryArr[i] },
 });
 await createdActivity.addCountries(ContriApiBD);
 }
return res.send("agregado");
} catch (err) {
return res.sendStatus(404);
}
*/
});
 
module.exports = router; 
