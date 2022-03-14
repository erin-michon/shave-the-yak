import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            email
            username
            gameScore
        }
    }
`;

export const QUERY_USERS = gql`
    {
        users {
            _id
            username
            email
            gameScore
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            gameScore
        }
    }
`;