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
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const axios = require ('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  const apiURL = await axios.get('https://restcountries.com/v3/all');
  let apiInfo = apiURL.data.map((el) => {
    return{
      id: el.cca3,
      name: el.name.common,
      flag: el.flags[1],
      continent: el.continents[0],
      capital: el.capital ? el.capital[0] : "No tengo Capital",
      subregion: el.subregion ? el.subregion: "No tengo subregion",
      area: el.area,
      population: el.population,
    };
  });
  await Country.bulkCreate(apiInfo);
  server.listen(3001, () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console
  });
});
