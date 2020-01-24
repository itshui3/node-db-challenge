const knex = require('knex');
const db = knex(require('../knexfile'));

const express = require('express');
const router = express.Router();

module.exports = {
  db,
  router
}