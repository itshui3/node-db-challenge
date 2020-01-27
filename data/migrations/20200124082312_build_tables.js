
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments().unsigned();
      table.string('name', 128).notNullable();
      table.text('description');
      table.boolean('completed').notNullable().defaultTo(0);
    })

    .createTable('tasks', table => {
      table.increments().unsigned();
      table.text('description').notNullable();
      table.text('notes');
      table.boolean('completed').notNullable().defaultTo(0);
      //fk
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable('resources', table => {
      table.increments().unsigned();
      table.string('name', 128).notNullable().unique();
      table.text('description');
    })

    .createTable('contexts', table => {
      table.increments().unsigned();
      table.string('location', 128).notNullable();
    })

    //ref tables
    .createTable('borrows', table => {
      table.increments().unsigned();
      table.text('purpose');
      table.text('quantity');
      //fk
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })

    .createTable('todos', table => {
      table.increments().unsigned();
      table.text('timeframe');
      //fk
      table.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer('context_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contexts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
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
