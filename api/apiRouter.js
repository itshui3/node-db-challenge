const knex = require('knex');
const db = knex(require('../knexfile'));

const express = require('express');
const router = express.Router();

// 8:22 AM: still needs route requires && calls

const routesInfo = `
  <h1>API</h1>

  <div>
    Projects
  </div>

  <div>
    Resources
  </div>

  <div>
    Tasks
  </div>

  <div>
    Contexts
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