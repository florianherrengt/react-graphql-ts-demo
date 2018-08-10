import * as React from "react";
import { graphql, ChildDataProps } from "react-apollo";
import query from "../queries/Property";
import { Properties } from "api-types/Properties";
import { Property } from "../components/Property";

interface InputProps {}
interface Response extends Properties {}
interface Variables {}
interface ChildProps extends ChildDataProps<{}, Properties, {}> {}

const withProperties = graphql<InputProps, Response, Variables, ChildProps>(
  query,
  {
    name: "properties"
  }
);

const PropertiesList = withProperties(
  ({ data: { loading, error, properties } }) => {
    if (error) {
      return <div>Error</div>;
    }
    if (loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        {properties &&
          properties.map(p => p && <Property property={p} actions={actions} />)}
      </div>
    );
  }
);

const onSavedCliked = (id: string) => {
  console.log(id);
};

const onNotInterestedCliked = (id: string) => {
  console.log(id);
};

const onLinkClicked = (link: string) => {
  window.open(link, "_blank");
};

const actions = { onSavedCliked, onLinkClicked, onNotInterestedCliked };

export { PropertiesList };
