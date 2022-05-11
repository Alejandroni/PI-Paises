const { Router } = require('express');
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");  

const router = Router();
/*
const getApiInfo = async ()=>{
    const apiUrl = await axios.get()
}*/
router.get('/',(req,res,next)=>{
res.send("soy get a")
})

router.post('/',(req,res,next)=>{
        const {id, name ,level, duration, season} = req.body;
   const nuevaActividad =  Activity.create({
    id,
    name,
    level,
    duration,
    season
    })
    res.send(nuevaActividad)
})
    router.put('/',(req,res,next)=>{
        res.send("soy put a ")
        })
        router.delete('/',(req,res,next)=>{ 
            res.send("soy delete a")
            })    
module.exports = router; 