import * as React from "react";
import * as ReactDOM from "react-dom";
import { mount } from "enzyme";
import { Property } from "./Property";

const mainstreamProperty = {
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
  onLinkClicked: jest.fn(),
  onSavedCliked: jest.fn(),
  onNotInterestedCliked: jest.fn()
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Property property={mainstreamProperty} actions={actions} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("has the property name", () => {
  const property = mount(
    <Property property={mainstreamProperty} actions={actions} />
  );
  expect(property.text()).toContain(mainstreamProperty.title);
});
