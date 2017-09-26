argument = process.argv.slice(2);

const settings = require("./settings"); // settings.json

const knex = require('knex')({
  client: 'postgresql',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  },
  useNullAsDefault: true
});

knex('famous_people')
.returning('*')
.insert({first_name: argument[0], last_name: argument[1], birthdate: argument[2]})
.then(function(person) {
  console.log(person);
});

knex.destroy();
