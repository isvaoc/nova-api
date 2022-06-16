const express = require('express');
const projectCtrl = require('../controllers/project');

const router = express.Router();

router.get('/projects', projectCtrl.getProject);
router.get('/projects/:id', projectCtrl.getById);
router.post('/projects', projectCtrl.createProject);
router.delete('/projects/:id', projectCtrl.deleteProject);

module.exports = router;
