const { pool } = require("./db");

async function insertData() {
  const [name, genre] = process.argv.slice(2);
  console.log(name, genre);
}

insertData();