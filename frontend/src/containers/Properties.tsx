import * as React from "react";
import { Query, Mutation, MutationFunc } from "react-apollo";
import { ApolloQueryResult } from "apollo-boost";
import { adopt } from "react-adopt";
import * as apiCalls from "../graphql/Property";
import { Properties } from "api-types/Properties";

interface RenderProps {
  getAllProperties: ApolloQueryResult<Properties>;
  updateProperty: MutationFunc;
}

interface Props {}

const getAllProperties = ({ render }: any) => (
  <Query query={apiCalls.getProperties}>{results => render(results)}</Query>
);

const saveProperty = ({ render }: any) => (
  <Mutation mutation={apiCalls.saveProperty}>
    {mutation => render(mutation)}
  </Mutation>
);

export const PropertiesContainer = adopt<RenderProps, Props>({
  getAllProperties,
  saveProperty
});
