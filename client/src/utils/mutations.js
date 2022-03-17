import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($gameScore: Int) {
        updateUser(gameScore: $gameScore) {
            username
            gameScore
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($ID: ID!) {
        deleteUser(_id: $ID) {
            _id
            email
            username
        }
    }
`
