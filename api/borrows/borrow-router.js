const borrowDb = require('./borrow-model');
const router = require('express').Router();

router.get('/', (req, res) => {
  borrowDb.findBorrows()
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched borrows`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch borrows` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  borrowDb.findBorrowById(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched borrow`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch borrow` })
    })
})

router.post('/', (req, res) => {
  borrowDb.addBorrow(req.body)
    .then( resou => {
      res.status(201).json({ message: `status 201: added borrow`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not add borrow` })
    })
})

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found in borrows` })
})

module.exports = router;