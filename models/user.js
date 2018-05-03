const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  date: Date,
  phone: String,
  email: String
})

userSchema.statics.format = (user) => {
  return {
    id: user.id,
    date: user.date,
    phone: user.phone,
    email: user.email,
  }
}

const User = mongoose.model('User', userSchema)


module.exports = User