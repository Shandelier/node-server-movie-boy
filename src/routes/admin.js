const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/add-movie', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'src', 'views', 'add-movie.html'))
})

router.post('/add-movie', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router
