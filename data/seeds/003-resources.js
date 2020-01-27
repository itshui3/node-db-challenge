
exports.seed = function(knex) {
  return knex('resources').insert([
    {id: 1, name: 'time', description: 'having no life helps'},
    {id: 2, name: 'family', description: 'get that support, the world isn\'t a friendly place brah'},
    {id: 3, name: 'being a shit person', description: 'allows for better strats'}
  ]);

};
