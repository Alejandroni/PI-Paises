const { Router } = require('express');
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");  

const router = Router();


router.get('/',async (req,res,next)=>{ //retorna promesa que seran las actividades
    //res.send("soy get q")
    return Activity.findAll({//buscando la actividad en la BD
//Traer Actividades is que tenga x Pais
include: Country,
    })  
    .then((activi)=>{
        res.send(activi) 
    })
    .catch((error) =>{
        next(error)  //se va al middelware de app para mandarme el mensaje de error
    })  //los errores del seque que necesito que agarre
    })
    //agregar actividades a la BD
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
/*    }
    catch{
next(error)
    }*/

        })
        
module.exports = router; 