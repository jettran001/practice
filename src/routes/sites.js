
const express = require('express');
const router = express.Router();
const SitesController = require('../app/controllers/SitesController');

router.get('/', SitesController.index);

module.exports = router;