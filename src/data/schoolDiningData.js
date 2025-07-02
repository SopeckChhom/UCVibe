// src/data/schoolDiningData.js
const generateLink = (school, category, id) =>
  `/${school}/${category}/rate/${id}`;

const withLinks = (school, category, items) =>
  items.map((item) => ({
    ...item,
    link: generateLink(school, category, item.id),
  }));

export const schoolDiningData = {
  //done with locations
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

  //done
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

  //done
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
        position: { lat: 32.87961932472047, lng: -117.23646007566285 },
        title: "Price Center",
      },
      {
        position: { lat: 32.87488556591756, lng: -117.24201264232859 },
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
      { name: "Price Center", id: "priceCenter" },
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

  //fix
  ucm: {
    title: "UC Merced",
    mapCenter: { lat: 37.3648, lng: -120.4317 },
    mapMarkers: [
      {
        position: { lat: 37.36471, lng: -120.430948 },
        title: "Yablokoff-Wallace Dining Center",
      },
      {
        position: { lat: 37.364429, lng: -120.433009 },
        title: "Pavilion Dining Center",
      },
      {
        position: { lat: 37.363956, lng: -120.431809 },
        title: "The Summits Marketplace",
      },
      {
        position: { lat: 37.364105, lng: -120.43296 },
        title: "Bobcat Café",
      },
      {
        position: { lat: 37.364189, lng: -120.432576 },
        title: "Starbucks",
      },
    ],
    diningHalls: withLinks("ucm", "dining", [
      { name: "Yablokoff-Wallace Dining Center", id: "yablokoff-wallace" },
      { name: "Pavilion Dining Center", id: "pavilion" },
    ]),
    cafes: withLinks("ucm", "cafe", [
      { name: "Bobcat Café", id: "bobcat-cafe" },
      { name: "The Summits Marketplace", id: "summits-marketplace" },
      { name: "Starbucks", id: "starbucks" },
    ]),
    markets: withLinks("ucm", "market", [
      { name: "The Summits Marketplace", id: "summits-marketplace" },
      { name: "CatMart", id: "catmart" }, // CatMart is the on-campus convenience store
    ]),
  },

  //fix
  ucr: {
    title: "UC Riverside",
    mapCenter: { lat: 33.9737, lng: -117.3281 },
    mapMarkers: [
      {
        position: { lat: 33.973662, lng: -117.329632 },
        title: "Glasgow Residential Restaurant",
      },
      {
        position: { lat: 33.974099, lng: -117.327254 },
        title: "Lothian Residential Restaurant",
      },
      {
        position: { lat: 33.974677, lng: -117.327901 },
        title: "The Barn",
      },
      {
        position: { lat: 33.975297, lng: -117.33144 },
        title: "The Habit Burger Grill",
      },
      {
        position: { lat: 33.975031, lng: -117.329518 },
        title: "Starbucks @ HUB",
      },
      {
        position: { lat: 33.974556, lng: -117.32726 },
        title: "Scotty's Convenience Store",
      },
      {
        position: { lat: 33.974859, lng: -117.329214 },
        title: "Latitude 55",
      },
    ],
    diningHalls: withLinks("ucr", "dining", [
      { name: "Glasgow Residential Restaurant", id: "glasgow" },
      { name: "Lothian Residential Restaurant", id: "lothian" },
    ]),
    cafes: withLinks("ucr", "cafe", [
      { name: "The Barn", id: "the-barn" },
      { name: "The Habit Burger Grill", id: "habit-burger" },
      { name: "Starbucks @ HUB", id: "starbucks-hub" },
      { name: "Coffee Bean & Tea Leaf", id: "coffee-bean" },
      { name: "Subway", id: "subway" },
      { name: "Chronic Tacos", id: "chronic-tacos" },
      { name: "Panda Express", id: "panda-express" },
      { name: "Latitude 55", id: "latitude-55" },
    ]),
    markets: withLinks("ucr", "market", [
      { name: "Scotty's Convenience Store", id: "scottys" },
      { name: "The Market at Glen Mor", id: "glen-mor-market" },
    ]),
  },

  //fix
  ucsf: {
    title: "UC San Francisco",
    mapCenter: { lat: 37.7631, lng: -122.4586 },
    mapMarkers: [
      {
        position: { lat: 37.763236, lng: -122.457857 },
        title: "Moffitt Café",
      },
      {
        position: { lat: 37.763839, lng: -122.458455 },
        title: "The View Café (Millberry Union)",
      },
      {
        position: { lat: 37.766352, lng: -122.390403 },
        title: "Mission Bay Food Court",
      },
      {
        position: { lat: 37.763799, lng: -122.458749 },
        title: "Palio Café",
      },
      {
        position: { lat: 37.767702, lng: -122.391884 },
        title: "The Pub at UCSF Mission Bay",
      },
    ],
    diningHalls: withLinks("ucsf", "dining", [
      { name: "Moffitt Café", id: "moffitt-cafe" },
      { name: "The View Café (Millberry Union)", id: "view-cafe" },
      { name: "Palio Café", id: "palio-cafe" },
      { name: "The Pub at UCSF Mission Bay", id: "the-pub" },
    ]),
    cafes: withLinks("ucsf", "cafe", [
      { name: "Mission Bay Food Court", id: "mission-bay-food-court" },
      { name: "Peasant Pies", id: "peasant-pies" },
      { name: "Starbucks (Mission Bay)", id: "starbucks-mission-bay" },
      { name: "City Café (Parnassus)", id: "city-cafe" },
    ]),
    markets: withLinks("ucsf", "market", [
      { name: "Millberry Union Market", id: "millberry-market" },
      { name: "Mission Bay Market", id: "mission-bay-market" },
    ]),
  },

  //fix
  ucsb: {
    title: "UC Santa Barbara",
    mapCenter: { lat: 34.4139, lng: -119.8489 },
    mapMarkers: [
      {
        position: { lat: 34.415453, lng: -119.847828 },
        title: "De La Guerra Dining Commons",
      },
      {
        position: { lat: 34.414273, lng: -119.856317 },
        title: "Ortega Dining Commons",
      },
      {
        position: { lat: 34.41733, lng: -119.849265 },
        title: "Carrillo Dining Commons",
      },
      {
        position: { lat: 34.414602, lng: -119.850765 },
        title: "Portola Dining Commons",
      },
      {
        position: { lat: 34.413421, lng: -119.856755 },
        title: "Courtyard Cafe",
      },
      {
        position: { lat: 34.413841, lng: -119.85083 },
        title: "Nicoletti's",
      },
      {
        position: { lat: 34.413003, lng: -119.849846 },
        title: "UCen Dining",
      },
      {
        position: { lat: 34.412622, lng: -119.847741 },
        title: "Root 217",
      },
      {
        position: { lat: 34.412978, lng: -119.855619 },
        title: "The Arbor",
      },
    ],
    diningHalls: withLinks("ucsb", "dining", [
      { name: "De La Guerra Dining Commons", id: "de-la-guerra" },
      { name: "Ortega Dining Commons", id: "ortega" },
      { name: "Carrillo Dining Commons", id: "carrillo" },
      { name: "Portola Dining Commons", id: "portola" },
    ]),
    cafes: withLinks("ucsb", "cafe", [
      { name: "Courtyard Cafe", id: "courtyard-cafe" },
      { name: "Nicoletti's", id: "nicolettis" },
      { name: "UCen Dining", id: "ucen-dining" },
      { name: "Root 217", id: "root-217" },
      { name: "The Arbor", id: "the-arbor" },
      { name: "The Club & Guest House", id: "club-guest-house" },
    ]),
    markets: withLinks("ucsb", "market", [
      { name: "Tenaya Market & Eatery", id: "tenaya-market" },
      { name: "Gaucho Certified Farmers Market", id: "farmers-market" },
      { name: "UCen Market", id: "ucen-market" },
    ]),
  },
};
