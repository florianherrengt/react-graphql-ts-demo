import { Properties_properties } from "api-types/Properties";

const dbProperties: Properties_properties[] = [
  {
    id: "1",
    image:
      "https://www.rightmove.co.uk/news/wp-content/uploads/2018/07/Oak-Lane-Sevenoaks-Kent-image-1-768x512.jpg",
    title: "Oak Lane",
    price: 10000,
    roi: 17.2,
    bed: 4,
    link: "http://www.rightmove.co.uk/",
    saved: false,
    notInterested: false,
    keywords: ["24 Hour concierge", "west facing", "sixth floor"]
  },
  {
    id: "2",
    image:
      "https://www.rightmove.co.uk/news/wp-content/uploads/2018/07/Lancelot-Place-Knightsbridge-London-image-2-768x512.jpg",
    title: "London",
    price: 200000,
    roi: 1.2,
    bed: 7,
    link: "http://www.rightmove.co.uk/",
    saved: true,
    notInterested: false,
    keywords: ["24 Hour concierge", "west facing", "sixth floor"]
  }
];

const find = (ids: string[]): Promise<Properties_properties[]> => {
  return new Promise((resolve, reject) => {
    resolve(dbProperties);
  });
};

export { find };
