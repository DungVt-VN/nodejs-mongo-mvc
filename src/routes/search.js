const express = require('express');
const route = express.Router();
const searchController = require('../app/controllers/SearchController');

route.get('/', searchController.index);

module.exports = route;
