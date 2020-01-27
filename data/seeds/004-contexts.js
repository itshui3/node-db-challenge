
exports.seed = function(knex) {
  return knex('contexts').insert([
    {id: 1, location: 'home'},
    {id: 2, location: 'work'},
    {id: 3, location: 'public workspaces'}
  ]);

};
