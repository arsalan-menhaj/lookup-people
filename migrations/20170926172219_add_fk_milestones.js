exports.up = function(knex, Promise) {
  return knex.schema.table('milestones', function(t) {
    t.integer('famous_person_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', function(t) {
    t.drop('famous_person_id');
  });
};
