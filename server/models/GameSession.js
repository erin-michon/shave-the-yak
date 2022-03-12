const { Schema, model } = require('mongoose')
// dateFormat = require('./../utils/helpers')

const GameSessionSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now
      // get: timestamp => dateFormat(timestamp)
    },
    // not necessary for GameSession to have its own reference to level for MVP?
    // level: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    score: {
      type: Number,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
  // {
  //   toJSON: {
  //     getters: true
  //   }
  // }
)

// create the GameSession model using the GameSessionSchema
const GameSession = model('GameSession', GameSessionSchema)

// export the GameSession model
module.exports = GameSession
