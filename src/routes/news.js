const express = require('express');
const route = express.Router();
const newsController = require('../app/controllers/NewsController');

// newsController.index
route.use('/:show', newsController.show);
route.use('/', newsController.index);

module.exports = route;
