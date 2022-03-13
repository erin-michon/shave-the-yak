const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String 
        password: String
        gamesessions: [GameSession]
    }

    type GameSession {
        session: ID
        date: String
        level: [Level]
        score: Int
    }

    type Level {
        _id: ID 
        name: String
    }


    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
        gameSession: [GameSession]

    }
`;

module.exports = typeDefs;