import express from 'express'
import bodyParser from 'body-parser'

import adminRoutes from './routes/admin.js'
import shopRoutes from './routes/movie.js'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('<h1>Page Not found :(</h1>')
})

app.listen(3000)
