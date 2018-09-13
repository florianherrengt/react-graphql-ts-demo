import * as properties from "./properties";
import * as savedProperty from "./savedProperty";
import { DateResolver } from "./Date";

const resolvers = {
  Query: {
    ...properties.Query
  },
  Mutation: {
    ...savedProperty.Mutation
  },
  Date: DateResolver
};

export { resolvers };
