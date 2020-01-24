const knex = require('knex');
const db = knex(require('../knexfile'));

const express = require('express');
const router = express.Router();

// 8:22 AM: still needs route requires && calls

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