
const express = require('express');
const router = express.Router();
const AccountsController = require('../app/controllers/AccountsController');

router.get('/info', AccountsController.information);

module.exports = router;