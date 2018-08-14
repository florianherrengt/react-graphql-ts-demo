import * as React from "react";
import { Property } from "./Property";
import { Properties } from "api-types/Properties";

interface Props extends Properties {
  actions: {
    onLinkClicked(link: string): void;
    onSavedCliked(id: string): void;
    onNotInterestedCliked(id: string): void;
  };
}

const PropertiesList = ({ properties, actions }: Props) => (
  <div>
    {properties &&
      properties.map(
        (p, k) => p && <Property key={k} property={p} actions={actions} />
      )}
  </div>
);

export { PropertiesList };
