const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                  .select('-__v -password')
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
          return User.find()
          .select('-__v -password')
          // .populate('gameSessions')
        },
        user: async (parent, { username }) => {
          return User.findOne({ username })
          .select('-__v -password')
          // .populate('gameSessions')
        }
        // gameSessions: async (parent, { username }) => {
        //   const params = username ? {username} : {};
        //   return GameSession.find(params).sort({ date: -1 });
        // },
        // gameSession: async (parent, { _id }) => {
        //   return GameSession.findOne({ _id });
        // }
    },   
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
            return { token, user };
          },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        updateUser: async (parent, args, context) => {
          if(context.user) {
            return await User.findByIdAndUpdate(context.user._id, args, { new: true});
          }

          throw new AuthenticationError('Not logged in');
        },
        deleteUser: async (parent, { _id} , context) => {
          if(context.user) {
            return await User.findByIdAndDelete({ _id });
          }

          throw new AuthenticationError('Not logged in');
        }
    }
};

module.exports = resolvers;