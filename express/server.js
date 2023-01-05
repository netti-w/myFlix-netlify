const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const { check, validationResult } = require('express-validator');

const mongoose = require('mongoose'); // require (import) mongoose package
const Models = require('../models.js'); //require (import) 'custom' models.js

// Connecting LOCAL myFlixDB via Mongoose to perform CRUD operations
// mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Connecting EXTERNAL (MongoDB Atlas) myFlixDB via Mongoose to perform CRUD operations
// mongoose.connect(process.env.CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
const { API_ROOT } = require('../config');

// // Body parser middleware passing data as JSON
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // CORS - allowing requests from other specified origins (here: default all origins)
// const cors = require('cors');
// app.use(cors());

// // Passport authentication middleware
// let auth = require('../auth')(app);
// const passport = require('passport');
// require('../passport');

// // Morgan middleware logging requests
// app.use(morgan('common'));

// function serving all requests of static file (here:"documenation.html") from public folder
// app.use(express.static('public'));


const API_ROUTER = express.Router();

API_ROUTER
	.get('/movies', (req, res) => {
		res.send('movies get hit')
	})
	.post('/movies', (req, res) => {
		res.send('movies post hit')
	})
	.put('/movies', (req, res) => {
		res.send('movies put hit')
	})
	.delete('/movies', (req, res) => {
		res.send('movies delete hit')
	})
	.get('/users', (req, res) => {
		res.send('user get hit')
	})
	.post('/users', (req, res) => {
		res.send('user post hit')
	})
	.put('/users', (req, res) => {
		res.send('user put hit')
	})
	.delete('/users', (req, res) => {
		res.send('user delete hit')
	})

app.use(API_ROOT, API_ROUTER);

module.exports = app;
module.exports.handler = serverless(app);
