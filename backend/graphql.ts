import { ApolloServer, gql } from "apollo-server-lambda";
import { resolvers } from "./resolvers";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar Date

  type Property {
    id: String!
    image: String!
    title: String!
    price: Int!
    roi: Float!
    bed: Int!
    link: String!
    saved: Boolean!
    notInterested: Boolean!
    keywords: [String!]!
  }
  type SavedProperty {
    id: String!
    createdAt: Date!
  }
  type Query {
    properties(ids: [String]): [Property]
  }
  type Mutation {
    saveProperty(id: String!): SavedProperty
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
