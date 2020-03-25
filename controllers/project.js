const { Project } = require('../models');

exports.project_create = (req, res) => {
  const { projectName } = req.params;
  const {
    issue_title,
    issue_text,
    created_by,
    assigned_to,
    status_text
  } = req.body;

  const project = new Project({
    project_name: projectName,
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
    project.save((err, obj) => {
      if (err) {
        return next(err);
      }
      res.json(obj);
    });
  }
};
