
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {

    })

    .createTable('tasks', table => {

    })

    .createTable('resources', table => {

    })

    .createTable('contexts', table => {

    })


    .createTable('borrows', table => {

    })

    .createTable('todos', table => {

    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('todos')
    .dropTableIfExists('borrows')
    .dropTableIfExists('contexts')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
