const users = [
  {
    name: "Luffy",
    city: "Ahmedabad",
    countryCode: "IND",
    friends: [
      {
        name: "Emma",
      },
      {
        name: "Gabi",
      },
    ],
  },
  {
    name: "Gabi",
    city: "New York",
    countryCode: "USA",
    friends: [
      {
        name: "Luffy",
      },
      {
        name: "Norman",
      },
    ],
  },
  {
    name: "Emma",
    city: "Vadodara",
    countryCode: "IND",
    friends: [
      {
        name: "Norman",
      },
    ],
  },
  {
    name: "Norman",
    city: "Vadodara",
    countryCode: "IND",
    friends: [
      {
        name: "Emma",
      },
    ],
  },
];

const createFilteredArray = (inputArray, isValid) => {
  var resultArray = {};
  for (let i = 0; i < inputArray.length; i++) {
    //ToDo Implement required logic
    //Hint : if users isValid store in result
    if (isValid(resultArray[i])) {
      resultArray.push(inputArray[i]);
    }
  }
  return resultArray;
};

const findUsersFromINDIA = (users) => {
  if (users.countryCode == "IND") {
    return true;
  } else {
    return false;
  }

  // TODO return true or false based on given condtion
};

//Todo: Write findUsersWhoseFriendIsNorman
//Hint : Write similar function as above with requried logic
const findUsersWhoseFriendIsNorman = (users) => {
  return users.friends.find((friend) => friend.name === "Norman");
};

const prettyConsoleLog = (message, data) =>
  console.log(message, JSON.stringify(data, null, 4));
prettyConsoleLog(
  "findUsersFromINDIA",
  createFilteredArray(users, findUsersFromINDIA)
);
prettyConsoleLog(
  "findUsersWhoseFriendIsNorman",
  createFilteredArray(users, findUsersWhoseFriendIsNorman)
);
