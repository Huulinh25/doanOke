"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {

    static associate(models) {
      // define association here
      Class.belongsTo(models.Teacher, {foreignKey:'teacher_name', targetKey:'name', as:'teacherData'})
    }
  }
  Class.init(
    {
      class_name: DataTypes.STRING,
      status: DataTypes.STRING,
      total_students: DataTypes.INTEGER,
      teacher_name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Class",
    }
  );

  return Class;
};
