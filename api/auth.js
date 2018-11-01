const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use(
  jwt({
    secret: 'dummy'
  }).unless({
    path: '/api/user/login'
  })
)

/*===========================================*/
/*================= ROUTES ==================*/
/*===========================================*/
import userData from "../tmp_test/users/me_data.js"

// === [POST - Login] ===
app.post('/user/login', (req, res, next) => {
  const { username, password } = req.body
  const valid = username.length && password === '123'

  if (!valid) {
    throw new Error('Invalid username or password')
  }

  const accessToken = jsonwebtoken.sign(userData, 'dummy')
  res.json({
    token: {
      accessToken
    }
  })
})

// === [GET - User] ===
app.get('/user', (req, res, next) => {
  res.json({ user: req.user })
})

// === [POST - Logout] ===
app.post('/user/logout', (req, res, next) => {
  res.json({ status: 'OK' })
})

// === Error handler ===
app.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})

// -- export app --
module.exports = {
  path: '/api',
  handler: app
}
