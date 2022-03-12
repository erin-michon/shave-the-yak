const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  // placeholder for local
  // || 'mongodb://localhost:27017/{heroku-name}',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

module.exports = mongoose.connection
