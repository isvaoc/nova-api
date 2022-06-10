const express = require('express');
const projectCtrl = require('../controllers/project');

const router = express.Router();

router.get('/projects', projectCtrl.getProject);
router.post('/projects', projectCtrl.createProject);

module.exports = router;
