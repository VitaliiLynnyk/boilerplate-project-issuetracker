const { Project } = require('../models');

exports.project_getAllByProjectName = (req, res) => {
  const { project } = req.params;
  let updated = req.query;
  updated['project_name'] = project;

  Project.find(updated, (err, arr) => {
    if (err) res.send(err);

    res.json(arr);
  });
};

exports.project_create = (req, res) => {
  const { project } = req.params;
  const {
    issue_title,
    issue_text,
    created_by,
    assigned_to,
    status_text
  } = req.body;

  const newProject = new Project({
    project_name: project,
    issue_title,
    issue_text,
    created_by,
    assigned_to,
    status_text
  });

  if (
    issue_title == undefined ||
    issue_text == undefined ||
    created_by == undefined ||
    issue_title.trim() == '' ||
    issue_text.trim() == '' ||
    created_by.trim() == ''
  ) {
    return res.send('missing inputs');
  } else {
    newProject.save((err, obj) => {
      if (err) res.send(err);

      res.json(obj);
    });
  }
};

exports.project_delete = (req, res) => {
  const { _id } = req.body;

  if (_id == undefined || _id.trim() == '') {
    return res.send('id error');
  } else {
    Project.findByIdAndRemove(_id, err => {
      if (err) res.send(err);

      res.send('deleted ' + _id);
    });
  }
};
