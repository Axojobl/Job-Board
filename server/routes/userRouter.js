const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/login', (req, res) =>{
  // load structure of login page

});

userRouter.post('/login',userController.verifyUser, (req,res) => {
  // post request for logging in 
});

userRouter.get('/register', (req, res) =>{
  // load structure of register page

});

userRouter.post('/register',userController.createUser, (req,res) => {
  // post request for registering 
  
});



module.exports = userRouter;