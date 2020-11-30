const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/ClientsController')

router.get('/PF', ClientController.index);
router.post('/PF', ClientController.index);


module.exports = router;