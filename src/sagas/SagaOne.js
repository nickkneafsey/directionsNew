const sagaOne =  [
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the strawberry",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Touch the hotdog",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the pear",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Before you touch the taco, touch the hamburger",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "red_circle", "large_blue_diamond", "black_medium_square", "star" ],
    directions: "Touch the black square",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "mouse2", "mouse2", "mouse2", "mouse2" ],
    directions: "Touch the third mouse",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "dark_sunglasses", "necktie", "jeans", "shirt", "athletic_shoe" ],
    directions: "Touch the last one, then touch the second one",
    correctAnswer: [ 4, 1 ]
  },
  {
    emojis: [ "blue_heart", "green_heart", "yellow_heart", "purple_heart" ],
    directions: "Touch the yellow heart",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "eggplant", "banana", "eggplant", "banana", "eggplant", "banana", "eggplant" ],
    directions: "Touch all the bananas from top to bottom",
    correctAnswer: [ 1, 3, 5 ]
  },
  {
    emojis: [ "pizza", "fries", "icecream", "doughnut" ],
    directions: "Touch the ice cream, then touch the fries",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "black_circle", "white_circle", "white_circle", "black_circle", "black_circle", "black_circle", "white_circle" ],
    directions: "Touch the last black circle",
    correctAnswer: [ 5 ]
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
  }

];

export { sagaOne };
