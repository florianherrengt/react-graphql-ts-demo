import { Context } from "../helpers";
import controllers from "../controllers";
const properties = (
  rootValue,
  args: { ids: string[] },
  context: Context,
  info
) => {
  return controllers.properties.getProperties(args.ids);
};

const Query = { properties };
const Mutation = {};

export { Query, Mutation };
