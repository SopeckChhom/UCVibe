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
        position: { lat: 37.00080672067694, lng: -122.0578424117574 },
        title: "John R. Lewis & College Nine Dining Hall",
      },
      {
        position: { lat: 36.996931835136984, lng: -122.05304883179545 },
        title: "Cowell & Stevenson Dining Hall",
      },
      {
        position: { lat: 36.994322462931414, lng: -122.0659051317956 },
        title: "Porter & Kresge Dining Hall",
      },
      {
        position: { lat: 36.99170476588154, lng: -122.06540033179576 },
        title: "Rachel Carson & Oakes Dining Hall",
      },
      {
        position: { lat: 37.00018444583257, lng: -122.05436967412444 },
        title: "Crown & Merrill Dining Hall",
      },
      {
        position: { lat: 36.98933887747271, lng: -122.06336727597309 },
        title: "Oakes' Cafe",
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
      { name: "Banana Joe's", id: "Banana-joe" },
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
      {
        position: { lat: 34.07125866969195, lng: -118.44999893941586 },
        title: "De Neve Dining",
      },
      {
        position: { lat: 34.071794773149726, lng: -118.44987880306485 },
        title: "Bruin Plate",
      },
      {
        position: { lat: 34.07299729999998, lng: -118.44999495767095 },
        title: "Covel Commons",
      },
      {
        position: { lat: 34.070599960359246, lng: -118.44340387422936 },
        title: "Kerckhoff Coffee House",
      },
      {
        position: { lat: 34.072699543080454, lng: -118.45079178772299 },
        title: "Cafe 1919",
      },
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
  },

  ucb: {
    title: "UC Berkeley",
    mapCenter: { lat: 37.8719, lng: -122.2585 },
    mapMarkers: [
      {
        position: { lat: 37.86711379489526, lng: -122.25617547301276 },
        title: "Crossroads Dining Hall",
      },
      {
        position: { lat: 37.86395280400732, lng: -122.24872877409213 },
        title: "Clark Kerr Dining Commons",
      },
      {
        position: { lat: 37.86769188489824, lng: -122.26042814486968 },
        title: "Cafe 3",
      },
      {
        position: { lat: 37.87556959400138, lng: -122.2560945846581 },
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
      {
        position: { lat: 32.87492611404597, lng: -117.24204482883547 },
        title: "64 Degrees",
      },
      {
        position: { lat: 32.87905188224633, lng: -117.24258077611825 },
        title: "Pines",
      },
      {
        position: { lat: 32.88328387067356, lng: -117.24278826077627 },
        title: "OceanView Terrace",
      },
      {
        position: { lat: 32.88413882984218, lng: -117.23324940310529 },
        title: "Canyon Vista",
      },
      {
        position: { lat: 32.878977179431544, lng: -117.23053556262452 },
        title: "Foodworx",
      },
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
      { name: "Eleanor Roosevelt Market", id: "erc-market" },
      { name: "Roger’s Market", id: "rogers-market" },
      { name: "Sixth Market", id: "sixth-market" },
      { name: "Seventh Market", id: "seventh-market" },
      { name: "Sunshine Market", Id: "sunshine-market" },
    ]),
  },

  //fix
  ucd: {
    title: "UC Davis",
    mapCenter: { lat: 38.5382, lng: -121.7617 },
    mapMarkers: [
      {
        position: { lat: 38.54112, lng: -121.754224 },
        title: "Segundo Dining Commons",
      },
      {
        position: { lat: 38.540229, lng: -121.76093 },
        title: "Tercero Dining Commons",
      },
      {
        position: { lat: 38.54267, lng: -121.760792 },
        title: "Cuarto Dining Commons",
      },
      {
        position: { lat: 38.544846, lng: -121.74699 },
        title: "Latitude Dining Commons",
      },
      {
        position: { lat: 38.54212, lng: -121.75354 },
        title: "Coffee House (CoHo)",
      },
    ],
    diningHalls: withLinks("ucd", "dining", [
      { name: "Segundo Dining Commons", id: "segundo" },
      { name: "Tercero Dining Commons", id: "tercero" },
      { name: "Cuarto Dining Commons", id: "cuarto" },
      { name: "Latitude Dining Commons", id: "latitude" },
    ]),
    cafes: withLinks("ucd", "cafe", [
      { name: "Coffee House (CoHo)", id: "coho" },
      { name: "Bio Brew", id: "biobrew" },
      { name: "Silo Market", id: "silo-market" },
      { name: "Starbucks Memorial Union", id: "starbucks-mu" },
      { name: "Peet's Coffee at ARC", id: "peets-arc" },
    ]),
    markets: withLinks("ucd", "market", [
      { name: "Segundo Market", id: "segundo-market" },
      { name: "Tercero Market", id: "tercero-market" },
      { name: "Latitude Market", id: "latitude-market" },
      { name: "Silo Market", id: "silo-market" },
    ]),
  },

  //fix
  uci: {
    title: "UC Irvine",
    mapCenter: { lat: 33.6432, lng: -117.8417 },
    mapMarkers: [
      {
        position: { lat: 33.650477, lng: -117.84265 },
        title: "Brandywine Dining Commons",
      },
      {
        position: { lat: 33.64744, lng: -117.84097 },
        title: "Anteatery",
      },
      {
        position: { lat: 33.64678, lng: -117.84329 },
        title: "The Commons",
      },
      {
        position: { lat: 33.64337, lng: -117.84409 },
        title: "Starbucks Student Center",
      },
      {
        position: { lat: 33.64606, lng: -117.84212 },
        title: "Cafe Med",
      },
    ],
    diningHalls: withLinks("uci", "dining", [
      { name: "Brandywine Dining Commons", id: "brandywine" },
      { name: "Anteatery", id: "anteatery" },
      { name: "The Commons", id: "commons" },
    ]),
    cafes: withLinks("uci", "cafe", [
      { name: "Cafe Med", id: "cafemed" },
      { name: "Courtyard Study Lounge Café", id: "courtyard" },
      { name: "Starbucks Student Center", id: "starbucks" },
      { name: "Phoenix Food Court", id: "phoenix" },
      { name: "WPA - The Anteatery", id: "wpa-anteatery" },
    ]),
    markets: withLinks("uci", "market", [
      { name: "Zot N' Go", id: "zotngo" },
      { name: "The Hill", id: "thehill" },
      { name: "Brandywine Market", id: "brandywine-market" },
      { name: "Anteatery Market", id: "anteatery-market" },
    ]),
  },
};
