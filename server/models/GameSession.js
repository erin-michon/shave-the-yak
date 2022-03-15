const { Schema, model } = require('mongoose')
// const { Schema } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const gameSessionSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    score: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

// // create the GameSession model using the GameSessionSchema
const GameSession = model('GameSession', GameSessionSchema)

// // export the GameSession model
module.exports = GameSession;
// module.exports = GameSessionSchema;
