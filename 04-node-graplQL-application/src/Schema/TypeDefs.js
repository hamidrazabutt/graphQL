import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Types
  type User {
    name: String!
    age: Int!
    married: Boolean!
  }

  type Post {
    name: String!
    id: String!
    description: String!
  }

  # Queries
  type Query {
    getAllUsers: [User!]!
    getPost: Post!
  }

  # Mutations
  type Mutation {
    createUser(name: String!, age: Int!, married: Boolean!): User!
    deleteUser(name: String!): User!
  }

  # Subscription
  type Subscription {
    newUser: User!
  }
`;
