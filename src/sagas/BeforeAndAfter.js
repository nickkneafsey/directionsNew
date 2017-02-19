const beforeAndAfter =  [
  {
    emojis: [ "mouse2", "mouse2", "mouse2", "mouse2" ],
    directions: "Touch the third mouse before you touch the fourth mouse.",
    correctAnswer: [ 2, 3 ]
  },
  {
    emojis: [ "mouse2", "mouse2", "mouse2", "mouse2" ],
    directions: "Touch the third mouse after you touch the fourth mouse.",
    correctAnswer: [ 3, 2 ]
  },
  {
    emojis: [ "lower_left_crayon", "linked_paperclips", "lower_left_crayon", "linked_paperclips" ],
    directions: "Touch the crayons from top to bottom. After that, touch the paper clips from top to bottom",
    correctAnswer: [ 0, 2, 1, 3 ]
  },
  {
    emojis: [ "hammer", "wrench", "lock", "bell" ],
    directions: "Touch the bell before you touch the wrench.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "tv", "wrench", "tv", "camera" ],
    directions: "Touch all of the TV's from top to bottom. After that, touch the camera.",
    correctAnswer: [ 0, 2, 3 ]
  },
  {
    emojis: [ "100", "bomb", "older_man", "camera" ],
    directions: "Before you touch the bomb, touch the old man.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "camel", "frog", "pig", "bear" ],
    directions: "After you touch the frog, touch the camel.",
    correctAnswer: [ 1, 0 ]
  },
  {
    emojis: [ "100", "bomb", "older_man", "camera" ],
    directions: "Touch the number 100 before you touch the camera",
    correctAnswer: [ 0, 3 ]
  },
  {
    emojis: [ "hamster", "frog", "pig", "bear" ],
    directions: "After you touch the hamster, touch the bear.",
    correctAnswer: [ 0, 3 ]
  },
  {
    emojis: [ "tophat", "eyes", "nose", "tongue" ],
    directions: "Touch the eyes after you touch the nose.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "pig", "hamster", "frog",  "bear" ],
    directions: "Touch the hamster. After that touch the pig.",
    correctAnswer: [ 1, 0 ]
  },
  {
    emojis: [ "jack_o_lantern", "santa", "fireworks", "birthday" ],
    directions: "Touch the birthday cake before you touch Santa Claus.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "hearts", "spades", "diamonds", "clubs" ],
    directions: "Touch the heart before you touch the diamond.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "pencil2", "pencil2", "pencil2", "pencil2" ],
    directions: "Touch the first pencil. After that, touch the third pencil.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "snowflake", "snowman", "lightning", "skier" ],
    directions: "Before you touch the snow man, touch the snow flake. After that, touch the skiier.",
    correctAnswer: [ 0, 1, 4 ]
  },
  {
    emojis: [ "baseball", "soccer", "basketball", "football", "tennis" ],
    directions: "Touch the basketball before you touch the soccer ball",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "hearts", "spades", "diamonds", "clubs" ],
    directions: "Touch the diamond before you touch the club.",
    correctAnswer: [ 2, 3 ]
  },
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Before you touch the taco, touch the hamburger",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "file_cabinet", "card_file_box", "spiral_note_pad", "printer", "wastebasket" ],
    directions: "Touch the item in the sequence that comes right before the trash can.",
    correctAnswer: [ 3 ]
  }
]

export { beforeAndAfter };
