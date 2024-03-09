const express = require('express');

const jobController = require('../controllers/jobController');

const dbRouter = express.Router();

// get one job
dbRouter.get('/job/:id', jobController.getOneJob, (req, res) => {
  const { getOneJob } = res.locals
  res.status(200).send(getOneJob)
})

// get all jobs
dbRouter.get('/job', jobController.getAllJobs, (req, res) => {
    const { getAllJobs } = res.locals;
    res.status(200).send(getAllJobs);
})

// post new job
dbRouter.post('/job', jobController.createJob, (req, res) => {
    
    res.status(200).send('Succesfully Created')
})

// patch job
dbRouter.patch('/job/:id', jobController.updateJob, (req, res) => {
  res.status(200).send('Succesfully Updated')
})

// delete job
dbRouter.delete('/job/:id', jobController.deleteJob, (req, res) => {
  res.status(200).send('Succesfully Deleted')
})



// category routes?
// category get route
// category get all route
// category post route
// category patch route
// category delete route

module.exports = dbRouter