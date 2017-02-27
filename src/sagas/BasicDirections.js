const basicDirections = [
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
    emojis: [ "black_circle", "white_circle", "black_circle", "white_circle", "black_circle", "black_circle" ],
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
  {
    emojis: [ "roller_coaster", "carousel_horse", "admission_tickets", "ferris_wheel", "circus_tent" ],
    directions: "Touch the tickets",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "balloon", "gift", "ribbon", "tada", "confetti_ball" ],
    directions: "Touch the present",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "ice_cream", "doughnut", "cookie", "chocolate_bar", "icecream" ],
    directions: "Touch the cookie.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "movie_camera", "popcorn", "candy", "admission_tickets", "film_frames" ],
    directions: "Touch the popcorn.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "green_apple", "apple", "green_apple", "apple", "green_apple" ],
    directions: "Touch the last green apple.",
    correctAnswer: [ 4 ]
  },
  {
    emojis: [ "scissors", "lower_left_crayon", "pencil2", "notebook" ],
    directions: "Touch the pencil.",
    correctAnswer: [ 2 ]
  },
  //Fix
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Touch the taco.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "hotdog", "pizza", "hamburger", "taco" ],
    directions: "Touch the hamburger.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "jack_o_lantern", "santa", "fireworks", "birthday" ],
    directions: "Touch the fireworks.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "gem", "star", "sparkling_heart",  "droplet" ],
    directions: "Touch the heart.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "hankey", "alien", "hankey", "alien" ],
    directions: "Touch the last alien.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "jack_o_lantern", "ghost", "skull", "alien" ],
    directions: "Touch the ghost.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "blue_heart", "yellow_heart", "purple_heart", "green_heart" ],
    directions: "Touch the green heart.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "lion_face", "tiger", "bear", "wolf" ],
    directions: "Touch the tiger.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "bee", "baby_chick", "turtle", "bird" ],
    directions: "Touch the animal that does not fly.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "fish", "dolphin", "whale", "tropical_fish" ],
    directions: "Touch the dolphin.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "turtle", "turtle", "rabbit", "turtle", "turtle" ],
    directions: "Touch the animal that is not a turtle.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "eyes", "lips", "ear", "nose" ],
    directions: "Touch the ears.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "fish", "dolphin", "whale", "tropical_fish", "dolphin", "whale" ],
    directions: "Touch all of the dolphins from top to bottom.",
    correctAnswer: [ 1, 4 ]
  },
  {
    emojis: [ "hearts", "star", "four_leaf_clover", "balloon", "rainbow" ],
    directions: "Touch the heart followed by the star.",
    correctAnswer: [ 0, 1 ]
  },
  {
    emojis: [ "small_red_triangle", "large_blue_diamond", "red_circle", "large_blue_diamond", "small_red_triangle" ],
    directions: "Touch all of the red shapes from top to bottom.",
    correctAnswer: [ 0, 2, 4 ]
  },
  {
    emojis: [ "large_blue_circle", "large_blue_diamond", "red_circle", "large_blue_circle", "small_red_triangle" ],
    directions: "Touch all of the circles from top to bottom.",
    correctAnswer: [ 0, 2, 3 ]
  },
  {
    emojis: [ "green_apple", "apple", "green_apple", "apple", "green_apple" ],
    directions: "Touch each of the green apples from top to bottom.",
    correctAnswer: [ 0, 2, 4 ]
  },
  {
    emojis: [ "small_red_triangle", "large_blue_diamond", "red_circle", "large_blue_diamond" ],
    directions: "Touch all of the red shapes from top to bottom.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "large_blue_circle", "large_blue_diamond", "red_circle", "large_blue_circle", "small_red_triangle" ],
    directions: "Touch all of the circles from top to bottom.",
    correctAnswer: [ 0, 2, 3 ]
  },
  {
    emojis: [ "green_apple", "apple", "green_apple", "apple", "green_apple" ],
    directions: "Touch each of the green apples from top to bottom.",
    correctAnswer: [ 0, 2, 4 ]
  },
  {
    emojis: [ "gem", "star", "sparkling_heart",  "droplet" ],
    directions: "Touch the drop of water.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "tv", "wrench", "tv", "camera" ],
    directions: "Touch the wrench. Next touch the first T.V.",
    correctAnswer: [ 1, 0 ]
  },
  {
    emojis: [ "tv", "star", "tv", "star", "tv" ],
    directions: "Touch both stars from top to bottom.",
    correctAnswer: [ 1, 3 ]
  },
  {
    emojis: [ "football", "baseball", "basketball", "baseball", "soccer" ],
    directions: "Touch the baseballs from bottom to top.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "tophat", "eyes", "nose", "tongue" ],
    directions: "Touch the mouth.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "pig", "hamster", "frog",  "bear" ],
    directions: "Touch the bear, and then touch the frog.",
    correctAnswer: [ 3, 2 ]
  },
  {
    emojis: [ "jack_o_lantern", "santa", "fireworks", "birthday" ],
    directions: "Touch Santa three times.",
    correctAnswer: [ 1, 1, 1 ]
  },
  {
    emojis: [ "question", "grey_exclamation", "grey_question",  "question" ],
    directions: "Touch the second question mark.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "burrito", "taco", "hotdog", "burrito", "taco", "hotdog", ],
    directions: "Touch the hot dogs from top to bottom.",
    correctAnswer: [ 2, 5 ]
  },
]

export { basicDirections };
