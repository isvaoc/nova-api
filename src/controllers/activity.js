const { update } = require('../models/activity');
const Activity = require('../models/activity');
const ActivityCtrl = {
  getActivity: async (req, res) => {
    const activities = await Activity.find();
    res.json(activities);
  },

  getById: async (req, res) => {
    id = req.params.id;
    const activity = await Activity.findById(id);
    res.json(activity);
  },

  createActivity: async (req, res) => {
    const newActivity = new Activity(req.body);
    await newActivity.save();
    res.send({ message: 'The activity has been created successfully' });
  },

  updateActivity: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    await Activity.findByIdAndUpdate(id, body);
    res.json({ message: 'The activity has been updated successfully ' });
  },

  deleteActivity: async (req, res) => {
    const id = req.params.id;
    await Activity.findByIdAndDelete(id);
    res.json({ message: 'The activity has been deleted succesfully' });
  },
};
module.exports = ActivityCtrl;
