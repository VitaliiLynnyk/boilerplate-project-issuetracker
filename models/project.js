const mongoose = require('mongoose');

const projectModel = mongoose.Schema({
  project_name: {
    type: String,
    require: true
  },
  issue_title: {
    type: String,
    require: true
  },
  issue_text: {
    type: String,
    require: true
  },
  created_by: {
    type: String,
    require: true
  },
  created_on: {
    type: Date,
    default: Date.now
  },
  updated_on: {
    type: Date,
    default: null
  },
  assigned_to: {
    type: String,
    default: ''
  },
  status_text: {
    type: String,
    default: 'open'
  },
  open: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Project', projectModel);
