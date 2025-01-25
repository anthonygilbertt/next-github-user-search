import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      id
      name
      login
      avatarUrl
      bio
      email
      company
      location
    }
  }
`;