const express = require('express');

const activityCtrl = require('../controllers/activity');

const router = express.Router();

router.get('/activities', activityCtrl.getActivity);
router.get('/activities/:id', activityCtrl.getById);
router.post('/activities', activityCtrl.createActivity);
router.put('/activities/:id', activityCtrl.updateActivity);
router.delete('/activities/:id', activityCtrl.deleteActivity);

module.exports = router;
