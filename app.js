const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./src/routes/admin')
const movieRoutes = require('./src/routes/movie')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/admin', adminRoutes)
app.use(movieRoutes)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'src', 'views', '404.html'))
})

app.listen(3000)
