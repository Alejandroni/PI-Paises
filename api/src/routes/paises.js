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


  
          
            
module.exports = router; 