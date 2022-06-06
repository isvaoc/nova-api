const Activity = require('../models/activity');
const ActivityCtrl = {
    getActivity: async (req, res) => {
        const activities = await Activity.find();
        res.json(activities);
    },
    createActivity: async (req, res) => {
        const newActivity = new Activity(req.body);
        await newActivity.save();
        res.send({ message: 'Activity created' });
    },
};
module.exports = ActivityCtrl;