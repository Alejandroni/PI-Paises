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


/* router.get('/',async (req,res,next)=>{ //retorna promesa que seran las actividades
//res.send("soy get q")
return Activity.findAll({//buscando la actividad en la BD
//Traer Actividades que tenga x Pais
include: {model: Country},
})  
.then((activi)=>{
res.send(activi) 
})
.catch((error) =>{
next(error)  //se va al middelware de app para mandarme el mensaje de error
})  //los errores del seque que necesito que agarre
})*/

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
}
/*
res.send("agregado");
 return res.status(200).json(createdActivity);
} catch (e) {
   res.send(e);

}
*/
});
    /*
    createdActivity.addCountries(paises)
    res.send(createdActivity)
  } catch (err) {
    res.send(err)
  }*/
//})
/*   try {
    await createdActivity.addCountries(paises)
    return res.send("agregado");
  } catch (err) {
    return res.sendStatus(404);
  }
}); */



// try {


/*

    router.post("/", async (req, res) => {
   
        try {
          const { name, level, duration, season, paises } = req.body;
          const[ newActivity, created] = await Activity.findOrCreate({
            where: { name: name },//verifica que no se repita el valor 
            defaults: {
              level: level,
              duration: duration, 
              season: season, 
             // selecCountry: selecCountry,
            }
          });
         
        let countryArr = paises.split(",");
        for (let i = 0; i<countryArr.length; i++) {
          let ContriApiBD = await Countries.findAll({
            where: { name: countryArr[i] },
          });
          await newActivity.addCountries(ContriApiBD);
        }
    
        res.status(200).json(newActivity);
      } catch (e) {
        res.send(e);
      }
    });*/
/*
//agregar actividades a la BD
router.post('/', async (req,res,next)=>{ //retorna promesa que seran las actividades
// try{
    const {id, name, level, duration, season, paises, selecCountry} = req.body //traer lo que tengo en el Activity
    const newActivity = await Activity.create({ //crear una nueva actividad 
                //id,
                name,
                level,
                duration,
                season,
                selecCountry
    })
    try {
        await newActivity.addCountries(paises)
        return res.send("agregado");
      } catch (err) {
        return res.sendStatus(404);
      }*/
//apenas tenga la actividad creada, la envio!
/*
router.post('/', async (req,res,next)=>{ //retorna promesa que seran las actividades
    // try{
         const {id, name, level, duration, season} = req.body //traer lo que tengo en el Activity
         const newActivity = await Activity.create({ //crear una nueva actividad 
                     //id,
                     name,
                     level,
                     duration,
                     season
         }).then(actividadCreada => {
             res.json(actividadCreada)
         }).catch(err => res.sendStatus(404))
     res.send(newActivity) //apenas tenga la actividad creada, la envio!
     */
/*    }
    catch{
next(error)
    }*/



module.exports = router; 
