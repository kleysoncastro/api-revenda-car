require("dotenv").config()

console.log(process.env.POSTGRES_DB)
module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": "5432",
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB
 }