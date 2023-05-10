const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const loginRouter = require('express').Router()
const logger = require('../utils/logger')
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  logger.info('--------------------------------------------------------------------------------------------------')
  logger.info('Parametros', request.body)
  logger.info('--------------------------------------------------------------------------------------------------')
  const { username, password } = request.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    logger.info('--------------------------------------------------------------------------------------------------')
    logger.info('Incorrect User or Password')
    logger.info('--------------------------------------------------------------------------------------------------')
    return response.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ token, username: user.username, name: user.name })
  logger.info('--------------------------------------------------------------------------------------------------')
  logger.info('En teoria paso', response.status)
  logger.info('--------------------------------------------------------------------------------------------------')
})

module.exports = loginRouter