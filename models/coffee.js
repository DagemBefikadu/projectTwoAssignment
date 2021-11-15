'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coffee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.coffee.belongsToMany(models.user, {through: 'userCoffee'})

    }
  };
  coffee.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    process: DataTypes.TEXT,
    origin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'coffee',
  });
  return coffee;
};