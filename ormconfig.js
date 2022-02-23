require("dotenv").config()

module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": "5432",
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "migrations": ["./src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
 }