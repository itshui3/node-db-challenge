
exports.seed = function(knex) {
  return knex('borrows').insert([
    {id: 1, purpose: 'to grind', quantity: 'all the time', project_id: 1, resource_id: 1},
    {id: 2, purpose: 'support', quantity: 'a roof over my head and the stability to work on what matters', project_id: 1, resource_id: 2},
    {id: 3, purpose: 'janks', quantity: 'when needed', project_id: 1, resource_id: 3}
  ]);

};
