export const schoolDiningData = {
  ucsc: {
    title: "UC Santa Cruz",
    mapCenter: { lat: 36.9914, lng: -122.0609 },
    mapMarkers: [
      {
        position: { lat: 36.9992, lng: -122.0587 },
        title: "John R. Lewis & College Nine Dining Hall",
      },
      {
        position: { lat: 36.9972, lng: -122.0549 },
        title: "Cowell & Stevenson Dining Hall",
      },
    ],
    diningHalls: [
      {
        name: "Cowell & Stevenson Dining Hall",
        link: "/ucsc/dining/rate/cowell",
      },
      {
        name: "John R. Lewis Dining Hall",
        link: "/ucsc/dining/rate/johnlewis",
      },
    ],
    cafes: [
      { name: "Oakes' Cafe", link: "/ucsc/dining/rate/oakes" },
      { name: "Global Village Cafe", link: "/ucsc/dining/rate/global" },
    ],
  },

  ucla: {
    title: "UCLA",
    mapCenter: { lat: 34.0715, lng: -118.45 },
    mapMarkers: [
      {
        position: { lat: 34.0722, lng: -118.4496 },
        title: "De Neve Dining",
      },
      {
        position: { lat: 34.0701, lng: -118.4514 },
        title: "Bruin Plate",
      },
      {
        position: { lat: 34.0729, lng: -118.4475 },
        title: "Covel Commons",
      },
    ],
    diningHalls: [
      { name: "De Neve Dining", link: "/ucla/dining/rate/deneve" },
      { name: "Bruin Plate", link: "/ucla/dining/rate/bruinplate" },
      { name: "Covel Commons", link: "/ucla/dining/rate/covel" },
    ],
    cafes: [
      { name: "Kerckhoff Coffee House", link: "/ucla/dining/rate/kerckhoff" },
      { name: "Cafe 1919", link: "/ucla/dining/rate/1919" },
    ],
  },
};
