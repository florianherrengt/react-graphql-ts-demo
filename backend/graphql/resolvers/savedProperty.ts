import { Context } from "../../helpers";
import controllers from "../../controllers";

const saveProperty = (
  rootValue,
  args: { id: string },
  context: Context,
  info
) => {
  return controllers.savedProperty.create(args.id);
};

const Query = {};
const Mutation = { saveProperty };

export { Query, Mutation };
