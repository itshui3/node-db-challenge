const knex = require('knex');
const db = knex(require('../knexfile').development);

const express = require('express');
const router = express.Router();

const borrowRoute = require('./borrows/borrow-router');
const contextRoute = require('./contexts/context-router');
const projectRoute = require('./projects/project-router');
const resourceRoute = require('./resources/resource-router');
const taskRoute = require('./tasks/task-router');
const todoRoute = require('./todos/todo-router');

router.use('/borrows', borrowRoute);
router.use('/contexts', contextRoute);
router.use('/projects', projectRoute);
router.use('/resources', resourceRoute);
router.use('/tasks', taskRoute);
router.use('/todos', todoRoute);

const routesInfo = `
  <h1>API</h1>

  <div>
    <h2>Projects</h2>
  </div>

  <div>
    <h2>Resources</h2>
  </div>

  <div>
   <h2>Tasks</h2>
  </div>

  <div>
   <h2>Contexts</h2>
  </div>
`
router.get('/', (req, res) => {
  res.status(200).send(routesInfo);
})

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found` })
})

module.exports = {
  db,
  router
}