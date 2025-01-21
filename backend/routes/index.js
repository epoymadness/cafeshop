const express = require('express');
const UserController = require('../controllers/UserController');


const userRoutes = () => {
  const router = express.Router();

  router.get('/product', UserController.getProduct);
  router.post('/newuser', UserController.postUser);
  router.post('/order', UserController.customerOrder);


  return router;
} 



module.exports = userRoutes;





