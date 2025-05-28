const generateLink = (school, category, id) => `/${school}/dining/rate/${id}`;

const withLinks = (school, category, items) =>
  items.map((item) => ({
    ...item,
    link: generateLink(school, category, item.id),
  }));

export const schoolDiningData = {
  ucsc: {
    title: "UC Santa Cruz",
    mapCenter: { lat: 36.995, lng: -122.06 },
    mapMarkers: [
      {
        position: { lat: 37.001, lng: -122.058 },
        title: "John R. Lewis & College Nine Dining Hall",
      },
      {
        position: { lat: 36.9972, lng: -122.0549 },
        title: "Cowell & Stevenson Dining Hall",
      },
      {
        position: { lat: 36.9944, lng: -122.06535 },
        title: "Porter & Kresge Dining Hall",
      },
      {
        position: { lat: 36.991, lng: -122.0645 },
        title: "Rachel Carson & Oakes Dining Hall",
      },
      {
        position: { lat: 36.974, lng: -122.0587 },
        title: "Crown & Merrill Dining Hall",
      },
    ],
    diningHalls: withLinks("ucsc", "dining", [
      { name: "Cowell & Stevenson Dining Hall", id: "cowell" },
      { name: "John R. Lewis Dining Hall", id: "johnlewis" },
      { name: "Rachel Carson & Oakes Dining Hall", id: "rachelcarson" },
      { name: "Crown & Merrill Dining Hall", id: "crown" },
      { name: "Porter & Kresge Dining Hall", id: "porter" },
    ]),
    cafes: withLinks("ucsc", "dining", [
      { name: "Oakes' Cafe", id: "oakes" },
      { name: "Global Village Cafe", id: "global" },
    ]),
    markets: withLinks("ucsc", "dining", [
      { name: "Merril Market", id: "merril-market" },
      { name: "Porter Market", id: "porter-market" },
      { name: "Slug Stop", id: "slug-stop" },
    ]),
  },

  ucla: {
    title: "UCLA",
    mapCenter: { lat: 34.0715, lng: -118.45 },
    mapMarkers: [
      { position: { lat: 34.0722, lng: -118.4496 }, title: "De Neve Dining" },
      { position: { lat: 34.0701, lng: -118.4514 }, title: "Bruin Plate" },
      { position: { lat: 34.0729, lng: -118.4475 }, title: "Covel Commons" },
    ],
    diningHalls: withLinks("ucla", "dining", [
      { name: "De Neve Dining", id: "deneve" },
      { name: "Bruin Plate", id: "bruinplate" },
      { name: "Covel Commons", id: "covel" },
    ]),
    cafes: withLinks("ucla", "dining", [
      { name: "Kerckhoff Coffee House", id: "kerckhoff" },
      { name: "Cafe 1919", id: "1919" },
    ]),
  },

  ucb: {
    title: "UC Berkeley",
    mapCenter: { lat: 37.8719, lng: -122.2585 },
    mapMarkers: [
      {
        position: { lat: 37.87, lng: -122.259 },
        title: "Crossroads Dining Hall",
      },
      {
        position: { lat: 37.873, lng: -122.26 },
        title: "Clark Kerr Dining Commons",
      },
    ],
    diningHalls: withLinks("ucb", "dining", [
      { name: "Crossroads Dining Hall", id: "crossroads" },
      { name: "Clark Kerr Dining Commons", id: "clarkkerr" },
    ]),
  },
};
