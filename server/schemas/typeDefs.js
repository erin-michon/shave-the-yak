const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    gameScore: Int
    gameSessions: [GameSession]
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    me: User
    users: [User]
    user(username: String!): User
    

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(
      username: String
      email: String
      password: String
      gameScore: Int
    ): User
    deleteUser(_id: ID!): User
  }
`;

module.exports = typeDefs;



//   type GameSession {
//     _id: ID
//     date: String
//     score: Int
//     username: String
//   }


// queries

// getGameSessions: [GameSession]
//     getGameSession(_id: ID!): GameSession