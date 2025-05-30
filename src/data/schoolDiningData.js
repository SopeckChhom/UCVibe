const generateLink = (school, category, id) =>
  `/${school}/${category}/rate/${id}`;

const withLinks = (school, category, items) =>
  items.map((item) => ({
    ...item,
    link: generateLink(school, category, item.id),
  }));

export const schoolDiningData = {
  ucsc: {
    title: "UC Santa Cruz",
    mapCenter: { lat: 36.9957, lng: -122.06 },
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
    cafes: withLinks("ucsc", "cafe", [
      { name: "Global Village Cafe", id: "global" },
      { name: "Oakes' Cafe", id: "oakes" },
      { name: "Owl's Nest Cafe", id: "owl" },
      { name: "Perk: Baskin Engineering", id: "baskin-engineering" },
      { name: "Perk: Earth & Marine Sciences", id: "earth-marine" },
      { name: "Perk: Physical Sciences", id: "physical-sciences" },
      { name: "stevenson Coffee House", id: "stevenson" },
      { name: "Ucen Coffee Bar", id: "ucen" },
    ]),
    markets: withLinks("ucsc", "market", [
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
    cafes: withLinks("ucla", "cafe", [
      { name: "Kerckhoff Coffee House", id: "kerckhoff" },
      { name: "Cafe 1919", id: "1919" },
    ]),
    markets: withLinks("ucla", "market", [
      { name: "Bruin Market", id: "bruin-market" },
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
      { position: { lat: 37.8701, lng: -122.2572 }, title: "Cafe 3" },
      {
        position: { lat: 37.8689, lng: -122.2598 },
        title: "Foothill Dining Commons",
      },
    ],
    diningHalls: withLinks("ucb", "dining", [
      { name: "Crossroads Dining Hall", id: "crossroads" },
      { name: "Clark Kerr Dining Commons", id: "clarkkerr" },
      { name: "Cafe 3", id: "cafe3" },
      { name: "Foothill Dining Commons", id: "foothill" },
    ]),
    cafes: withLinks("ucb", "cafe", [
      { name: "Golden Bear Cafe", id: "gbc" },
      { name: "Free Speech Movement Cafe", id: "fsm" },
      { name: "Yali's Cafe", id: "yalis" },
      { name: "Strada", id: "strada" },
      { name: "Peet's Coffee (MLK)", id: "peets-mlk" },
    ]),
    markets: withLinks("ucb", "market", [
      { name: "MLK Market", id: "mlk-market" },
      { name: "Bear Market", id: "bear-market" },
      { name: "Golden Bear Market", id: "golden-bear-market" },
    ]),
  },

  ucsd: {
    title: "UC San Diego",
    mapCenter: { lat: 32.8801, lng: -117.234 },
    mapMarkers: [
      { position: { lat: 32.8787, lng: -117.2414 }, title: "64 Degrees" },
      { position: { lat: 32.8804, lng: -117.2384 }, title: "Pines" },
      {
        position: { lat: 32.8799, lng: -117.2311 },
        title: "OceanView Terrace",
      },
      { position: { lat: 32.8813, lng: -117.2333 }, title: "Canyon Vista" },
      { position: { lat: 32.8757, lng: -117.2407 }, title: "Foodworx" },
    ],
    diningHalls: withLinks("ucsd", "dining", [
      { name: "64 Degrees", id: "64degrees" },
      { name: "Pines", id: "pines" },
      { name: "OceanView Terrace", id: "ovt" },
      { name: "Canyon Vista", id: "canyonvista" },
      { name: "Foodworx", id: "foodworx" },
    ]),
    cafes: withLinks("ucsd", "cafe", [
      { name: "Art of Espresso", id: "espresso" },
      { name: "Muir Woods Coffee House", id: "muirwoods" },
      { name: "Perks Coffee Shop", id: "perks" },
      { name: "The Bistro", id: "bistro" },
      { name: "Cafe Ventanas", id: "ventanas" },
    ]),
    markets: withLinks("ucsd", "market", [
      { name: "Sixth Market", id: "sixth-market" },
      { name: "Roger’s Market", id: "rogers-market" },
      { name: "Eleanor Roosevelt Market", id: "erc-market" },
    ]),
  },
};
