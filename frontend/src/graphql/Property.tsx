import gql from "graphql-tag";

export const getProperties = gql`
  query Properties {
    properties {
      id
      image
      title
      price
      roi
      bed
      link
      saved
      notInterested
      keywords
    }
  }
`;

export const updateProperty = gql`
  mutation {
    updateProperty(id: "2") {
      id
    }
  }
`;
