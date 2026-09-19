import mysql from 'mysql2/promise.js'

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password123456789",
  database: "librarydb"
})

export default pool;