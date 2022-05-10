const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
  
    id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
     primaryKey: true,
     },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.ENUM({
          values: ['1' ,'2','3','4','5']
      }),
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    season: {
        type: DataTypes.ENUM,
            values: ['Verano','Otoño','Invierno','Primavera']
        ,
      allowNull: false,
    },
  });
};

