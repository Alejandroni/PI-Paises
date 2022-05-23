const { Router } = require('express');
const { Countries, Activities, country_activity } = require("../db");
const axios = require("axios");

const router = Router();

router.get("/", async  (req, res) => {
  try {
    const activities = await Activities.findAll({
      attributes: [ "id", "name", "level", "duration", "season",  ],
      include: { model: Countries }
    })
    return res.json(activities).status(200)

  }catch (error) {
    next(error);
}
})
router.post("/", async (req, res) => {

  try {
    const { name, level, duration, season, paises } = req.body;
   const [createdActivity] = await Activities.findOrCreate({
  //  const createdActivity = await Activities.Create({
     where: { name: name },//verifica que no se repita el valor 
      defaults: {
      name,
      level: level,
      duration:duration,
      season: season,
     // paises: paises, //constante virtual

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
//await createdActivity.addCountries(paises)
return res.send("agregado");
} catch (err) {
return res.sendStatus(404);
}});
/*
router.post("/", async (req, res) => {
   
  try {
    const { name, level, duration, season, selecCountry, activitySelect } = req.body;
    const[ newActivity, created] = await Activities.findOrCreate({
      where: { name: name },//verifica que no se repita el valor 
      defaults: {
        level: level,
        duration: duration, 
        season: season, 
        //selecCountry: selecCountry,
      }
    });
    //console.log(newActivity)
  //let countryArr = selecCountry.split(", ");
  for (let i = 0; i<activitySelect.length; i++) {
    let ContriApiBD = await Countries.findAll({
      where: { id: activitySelect[i].trim() },
    });
    await newActivity.addCountries(ContriApiBD);
  }

  res.status(200).json(newActivity);
} catch (e) {
  res.send(e);
}

*/
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

 
module.exports = router; 
