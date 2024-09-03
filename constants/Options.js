export const SelectTravelersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler on exploration",
    icon: "",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two travelers in tandem",
    icon: "",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving",
    icon: "",
    people: "3 to 5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "",
    people: "5 to 10",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average",
    icon: "",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for location: {location} for {totalDays} days and {totalNights} nights for {traveler} with a {budget} budget with flight details, flight price in indian currency with booking url,hotels options list with HotelName, Hotel address,Price in indian currency, hotel image url,geo coordinates,rating,description and places to visit nearby with placeName, place details, place image url, geo coordinates,ticket pricing in indian currency,time to travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format.";
