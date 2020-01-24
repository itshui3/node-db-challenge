const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
  findProjects,
  findProjectById, // findProjectById(id)
  addProject, //addProject(p)
  removeProject, //removeProject(id)
}

function findProjects() {
  return db('projects');
}

function findProjectById(id) {
  return db('projects').where({ id }).first();
}

function addProject(p) {
  return db('projects').insert(p)
    .then( ids => {
      return findProjectById(ids[0]);
    });
}

function removeProject(id) {
  return db('projects').where({ id }).del();
}