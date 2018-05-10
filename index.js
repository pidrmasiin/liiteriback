const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./controllers/user')
const config = require('./utils/config')
const mongoose = require('mongoose')

const logger = (request, response, next) => {
    console.log('Method:',request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }
mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use(logger)
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('build'))
app.use('/api/users', userRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})