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

export const saveProperty = gql`
  mutation SavedProperty($id: String!) {
    saveProperty(id: $id) {
      id
      createdAt
    }
  }
`;
