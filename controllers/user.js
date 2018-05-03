const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users.map(User.format))
})

userRouter.post('/', async (request, response) => {
  try {
    const body = request.body
    console.log('body', body)
    const user = new User({
      date: body.date,
      phone: body.phone,
      email: body.email
    })
    console.log('user', user)
    const savedUser = await user.save()
    response.json(User.format(savedUser))
  } catch (exception) {
    console.log(exception)
    response.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = userRouter