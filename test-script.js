argument = process.argv[2]

const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  client.query(`SELECT * FROM famous_people WHERE first_name = '${argument}' OR last_name = '${argument}'`)
  .then(result => {
    console.log(result.rows[0]);
    client.end();
  })
  .catch(e => console.error(e.stack));
});