export const schoolDiningData = {
  ucsc: {
    title: "UC Santa Cruz",
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

  // ✅ Add this
  ucla: {
    title: "UCLA",
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
