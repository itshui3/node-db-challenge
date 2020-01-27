const knex = require('knex');
const db = knex(require('../../knexfile').development);

module.exports = {
  findBorrows,
  findBorrowById, //findBorrowById(id)
  addBorrow, //addBorrow(b)
  removeBorrow, //removeBorrow(id)

  findResourcesByProjectId, //findResourcesByProjectId(projectId)
}

function findBorrows() {
  return db('borrows');
}

function findBorrowById(id) {
  return db('borrows').where({ id }).first();
}

function addBorrow(b) {
  return db('borrows').insert(b)
    .then( ids => {
      return findBorrowById(ids[0]);
    });
}

function removeBorrow(id) {
  return db('borrows').where({ id }).del();
}

function findResourcesByProjectId(projectId) {
  return db.select('*').from('borrows as b')
    .where({ project_id: projectId })
    .join('resources as r', 'b.resource_id', 'r.id')
}