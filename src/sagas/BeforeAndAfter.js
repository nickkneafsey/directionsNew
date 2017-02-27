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
    directions: "Touch all of the crayons from top to bottom. After that, touch all of the paper clips from top to bottom.",
    correctAnswer: [ 0, 2, 1, 3 ]
  },
  {
    emojis: [ "hammer", "wrench", "lock", "bell" ],
    directions: "Touch the bell before you touch the wrench.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "tv", "wrench", "tv", "camera" ],
    directions: "Touch the first T.V. After that, touch the camera.",
    correctAnswer: [ 0, 3 ]
  },
  {
    emojis: [ "100", "bomb", "older_man", "camera" ],
    directions: "Touch the old man before you touch the bomb.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "camel", "frog", "pig", "bear" ],
    directions: "After you touch the frog, touch the camel.",
    correctAnswer: [ 1, 0 ]
  },
  {
    emojis: [ "100", "bomb", "older_man", "camera" ],
    directions: "Touch the number 100 before you touch the camera.",
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
    directions: "Touch the frog. After that, touch the pig.",
    correctAnswer: [ 2, 0 ]
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
    directions: "Before you touch the snow man, touch the snow flake.",
    correctAnswer: [ 0, 1 ]
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
    directions: "Touch the hamburger before you touch the taco.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "surfer", "runner", "horse_racing", "weight_lifter", "golfer" ],
    directions: "Touch the golfer before you touch the weight lifter.",
    correctAnswer: [ 4, 3 ]
  },
  {
    emojis: [ "roller_coaster", "carousel_horse", "admission_tickets", "ferris_wheel", "circus_tent" ],
    directions: "After you touch the horse, touch the ferris wheel.",
    correctAnswer: [ 1, 3 ]
  },
  {
    emojis: [ "balloon", "gift", "ribbon", "tada", "confetti_ball" ],
    directions: "After you touch the balloon, touch the present.",
    correctAnswer: [ 0, 1 ]
  },
  {
    emojis: [ "ice_cream", "doughnut", "cookie", "chocolate_bar", "icecream" ],
    directions: "After you touch the cookie, touch the doughnut.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "movie_camera", "popcorn", "candy", "admission_tickets", "film_frames" ],
    directions: "After you touch the candy, touch the popcorn.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "green_apple", "apple", "green_apple", "apple", "green_apple" ],
    directions: "After you touch the middle green apple, touch the first red apple.",
    correctAnswer: [ 2, 1 ]
  },
  {
    emojis: [ "scissors", "lower_left_crayon", "pencil2", "notebook" ],
    directions: "After you touch the crayon, touch the pencil.",
    correctAnswer: [ 1, 2 ]
  },
  {
    emojis: [ "bug", "beetle", "ant", "elephant" ],
    directions: "Touch the ant before you touch the elephant.",
    correctAnswer: [ 2, 3 ]
  },
  {
    emojis: [ "womans_hat", "girl", "dress", "boot" ],
    directions: "Touch the hat before you touch the dress.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "red_circle", "red_circle", "large_blue_circle", "large_blue_circle", "black_circle" ],
    directions: "Touch the first red circle after you touch the last blue circle.",
    correctAnswer: [ 3, 0 ]
  },
  {
    emojis: [ "baseball", "baseball", "soccer", "baseball", "soccer" ],
    directions: "Before touching the last soccer ball, touch the second baseball.",
    correctAnswer: [ 1, 4 ]
  },
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the strawberry and the apple before you touch the banana.",
    correctAnswer: [ 2, 4, 5 ]
  },
  {
    emojis: [ "peach", "watermelon", "strawberry", "pear", "apple", "banana" ],
    directions: "Touch the strawberry and the apple before you touch the peach.",
    correctAnswer: [ 2, 4, 0 ]
  },
  {
    emojis: [ "black_circle", "white_circle", "white_circle", "black_circle", "black_circle", "white_circle" ],
    directions: "Touch the last black circle after you touch the first white circle.",
    correctAnswer: [ 1, 4 ]
  },
  {
    emojis: [ "black_circle", "white_circle", "white_circle", "black_circle", "black_circle", "black_circle" ],
    directions: "Touch all of the black circles from top to bottom.",
    correctAnswer: [ 0, 3, 4, 5 ]
  },
  {
    emojis: [ "jack_o_lantern", "ghost", "skull", "alien" ],
    directions: "Touch the ghost after you touch the alien.",
    correctAnswer: [ 3, 1 ]
  },

  {
    emojis: [ "alien", "alien", "ghost", "alien", "ghost" ],
    directions: "Touch the third alien before you touch the first ghost.",
    correctAnswer: [ 3, 2 ]
  },
  {
    emojis: [ "green_apple", "apple", "green_apple", "apple", "green_apple" ],
    directions: "Touch the last green apple before you touch the last red apple.",
    correctAnswer: [ 4, 3 ]
  },
  {
    emojis: [ "dark_sunglasses", "necktie", "jeans", "shirt", "athletic_shoe" ],
    directions: "Touch the jeans after you touch the shoe.",
    correctAnswer: [ 4, 2 ]
  },
  {
    emojis: [ "fish", "dolphin", "whale", "tropical_fish", "dolphin", "whale" ],
    directions: "Touch the second dolphin before you touch the first whale.",
    correctAnswer: [ 4, 2 ]
  },
  {
    emojis: [ "tropical_fish", "dolphin", "tropical_fish", "tropical_fish", "dolphin", "whale" ],
    directions: "Touch the first fish after you touch the last dolphin.",
    correctAnswer: [ 4, 0 ]
  },
  {
    emojis: [ "tropical_fish", "ocean", "tropical_fish", "tropical_fish", "ocean", "whale" ],
    directions: "Touch the third fish after you touch the whale.",
    correctAnswer: [ 5, 3 ]
  },
  {
    emojis: [ "hearts", "star", "four_leaf_clover", "balloon", "rainbow" ],
    directions: "Touch the heart after you touch the rainbow. After touching both of those touch the balloon.",
    correctAnswer: [ 4, 0, 3 ]
  },
  {
    emojis: [ "football", "baseball", "basketball", "baseball", "soccer" ],
    directions: "Touch the football after you touch the basketball.",
    correctAnswer: [ 2, 0 ]
  },
  {
    emojis: [ "eyes", "lips", "ear", "nose" ],
    directions: "Touch the ear after you touch the eyes.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "gem", "star", "sparkling_heart",  "droplet" ],
    directions: "Touch the heart before you touch the drop of water.",
    correctAnswer: [ 2, 3 ]
  },
  {
    emojis: [ "question", "grey_exclamation", "grey_question",  "question" ],
    directions: "Touch the third question mark before you touch the exclamation point.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "burrito", "taco", "hotdog", "burrito", "taco", "hotdog", ],
    directions: "Touch the second burrito after you touch the first taco.",
    correctAnswer: [ 1, 3 ]
  },
  {
    emojis: [ "sun_with_face", "last_quarter_moon_with_face", "star2", "rain_cloud" ],
    directions: "Touch the moon three times after touching the rain cloud.",
    correctAnswer: [ 3, 1, 1, 1 ]
  },
  {
    emojis: [ "rain_cloud", "sun_with_face", "last_quarter_moon_with_face", "star2" ],
    directions: "Touch the sun before you touch the moon. After that, touch the star.",
    correctAnswer: [ 1, 2, 3 ]
  },
]

export { beforeAndAfter };
