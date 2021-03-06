const sequences =  [
  {
    emojis: [ "evergreen_tree", "hot_pepper", "palm_tree", "cloud_tornado", "deciduous_tree" ],
    directions: "Touch all of the trees from top to bottom",
    correctAnswer: [ 0, 2, 4 ]
  },
  {
    emojis: [ "star2", "cloud_rain", "sun_with_face", "cloud_snow", "cloud_lightning" ],
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
    directions: "First, touch the cookie. Next, touch the doughnut. Then touch the chocolate bar. Finally, touch the cake.",
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
    emojis: [ "red_circle", "poop", "spider",  "joy", "poop" ],
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
    directions: "Touch the first star, followed by the last star.",
    correctAnswer: [ 0, 4 ]
  },
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Touch the hotdog",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "grinning", "sob", "neutral_face" ],
    directions: "Touch the sad face, then touch the happy face",
    correctAnswer: [ 1, 0 ]
  },
  {
    emojis: [ "flag_us", "see_no_evil", "flag_ca", "hear_no_evil", "flag_br" ],
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
  },
  {
    emojis: [ "lion_face", "tiger", "bear", "wolf" ],
    directions: "Touch the bear. Then touch the lion. Finally, touch the wolf.",
    correctAnswer: [ 2, 0, 3 ]
  },
  {
    emojis: [ "relaxed", "shirt", "jeans", "mans_shoe" ],
    directions: "Touch the jeans. Next, touch the face.",
    correctAnswer: [ 2, 0 ]
  },
  {
    emojis: [ "relaxed", "shirt", "jeans", "mans_shoe" ],
    directions: "Touch the shoe, then touch the shirt.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "womans_hat", "girl", "dress", "boot" ],
    directions: "Touch the boot. After that, touch the hat.",
    correctAnswer: [ 3, 0 ]
  },
  {
    emojis: [ "womans_hat", "girl", "dress", "boot" ],
    directions: "Touch the dress. After that, touch the boot.",
    correctAnswer: [ 2, 3 ]
  },
  {
    emojis: [ "punch", "ok_hand", "wave", "thumbsup" ],
    directions: "Touch the thumbs up, then touch the fist.",
    correctAnswer: [ 3, 0 ]
  },
  {
    emojis: [ "shamrock", "shamrock", "shamrock", "shamrock" ],
    directions: "Touch the second shamrock, then touch the fourth shamrock.",
    correctAnswer: [ 1, 3 ]
  },
  {
    emojis: [ "eyes", "lips", "ear", "nose" ],
    directions: "Touch the eyes. Next touch the ears. Then touch the mouth. Finally touch the nose.",
    correctAnswer: [ 0, 2, 1, 3 ]
  },
  {
    emojis: [ "crayon", "paperclip", "crayon", "paperclip" ],
    directions: "Touch both of the paper clips from top to bottom, then touch the second crayon.",
    correctAnswer: [ 1, 3, 2 ]
  },
  {
    emojis: [ "grey_exclamation", "question", "grey_exclamation", "grey_question",  "question" ],
    directions: "Touch the second question mark. Next, touch the second exclamation point.",
    correctAnswer: [ 3, 2 ]
  },
  {
    emojis: [ "heart", "spades", "black_medium_square", "star",  "black_large_square" ],
    directions: "Touch all of the black shapes from top to bottom.",
    correctAnswer: [ 1, 2, 4 ]
  },
  {
    emojis: [ "lemon", "grapes", "cherries", "watermelon",  "tomato" ],
    directions: "Touch the third fruit. Next touch the lemon.",
    correctAnswer: [ 2, 0 ]
  },
  {
    emojis: [ "burrito", "taco", "hotdog", "burrito", "taco", "hotdog", ],
    directions: "Touch the second burrito. Next touch the first hotdog. Finally, touch the first burrito.",
    correctAnswer: [ 3, 2, 0 ]
  },
  {
    emojis: [ "gem", "star", "sparkling_heart",  "droplet" ],
    directions: "Touch the last item before you touch the second item.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "football", "baseball", "basketball", "baseball", "soccer" ],
    directions: "Touch the baseballs from top to bottom. Next touch the football.",
    correctAnswer: [ 1, 3, 0 ]
  },
  {
    emojis: [ "football", "baseball", "basketball", "baseball", "soccer" ],
    directions: "Touch the first baseball three times. Next touch the soccer ball.",
    correctAnswer: [ 1, 1, 1, 4 ]
  },
  {
    emojis: [ "rose", "sunflower", "cherry_blossom", "tulip", "hibiscus" ],
    directions: "Touch the last flower once. Next touch the first flower twice.",
    correctAnswer: [ 4, 0, 0 ]
  },
  {
    emojis: [ "sun_with_face", "last_quarter_moon_with_face", "star2", "cloud_rain" ],
    directions: "First, touch the moon two times. Next, touch the rain cloud.",
    correctAnswer: [ 1, 1, 3 ]
  },
];

export { sequences };
