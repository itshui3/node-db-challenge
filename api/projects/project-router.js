const projectDb = require('./project-model');
const taskDb = require('../tasks/task-model');
const borrowDb = require('../borrows/borrow-model');
const router = require('express').Router();

router.get('/', (req, res) => {
  projectDb.findProjects()
    .then( resou => {
      const booFix = resou.map(proj => {
        proj.completed = !!proj.completed;
        return proj;
      })
      res.status(200).json({ message: `status 200: fetched projects`, resource: booFix })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not fetch projects` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  let tasks;
  let resources;

  taskDb.findTasksByProjectId(id)
    .then( resou => {
      tasks = resou;
      borrowDb.findResourcesByProjectId(id)
      .then( resou => {
        if(resou) {
          resources = resou;
          projectDb.findProjectById(id)
            .then( resou => {
              resou.completion = !!resou.completion;
              resou.tasks = tasks;
              resou.resources = resources;
              res.status(200).json({ message: `status 200: fetched project`, resource: resou })
            })
            .catch( err => {
              res.status(500).json({ message: `status 500: internal server error, could not fetch project` })
            });
        }
      })
      .catch( err => {
        console.log(err);
      })
      
    })
    .catch( err => {
      console.log(err);
    })

})

router.post('/', (req, res) => {
  projectDb.addProject(req.body)
    .then( resou => {
      resou.completion = !!resou.completion;
      res.status(201).json({ message: `status 201: added project`, resource: resou })
    })
    .catch( err => {
      res.status(500).json({ message: `status 500: internal server error, could not add project` })
    })
})

router.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found in projects` })
})

module.exports = router;