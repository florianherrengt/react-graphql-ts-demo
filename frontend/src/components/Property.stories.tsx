import * as React from "react";

import { action } from "@storybook/addon-actions";
// import { linkTo } from '@storybook/addon-links';
import { storiesOf } from "@storybook/react";
import { Property } from "./Property";
import { Properties_properties } from "api-types/Properties";

const mainstreamProperty: Properties_properties = {
  id: "123",
  title: "Canary Wharf, London",
  image:
    "https://www.rightmove.co.uk/news/wp-content/uploads/2018/07/Oak-Lane-Sevenoaks-Kent-image-1-768x512.jpg",
  saved: false,
  bed: 4,
  price: 500000,
  roi: 17.2,
  link: "http://",
  notInterested: false,
  keywords: ["24 Hour concierge", "west facing", "sixth floor"]
};

const actions = {
  onLinkClicked: action("link-clicked"),
  onSavedCliked: action("saved-clicked"),
  onNotInterestedCliked: action("not-interested-clicked")
};

storiesOf("Property", module)
  .add("with title and price", () => (
    <Property actions={actions} property={mainstreamProperty} />
  ))
  .add("with saved", () => (
    <Property
      actions={actions}
      property={{ ...mainstreamProperty, saved: true }}
    />
  ));
