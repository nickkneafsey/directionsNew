const order =  [
  // Maybe order??
  {
    emojis: [ "dark_sunglasses", "necktie", "jeans", "shirt", "athletic_shoe" ],
    directions: "Touch the last item, then touch the second item.",
    correctAnswer: [ 4, 1 ]
  },
  {
    emojis: [ "blue_heart", "green_heart", "yellow_heart", "purple_heart" ],
    directions: "Touch the yellow heart.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "black_circle", "white_circle", "white_circle", "black_circle", "black_circle", "black_circle", "white_circle" ],
    directions: "Touch the last black circle",
    correctAnswer: [ 5 ]
  },
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the strawberry",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the pear",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "red_circle", "large_blue_diamond", "black_medium_square", "star" ],
    directions: "Touch the black square",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "mouse2", "mouse2", "mouse2", "mouse2" ],
    directions: "Touch the third mouse.",
    correctAnswer: [ 2 ]
  },
  // Real ones
  {
    emojis: [ "red_circle", "large_blue_diamond", "large_orange_diamond" ],
    directions: "Touch every shape starting with the warmest color and ending with the coolest color.",
    correctAnswer: [ 0, 2, 1 ]
  },
  {
    emojis: [ "grinning", "sob", "neutral_face" ],
    directions: "Touch all of the faces from saddest to happiest",
    correctAnswer: [ 1, 2, 0 ]
  },
  {
    emojis: [ "flag-us", "see_no_evil", "flag-ca", "hear_no_evil", "flag-br" ],
    directions: "Touch the flags from the bottom to the top.",
    correctAnswer: [ 4, 2, 0 ]
  },
  {
    emojis: [ "toilet", "coffee", "shower", "bed", "bath" ],
    directions: "Touch the items from top to bottom that are found in a bathroom.",
    correctAnswer: [ 0, 2, 4 ]
  },
  {
    emojis: [ "nine", "eight", "six", "seven" ],
    directions: "Touch all of the numbers in order from lowest to highest.",
    correctAnswer: [ 2, 3, 1, 0 ]
  }

];

export { order };
