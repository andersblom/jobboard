const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobsController");

/* GET home page. */
router.get('/', jobsController.browseAll);
router.get('/create', jobsController.createJob);
// router.post('/create', jobsController.createJobEntry);

module.exports = router;
