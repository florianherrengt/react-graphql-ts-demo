import gql from "graphql-tag";

export default gql`
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
