const { db } = require('../apiRouter');

module.exports = {
  findTodo,
  findTodoById, //findTodoById(id)
  addTodo, //addTodo(t)
  removeTodo, //removeTodo(id)
}

function findTodo() {
  return db('todos');
}

function findTodoById(id) {
  return db('todos').where({ id }).first();
}

function addTodo(t) {
  return db('todos').insert(t)
    .then( ids => {
      return findTodoById(ids[0]);
    });
}

function removeTodo(id) {
  return db('todos').where({ id }).del();
}