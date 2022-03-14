const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String 
        gameSessions: [GameSession]
    }

    type GameSession {
        _id: ID
        date: String
        score: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        users: [User] 
        user(username: String!): User
        gameSessions(username: String): [GameSession]
        gameSession(_id: ID!): GameSession
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(username: String, email: String, password: String): User
        addGameSession (date: String, score: String): GameSession
        removeGameSession (date: String, score: String): GameSession 
    }
`;

module.exports = typeDefs;