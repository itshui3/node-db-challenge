
exports.seed = function(knex) {
  return knex('todos').insert([
    {id: 1, timeframe: 'usually', task_id: 1, context_id: 1},
    {id: 2, timeframe: 'after bw', task_id: 2, context_id: 1}
  ]);

};
