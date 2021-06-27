require('dotenv').config()

const db_pwd = process.env.DB_PWD

// Set up connection to database
const mysql = require('mysql2')

const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  database : 'new_schema',
  password : db_pwd
})

module.exports = pool.promise()