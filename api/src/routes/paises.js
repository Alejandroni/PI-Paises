const { Router } = require('express');
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");  

const router = Router();
/*
const getApiInfo = async ()=>{
    const apiUrl = await axios.get()
}*/
router.get('/',async (req,res,next)=>{
//res.send("soy get q")
return Country.findAll()
.then((paises)=>{
    res.send(paises)
})
})

router.post('/',  (req,res,next)=>{ //agregar
    res.send("soy post q")
   // const {id, name ,img, continent, capital} = req.body;
  //  const nuevoPais =  Country.create({

  })
 
    router.put('/',(req,res,next)=>{
        res.send("soy put q")
        })
        router.delete('/',(req,res,next)=>{
            res.send("soy delete q")
            })    
            
module.exports = router; 