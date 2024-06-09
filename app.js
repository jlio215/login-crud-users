const express = require('express')
const { mongoConn } = require('./db/connect-mongo')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

app.use(express.json())

app.use(cors({
  origin: '*'
}))

const usuario = require('./routes/Usuario.js')
const auth = require('./routes/auth.js')

app.use('/usuarios', usuario)
app.use('/auth', auth)

module.exports = app