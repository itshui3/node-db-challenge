const todoDb = require('./todo-model');
const router = require('express').Router();

router.get('/', (req, res) => {
  todoDb.findTodos()
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched todos`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch todos` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  todoDb.findTodoById(id)
    .then( resou => {
      res.status(200).json({ message: `status 200: fetched todo`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch todo` })
    })
})

router.post('/', (req, res) => {
  todoDb.addTodo(req.body)
    .then( resou => {
      res.status(201).json({ message: `status 201: added todo`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not add todo` })
    })
})

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found in todos` })
})

module.exports = router;