import { SavedProperty_saveProperty } from "api-types/SavedProperty";
import * as propertiesModel from "../models/properties";

const create = (id: string): Promise<SavedProperty_saveProperty> => {
  console.log("saveProperty called");
  return new Promise(resolve => resolve({ id: "rst", createdAt: new Date() }));
};

export { create };
