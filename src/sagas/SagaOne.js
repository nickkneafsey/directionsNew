export default sagaOne = [
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the strawberry",
    correctAnswer: [ 2 ]
  },
  {
    emojis: ["hotdog", "taco", "hamburger", "pizza"],
    directions: "Touch the hotdog",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the pear",
    correctAnswer: [ 3 ]
  },
  {
    emojis: ["hotdog", "taco", "hamburger", "pizza"],
    directions: "Before you touch the taco, touch the hamburger",
    correctAnswer: [ 2, 1 ]
  }
];
