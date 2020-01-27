
exports.seed = function(knex) {

  return knex('projects').insert([
    {id: 1, name: 'get monees', completed: false, description: 'nobodys gonna save you brah, you need that monees'},
    {id: 2, name: 'get cats', completed: true, description: 'get dem fluffy cats'}
  ]);

};
