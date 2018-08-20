import { Properties_properties } from "api-types/Properties";
import * as propertiesModel from "../models/properties";

const getProperties = (ids: string[]): Promise<Properties_properties[]> => {
  return propertiesModel.find(ids);
};

export { getProperties };
