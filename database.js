require('dotenv').config()

const db_pwd = process.env.DB_PWD

// Set up connection to database with sql2
const Sequelize = require('sequelize')

const sequelize = new Sequelize('new_schema', 'root', db_pwd, {
  dialect : 'mysql',
  host : 'localhost'
})

module.exports = sequelize