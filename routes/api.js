/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

var expect = require('chai').expect;
var MongoClient = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 4,
  wtimeout: 2500
});

db.on('err', console.error.bind(console, 'connection error'));
db.once('openURI', () => console.log('connected'));

const project_controller = require('../controllers/project');

module.exports = app => {
  app
    .route('/api/issues/:project')

    .get((req, res) => {
      //const project = req.params.project;
    })

    .post(project_controller.project_create)
    .put((req, res) => {
      const project = req.params.project;
    })

    .delete((req, res) => {
      const project = req.params.project;
    });
};
