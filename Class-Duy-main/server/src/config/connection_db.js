const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("opgs", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connection_db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Đã kết nối với Database");
  } catch (error) {
    console.error("Kết nối DB thất bại", error);
  }
};

connection_db();

const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "opgs",
});
