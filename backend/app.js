const config = require('./utils/config')
const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/user')
const personRouter = require('./controllers/person')
const logger = require('./utils/logger')
//require('dotenv').config()
const mongoose = require('mongoose')

require('express-async-errors')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
})

app.use(cors())

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  else if (error.name ===  'JsonWebTokenError') 
  {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.get('/info', (request, response) => {
    const res = `
    <p>Pagina de Prueba de Portafolio</p>
    `
    response.send(res)
})

app.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) })
app.get('/about', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) })
app.get('/calculadora', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) })
app.get('/multi', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) })
app.get('/multi/pass', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) })
app.get('/multi/pass/phonebook', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) })

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/persons', personRouter)

app.use(unknownEndpoint)
app.use(errorHandler)  

module.exports = app