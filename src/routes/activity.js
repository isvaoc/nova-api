const express = require('express');

const activityCtrl = require('../controllers/activity');

const router = express.Router();

router.get('/activities', activityCtrl.getActivity);
router.post('/activities', activityCtrl.createActivity);

module.exports = router;