require("dotenv").config();
const harperive = require("harperive");

// const DB_CONFIG = {
//   harperHost: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   schema: process.env.DB_SCHEMA,
// };

const DB_CONFIG = "mongodb+srv://iamfuzail:Fuzail23117118@cluster0.xgkt3se.mongodb.net/?retryWrites=true&w=majority"

const Client = harperive.Client;
const db = new Client(DB_CONFIG);

module.exports = db;