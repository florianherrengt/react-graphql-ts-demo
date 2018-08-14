import gql from "graphql-tag";

export const getDevelopers = gql`
  query Developers {
    developers {
      id
      title
    }
  }
`;
