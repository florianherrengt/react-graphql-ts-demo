import { Properties_properties } from "api-types/Properties";
import { ApolloServer, gql } from "apollo-server-lambda";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
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
  type Sirwan {
    id: String!
    title: String!
  }
  type Query {
    properties: [Property]
    developers: [Sirwan]
  }
  type Mutation {
    updateProperty(id: String): Property
  }
`;

const dbProperties: Properties_properties[] = [
  {
    id: "1",
    image:
      "https://www.rightmove.co.uk/news/wp-content/uploads/2018/07/Oak-Lane-Sevenoaks-Kent-image-1-768x512.jpg",
    title: "Oak Lane",
    price: 10000,
    roi: 17.2,
    bed: 4,
    link: "http://www.rightmove.co.uk/",
    saved: false,
    notInterested: false,
    keywords: ["24 Hour concierge", "west facing", "sixth floor"]
  },
  {
    id: "2",
    image:
      "https://www.rightmove.co.uk/news/wp-content/uploads/2018/07/Lancelot-Place-Knightsbridge-London-image-2-768x512.jpg",
    title: "London",
    price: 200000,
    roi: 1.2,
    bed: 7,
    link: "http://www.rightmove.co.uk/",
    saved: true,
    notInterested: false,
    keywords: ["24 Hour concierge", "west facing", "sixth floor"]
  }
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    properties: (): Properties_properties[] => dbProperties,
    developers: () => [{ id: "1", title: "Dev" }]
  },
  Mutation: {
    updateProperty: (): Properties_properties => dbProperties[0]
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
