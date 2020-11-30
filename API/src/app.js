const express = require('express');
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(cors())

const adm = require('./routes/adm')
const clientController = require('./controllers/ClientsController');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', adm)

app.listen(3333, () => {
  console.log(`server is running on port: 3333`)
})