const Project = require('../models/project');

const ProjectCtrl = {
  getProject: async (req, res) => {
    const activities = await Project.find();
    res.json(activities);
  },
  createProject: async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.send({ message: 'Project created' });
  },
};
module.exports = ProjectCtrl;
