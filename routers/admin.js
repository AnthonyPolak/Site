const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index')
});

router.get('/como_comprar', (req, res)=>{
  res.render('como_comprar')
});

router.get('/contato', (req, res)=>{
  res.render('contato')
});

router.get('/empresa', (req, res)=>{
  res.render('empresa')
});

router.get('/envio', (req, res)=>{
  res.render('envio')
});

router.get('/login', (req, res)=>{
  res.render('login')
});

router.get('/pagamento', (req, res)=>{
  res.render('pagamento')
});


router.post('/PF')

router.get('/troca', (req, res)=>{
  res.render('politica_troca')
});

router.get('/seguranca', (req, res)=>{
  res.render('seguranca')
});

module.exports = router;