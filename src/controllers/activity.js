const Activity = require('../models/activity');

const ActivityCtrl = {
  getActivity: async (req, res, next) => {
    try {
      const activities = await Activity.find();
      res.json(activities);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      id = req.params.id;
      const activity = await Activity.findById(id);
      res.json(activity);
    } catch (error) {
      next(error);
    }
  },

  createActivity: async (req, res, next) => {
    try {
      const newActivity = new Activity(req.body);
      await newActivity.save();
      res.send({ message: 'The activity has been created successfully' });
    } catch (error) {
      next(error);
    }
  },

  updateActivity: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    await Activity.findByIdAndUpdate(id, body);
    res.json({ message: 'The activity has been updated successfully ' });
  },

  deleteActivity: async (req, res, next) => {
    try {
      const id = req.params.id;
      await Activity.findByIdAndDelete(id);
      res.json({ message: 'The activity has been deleted succesfully' });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = ActivityCtrl;
