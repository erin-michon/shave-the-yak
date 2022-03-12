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

    type Question {
        _id: ID
        question: String 
        answers: String
        correct: String 
        points: Int
        level: [Level]
    }

    type Auth {
        token: ID
        user: User
    }
`;

module.exports = typeDefs;