import { PropertiesContainer } from "../containers/Properties";
import { PropertiesList } from "../components/PropertiesList";
import { Loading } from "../components/Loading";

import * as React from "react";

const PropertiesListPage = () => (
  <PropertiesContainer>
    {({ getAllProperties, updateProperty }) => (
      <div>
        {getAllProperties.loading ? (
          <Loading />
        ) : (
          <PropertiesList
            properties={getAllProperties.data.properties}
            actions={actions}
          />
        )}
      </div>
    )}
  </PropertiesContainer>
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

export { PropertiesListPage };
