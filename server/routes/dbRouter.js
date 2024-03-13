const express = require('express');

const jobController = require('../controllers/jobController');
const categoryController = require('../controllers/categoryController');

const dbRouter = express.Router();

// job routes

// get one job
dbRouter.get('/job/:id', jobController.getOneJob, (req, res) => {
  const { getOneJob } = res.locals;
  console.log('Back in the final function of jobController.getOneJob');
  res.status(200).send(getOneJob);
});

// get all jobs
dbRouter.get('/job', jobController.getAllJobs, (req, res) => {
  const { getAllJobs } = res.locals;
  res.status(200).send(getAllJobs);
});

// post new job
dbRouter.post('/job', jobController.createJob, (req, res) => {
  res.status(200).json('Job Succesfully Created');
});

// patch job
dbRouter.patch('/job/:id', jobController.updateJob, (req, res) => {
  res.status(200).send('Job Succesfully Updated');
});

// delete job
dbRouter.delete('/job/:id', jobController.deleteJob, (req, res) => {
  res.status(200).send('Job Succesfully Deleted');
});

// category routes

// get one category
dbRouter.get('/category/:id', categoryController.getOneCategory, (req, res) => {
  const { getOneCategory } = res.locals;
  res.status(200).send(getOneCategory);
});

// get all categories
dbRouter.get('/category', categoryController.getAllCategory, (req, res) => {
  const { getAllCategory } = res.locals;
  res.status(200).send(getAllCategory);
});

// create category
dbRouter.post('/category', categoryController.createCategory, (req, res) => {
  res.status(200).json({ _id: res.locals.category_id });
});

// update category
dbRouter.patch(
  '/category/:id',
  categoryController.updateCategory,
  (req, res) => {
    res.status(200).send('Category Succesfully Updated');
  }
);

// delete category
dbRouter.delete(
  '/category/:id',
  categoryController.deleteCategory,
  (req, res) => {
    res.status(200).send('Category Succesfully Deleted');
  }
);

module.exports = dbRouter;
