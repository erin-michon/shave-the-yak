const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const gameSessionSchema = require('./GameSession');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // Mongoose match validator uses a regex to check that the input *matches* the allowed sequence of characters
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
      type: String,
      required: true,
      minlength: 8
    },
    gameSessions: [gameSessionSchema]
  }
)

// before saving to db hash password to protect it
userSchema.pre('save', async function (next) {
  // protect new user sign-ups and changed passwords for existing users by hashing before sending to db
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

// check entered password with hashed
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password)
}

// create the User model using the UserSchema
const User = model('User', userSchema)

// export the User model
module.exports = User
