const Project = require('../models/project');

const ProjectCtrl = {
  getProject: async (req, res, next) => {
    try {
      const project = await Project.find();
      res.json(project);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      id = req.params.id;
      const project = await Project.findById(id);
      res.json(project);
    } catch (error) {
      next(error);
    }
  },

  createProject: async (req, res, next) => {
    try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.send({ message: 'Project created' });
    } catch (error) {
      next(error);
    }
  },

  updateProject: async (req, res, next) => {
    try {
      const id = req.params.id;
      const body = req.body;
      await Project.findByIdAndUpdate(id, body);
      res.json({ message: 'Project updated' });
    } catch (error) {
      next(error);
    }
  },

  deleteProject: async (req, res, next) => {
    try {
      const id = req.params.id;
      await Project.findByIdAndDelete(id);
      res.json({ message: 'Project deleted succesfully' });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = ProjectCtrl;
