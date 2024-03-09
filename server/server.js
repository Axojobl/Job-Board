const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// import Routers
const userRouter = require('./routes/userRouter');
const jobRouter = require('./routes/jobRouter');
const categoryRouter = require('./routes/categoryRouter');
const dbRouter = require('./routes/dbRouter');


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// handle requests for static file
app.use(express.static(path.resolve(__dirname,'../client')))


// GET -> ourapp.com
// just loads HTML CSS JS


// user router (login/register)
app.use('/user', userRouter);

// database router
app.use('/api',dbRouter);


// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);


/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});