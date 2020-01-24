const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
  findTasks,
  findTaskById, //findTasksById(id)
  addTask, //addTask(t)
  removeTask, //removeTask(id)
}

function findTasks() {
  return db('tasks');
}

function findTaskById(id) {
  return db('tasks').where({ id }).first();
}

function addTask(t) {
  return db('tasks').insert(t)
    .then( ids => {
      return findTaskById(ids[0]);
    });
}

function removeTask(id) {
  return db('tasks').where({ id }).del();
}