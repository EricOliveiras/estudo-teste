const express = require('express');

const routes = express.Router();

const UserController = require('./controllers/User');

routes.post('/users', UserController.create);

module.exports = routes;