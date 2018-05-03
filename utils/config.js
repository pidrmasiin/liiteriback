if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

  let mongoUrl = process.env.MONGODB_URI
  
  module.exports = {
    mongoUrl
  }