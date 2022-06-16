const Project = require('../models/project');

const ProjectCtrl = {
  getProject: async (req, res) => {
    const project = await Project.find();
    res.json(project);
  },

  getById: async (req, res) => {
    id = req.params.id;
    const project = await Project.findById(id);
    res.json(project);
  },

  createProject: async (req, res) => {
    const newProject = new Project(req.body);
    await newProject.save();
    res.send({ message: 'Project created' });
  },

  updateProject: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    await Project.findByIdAndUpdate(id, body);
    res.json({ message: 'Project updated' });
  },

  deleteProject: async (req, res) => {
    const id = req.params.id;
    await Project.findByIdAndDelete(id);
    res.json({ message: 'Project deleted succesfully' });
  },
};
module.exports = ProjectCtrl;
