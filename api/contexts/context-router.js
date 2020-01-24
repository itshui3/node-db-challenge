const contextDb = require('./context-model');
const router = require('express').Router();

router.get('/', (req, res) => {
  contextDb.findContexts()
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched borrows`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch contexts` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  contextDb.findContextById(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched context`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch context` })
    })
})

router.post('/', (req, res) => {
  contextDb.addContext(req.body)
    .then( resou => {
      res.status(201).json({ message: `status 201: added context`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not add context` })
    })
})

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found in contexts` })
})

module.exports = router;