const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
  /*
    id: {
      type: DataTypes.UUID, //
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, //me genera IDS
     },*/
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.ENUM({
          values: ['1' ,'2','3','4','5']
      }),
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    season: {
        type: DataTypes.ENUM,
            values: ['Verano','Otoño','Invierno','Primavera']
        ,
      allowNull: true,
    },
   
  });
};

