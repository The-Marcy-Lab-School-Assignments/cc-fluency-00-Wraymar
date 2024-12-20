const users = [
  {
    name: "Reuben O.",
    username: "@blood_pressure_killa",
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege.",
  },
  {
    name: "Laisha C",
    username: "@passaic_papi",
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours.",
  },
  {
    name: "Anne H.",
    username: "@i_love_bambas",
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend",
  },
  {
    name: "Steph S.",
    username: "@queen_of_the_kew",
    followers: 1200,
    verified: false,
    bio: "✌🏼",
  },
  {
    name: "Carmen S",
    username: "@omar_apollo_fanclub",
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21.",
  },
];

//1
const getNames = (arr) => {
  return arr.map((obj) => {
    return obj.name;
  });
};

//console.log(getNames(users));

//2
const getVerifiedUsers = (arr) => {
  return arr.filter((obj) => {
    return obj.verified === true;
  });
};

// console.log(getVerifiedUsers(users));

//3
const lessThan1k = (arr) => {
  return arr.filter((obj) => {
    return obj.followers < 1000;
  });
};

//console.log(lessThan1k(users));

//4
const searchUsername = (arr, input) => {
  return arr.find((obj) => {
    return obj.username === input;
  });
};

// console.log(searchUsername(users, "@passaic_papi"));

//5
const longWinded = (arr) => {
  return arr.sort((a, b) => b.bio.length - a.bio.length)[0];
};

// console.log(longWinded(users));

//6
const follower = (arr) => {
  return arr.sort((a, b) => {
    return a.followers < b.followers ? -1 : 1;
  });
};

// console.log(follower(users));
