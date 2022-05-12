const { Router } = require('express');
const { Country, Activity, country_activity } = require("../db");
const axios = require("axios");  

const router = Router();


router.get('/',async (req,res,next)=>{
    res.send("soy get q")
  
    })
    
module.exports = router; 