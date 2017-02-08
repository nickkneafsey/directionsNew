const sequences =  [
  {
    emojis: [ "evergreen_tree", "hot_pepper", "palm_tree", "tornado", "deciduous_tree" ],
    directions: "Touch all of the trees from top to bottom",
    correctAnswer: [ 0, 2, 4 ]
  },
  {
    emojis: [ "star2", "rain_cloud", "sun_with_face", "snow_cloud", "lightning" ],
    directions: "First touch the sun, then touch the star.",
    correctAnswer: [ 2, 0 ]
  },
  {
    emojis: [ "poultry_leg", "rice", "sweet_potato", "fries", "meat_on_bone" ],
    directions: "Touch all of the meats from the top of the screen to the bottom.",
    correctAnswer: [ 0, 4 ]
  },
  {
    emojis: [ "doughnut", "cookie", "chocolate_bar", "cake" ],
    directions: "First, touch the cookie. Next, touch the doughnut. Then touch the chocolate bar. Finally, Touch the cake.",
    correctAnswer: [ 1, 0, 2, 3 ]
  },
  {
    emojis: [ "two", "five", "three", "one", "four" ],
    directions: "Touch each number from largest to smallest.",
    correctAnswer: [ 1, 4, 2, 0, 3 ]
  },
  {
    emojis: [ "two", "five", "three", "one", "four" ],
    directions: "Touch each number from smallest to largest.",
    correctAnswer: [ 3, 0, 2, 4, 1 ]
  },
  {
    emojis: [ "oncoming_automobile", "blue_car", "helicopter",  "rocket", "taxi" ],
    directions: "Touch all of the cars from the top of the screen to the bottom.",
    correctAnswer: [ 0, 1, 4 ]
  },
  {
    emojis: [ "neutral_face", "sunglasses", "cry",  "blush", "smile" ],
    directions: "Touch all of the happy faces from top to bottom.",
    correctAnswer: [ 1, 3, 4 ]
  },
  {
    emojis: [ "red_circle", "hankey", "spider",  "joy", "hankey" ],
    directions: "Touch all of the poopies from top to bottom.",
    correctAnswer: [ 1, 4 ]
  },
  {
    emojis: [ "hearts", "spades", "diamonds", "clubs" ],
    directions: "Touch all of the red shapes from top to bottom.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "baseball", "soccer", "basketball", "football", "tennis" ],
    directions: "Touch all of the balls from top to bottom except for the soccer ball.",
    correctAnswer: [ 0, 2, 3, 4 ]
  },
  {
    emojis: [ "pizza", "fries", "icecream", "doughnut" ],
    directions: "Touch the ice cream, then touch the fries",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "heart", "heart", "heart", "star", "star", "star" ],
    directions: "Touch the first heart, then the middle star",
    correctAnswer: [ 0, 4 ]
  },
  {
    emojis: [ "star", "star", "star", "star", "star" ],
    directions: "Touch the first and last star, then touch the middle star",
    correctAnswer: [ 0, 4, 2 ]
  },
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Touch the hotdog",
    correctAnswer: [ 0 ]
  }

];

export { sequences };
