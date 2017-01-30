const beforeAndAfter =  [
  {
    emojis: [ "mouse2", "mouse2", "mouse2", "mouse2" ],
    directions: "Touch the third mouse",
    correctAnswer: [ 2 ]
  },
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
  }
]

export { beforeAndAfter };
