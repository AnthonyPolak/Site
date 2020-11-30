const express = require('express')
const router = express.Router()

router.get('/masculino', (req, res) => {
  res.render('pagcammasc')
});

router.get('/feminino', (req, res) => {
  res.render('pagcamfem')
});

module.exports = router
