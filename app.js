const express = require('express');
const { use } = require('./routes/index');
const router = require('./routes/index')
const helpers = require('./helpers')

const app = express()
app.use(express.json())



app.use('*', router)
module.exports = app