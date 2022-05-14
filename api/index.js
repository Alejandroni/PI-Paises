//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');
const axios = require("axios");  



// Syncing all the models at once.
conn.sync({ force: true }).then(async() => {
  //Traer paises
//const getApiInfo = async () => { //traer la info
const urlApi = await axios.get('https://restcountries.com/v3/all'); //la url..obvio
let apiInfo = urlApi.data.map((el) => { //mapea los datos de la info porque llega muy feo y que llegue lo que necesito
return{
  id: el.cca3,
  name: el.name.official,
  img: el.flags[1],
  continent: el.continents[0],
  capital: el.capital ? el.capital[0] : "No tengo Capital",
  subregion: el.subregion ? el.subregion: "No tengo subregion",
  area: el.area,
  population: el.population,
};

});
await Country.bulkCreate(apiInfo);
//return apiInfo; //devolver lo que quiero que me traiga
//};
/*
const getDBInfo = async ()=>{
  return await 
}*/

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
