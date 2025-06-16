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
    mapCenter: { lat: 36.9957, lng: -122.06 },
    mapMarkers: [
      { position: { lat: 36.997, lng: -122.05 }, title: "East Field House" },
    ],
    recCenters: withLinks("ucsc", "rec", [
      { name: "East Field House", id: "east-field-house" },
      { name: "West Field House", id: "west-field-house" },
      { name: "OPERS Rec Center", id: "opers" },
    ]),
  },

  ucr: {
    title: "UC Riverside",
    recCenters: withLinks("ucr", "rec", [
      { name: "SRC North", id: "src-north" },
      { name: "SRC South", id: "src-south" },
    ]),
  },

  ucla: {
    title: "UCLA",
    recCenters: withLinks("ucla", "rec", [
      { name: "John Wooden Center", id: "john-wooden-center" },
      { name: "Sunset Canyon Rec Center", id: "sunset-canyon-rec-center" },
    ]),
  },

  ucb: {
    title: "UC Berkeley",
    recCenters: withLinks("ucb", "rec", [
      { name: "Recreational Sports Facility (RSF)", id: "rsf" },
      {
        name: "Golden Bear Recreation & Pool",
        id: "golden-bear-recreation-pool",
      },
    ]),
  },

  ucd: {
    title: "UC Davis",
    recCenters: withLinks("ucd", "rec", [
      { name: "Activities and Recreation Center (ARC)", id: "arc" },
      { name: "University Credit Union Center", id: "ucu-center" },
    ]),
  },

  uci: {
    title: "UC Irvine",
    recCenters: withLinks("uci", "rec", [
      { name: "Anteater Recreation Center", id: "anteater-recreation-center" },
    ]),
  },

  ucsb: {
    title: "UC Santa Barbara",
    recCenters: withLinks("ucsb", "rec", [
      { name: "Recreation Center (RecCen)", id: "recreation-center" },
    ]),
  },

  ucsd: {
    title: "UC San Diego",
    recCenters: withLinks("ucsd", "rec", [
      { name: "Canyonview Aquatics Center", id: "canyonview-aquatics-center" },
      { name: "Price Center", id: "price-center" },
    ]),
  },

  ucmerced: {
    title: "UC Merced",
    recCenters: withLinks("ucmerced", "rec", [
      { name: "Recreation and Athletics Center (RAC)", id: "rac" },
    ]),
  },

  ucsf: {
    title: "UC San Francisco",
    recCenters: withLinks("ucsf", "rec", [
      {
        name: "Mission Bay Recreation Center",
        id: "mission-bay-recreation-center",
      },
    ]),
  },
};
