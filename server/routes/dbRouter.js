const express = require('express');

const jobController = require('../controllers/jobController');

const dbRouter = express.Router();

// get one job
dbRouter.get('/job/:id', jobController.getOneJob, (req, res) => {

})

// get all jobs
dbRouter.get('/jobs', jobController.getAllJobs, (req, res) => {
  
})

// post new job
dbRouter.post('/job', jobController.createJob, (req, res) => {
    
})

// patch job
dbRouter.patch('/job', jobController.updateJob, (req, res) => {

})

// delete job
dbRouter.delete('/job/:id', jobController.deleteJob, (req, res) => {
  
})



module.exports = dbRouter