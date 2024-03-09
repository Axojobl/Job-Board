const db = require('../models/jobModels');

const jobController = {};

jobController.getOneJob = (req, res, next) => {
  const { id } = req.params;
    const query = `
        SELECT *
        FROM listings
        WHERE id = ${id}
        `
};

// 
// array of objects
// each object will have category and array of job listings 

jobController.getAllJobs = (req, res, next) => {
  const query = `
    SELECT *
    FROM listings
    INNER JOIN 
  `
};

jobController.createJob = (req,res,next) => {

};

jobController.deleteJob = (req, res, next) => {
    
}

jobController.updateJob = (req, res, next) => {
  
}

module.exports = jobController