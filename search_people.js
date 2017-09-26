let argument = process.argv[2];

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

knex.select().from('famous_people')
.where('first_name', argument).orWhere('last_name', argument)
.then(function(people) {
  console.log(people);
});

knex.destroy();
