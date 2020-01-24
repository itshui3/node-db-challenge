const taskDb = require('./task-model');
const router = require('express').Router();

router.get('/', (req, res) => {
  taskDb.findTasks()
    .then( resou => {
      const booFix = resou.map(task => {
        task.completed = !!task.completed;
        return proj;
      })
      res.status(200).json({ message: `status 200: fetched tasks`, resource: booFix })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch tasks` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  taskDb.findTaskById(id)
    .then( resou => {
      resou.completion = !!resou.completion;
      res.status(200).json({ message: `status 200: fetched task`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch task` })
    })
})

router.post('/', (req, res) => {
  taskDb.addTask(req.body)
    .then( resou => {
      resou.completion = !!resou.completion;
      res.status(201).json({ message: `status 201: added task`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not add task` })
    })
})

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found in tasks` })
})

module.exports = router;