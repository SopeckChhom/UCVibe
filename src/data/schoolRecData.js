const generateLink = (school, category, id) =>
  `/${school}/${category}/rate/${id}`;

const withLinks = (school, category, items) =>
  items.map((item) => ({
    ...item,
    link: generateLink(school, category, item.id),
  }));

export const schoolRecData = {
  ucsc: {
    title: "UC Santa Cruz",
    mapCenter: { lat: 36.9957, lng: -122.06 }, // optional, for maps
    mapMarkers: [
      { position: { lat: 36.997, lng: -122.05 }, title: "East Field House" },
      // more if you want!
    ],
    recCenters: withLinks("ucsc", "rec", [
      { name: "East Field House", id: "east-field-house" },
      { name: "West Field House", id: "west-field-house" },
      { name: "OPERS Rec Center", id: "opers" },
      // ...more
    ]),
  },

  ucr: {
    title: "UC Riverside",
    recCenters: withLinks("ucr", "rec", [
      { name: "SRC North", id: "src-north" },
      { name: "SRC South", id: "src-south" },
      // ...more
    ]),
  },
};
