/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

var expect = require('chai').expect;
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

    .get(project_controller.project_getAllByProjectName)
    .post(project_controller.project_create)
    .put(project_controller.project_update)
    .delete(project_controller.project_delete);
};
