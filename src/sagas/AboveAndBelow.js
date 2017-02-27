const aboveAndBelow =  [
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Touch the item above the taco.",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "hotdog", "taco", "hamburger", "pizza" ],
    directions: "Touch the item below the hamburger.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "jack_o_lantern", "santa", "fireworks", "birthday" ],
    directions: "Touch the item above Santa.",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "gem", "star", "sparkling_heart",  "droplet" ],
    directions: "Touch the shape above the heart.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "hankey", "alien", "hankey", "alien" ],
    directions: "Touch the item above the second poop.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "jack_o_lantern", "ghost", "skull", "alien" ],
    directions: "Touch the item below the skull.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "blue_heart", "yellow_heart", "purple_heart", "green_heart" ],
    directions: "Touch the item below the yellow heart.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "blue_book", "green_book", "orange_book", "notebook" ],
    directions: "Touch the item above the green book.",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "telephone_receiver", "mailbox", "package", "incoming_envelope" ],
    directions: "Touch the item below the package.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "key", "lock", "mag", "bell" ],
    directions: "Touch the item above the bell.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "fire", "droplet", "maple_leaf", "cloud" ],
    directions: "Touch the item above the cloud.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "soccer", "baseball", "8ball", "football" ],
    directions: "Touch the item above the football.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "+1", "ok_hand", "-1", "point_down" ],
    directions: "Touch the hand below the thumbs up sign.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "lower_left_crayon", "lower_left_paintbrush", "lower_left_ballpoint_pen", "lower_left_fountain_pen" ],
    directions: "Touch the item below the crayon.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "spider", "spider_web", "cat", "wolf" ],
    directions: "Touch the item above the web.",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "fearful", "rage", "expressionless", "sunglasses" ],
    directions: "Touch the face above the face wearing sunglasses.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "train", "bus", "ambulance", "fire_engine" ],
    directions: "Touch the vehicle above the fire truck.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "bicyclist", "walking", "swimmer", "horse_racing" ],
    directions: "Touch the person below the biker.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "file_cabinet", "card_file_box", "spiral_note_pad", "printer", "wastebasket" ],
    directions: "Touch the item in the sequence that is above the trash can.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "scissors", "lower_left_crayon", "pencil2", "notebook" ],
    directions: "Touch the item below the crayon.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "orange_book", "lower_left_crayon", "paperclip", "straight_ruler" ],
    directions: "Touch the item below the paper clip.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "truck", "derelict_house_building", "construction", "straight_ruler" ],
    directions: "Touch the item below the house.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "lion_face", "tiger", "bear", "wolf" ],
    directions: "Touch the item below the lion.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "bee", "baby_chick", "turtle", "bird" ],
    directions: "Touch the animal above the turtle.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "fish", "dolphin", "whale", "tropical_fish" ],
    directions: "Touch the animal below the dolphin.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "mouse", "poodle", "pig", "frog" ],
    directions: "Touch the animal below the mouse.",
    correctAnswer: [ 1 ]
  },
  {
    emojis: [ "relaxed", "shirt", "jeans", "mans_shoe" ],
    directions: "Touch the item above the shirt.",
    correctAnswer: [ 0 ]
  },
  {
    emojis: [ "hearts", "star", "four_leaf_clover", "balloon", "rainbow" ],
    directions: "Touch the item above the star, then touch the item below the star.",
    correctAnswer: [ 0, 2 ]
  },
  {
    emojis: [ "tropical_fish", "dolphin", "tropical_fish", "tropical_fish", "dolphin", "whale" ],
    directions: "Touch the animal above the whale",
    correctAnswer: [ 4 ]
  },
  {
    emojis: [ "dark_sunglasses", "necktie", "jeans", "athletic_shoe" ],
    directions: "Touch the item above the jeans. After that, touch the item above the tie.",
    correctAnswer: [ 1, 0 ]
  },
  {
    emojis: [ "green_apple", "apple", "green_apple", "apple", "green_apple" ],
    directions: "Touch the item above the last green apple.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "black_circle", "white_circle", "white_circle", "black_circle", "black_circle", "white_circle" ],
    directions: "Touch the item below the first black circle. Then touch the item below the second white circle.",
    correctAnswer: [ 1, 3 ]
  },
  {
    emojis: [ "balloon", "gift", "ribbon", "tada", "confetti_ball" ],
    directions: "After you touch the balloon, touch the item below the ribbon.",
    correctAnswer: [ 0, 3 ]
  },
  {
    emojis: [ "surfer", "runner", "horse_racing", "weight_lifter", "golfer" ],
    directions: "Touch the person below the surfer. After that touch the person above the golfer.",
    correctAnswer: [ 1, 3 ]
  },
  {
    emojis: [ "pencil2", "pencil2", "pencil2", "pencil2", "pencil2" ],
    directions: "Touch the pencil above the last pencil.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "large_blue_circle", "large_blue_diamond", "red_circle", "large_blue_circle", "small_red_triangle" ],
    directions: "Touch the shape below the last circle.",
    correctAnswer: [ 4 ]
  },
  {
    emojis: [ "eyes", "lips", "ear", "nose" ],
    directions: "Touch the ear then touch the item above the lips.",
    correctAnswer: [ 2, 0 ]
  },
  {
    emojis: [ "gem", "star", "sparkling_heart",  "droplet" ],
    directions: "Touch the heart and then touch the item below it.",
    correctAnswer: [ 2, 3 ]
  },
  {
    emojis: [ "tv", "wrench", "tv", "camera" ],
    directions: "Touch the item below the second T.V.",
    correctAnswer: [ 3 ]
  },
  {
    emojis: [ "tv", "star", "tv", "star", "tv" ],
    directions: "Touch the last star and then touch the item below it.",
    correctAnswer: [ 3, 4 ]
  },
  {
    emojis: [ "football", "baseball", "basketball", "baseball", "soccer" ],
    directions: "Touch the ball above the soccer ball. Next, touch the ball below the football.",
    correctAnswer: [ 3, 1 ]
  },
  {
    emojis: [ "grey_exclamation", "question", "grey_exclamation", "grey_question",  "question" ],
    directions: "Touch the item above the second question mark.",
    correctAnswer: [ 2 ]
  },
  {
    emojis: [ "football", "baseball", "basketball", "baseball", "soccer" ],
    directions: "After you touch the football, touch the third ball two times.",
    correctAnswer: [ 0, 2, 2 ]
  },
  {
    emojis: [ "rose", "sunflower", "cherry_blossom", "tulip", "hibiscus" ],
    directions: "Touch the fourth flower 2 times.",
    correctAnswer: [ 3, 3 ]
  },
  {
    emojis: [ "rose", "sunflower", "cherry_blossom", "tulip", "hibiscus" ],
    directions: "Touch the sunflower after you touch the first flower.",
    correctAnswer: [ 0, 1 ]
  },
  {
    emojis: [ "sun_with_face", "last_quarter_moon_with_face", "star2", "rain_cloud" ],
    directions: "Touch the sun after you touch the item below the moon.",
    correctAnswer: [ 2, 0 ]
  },
]

export { aboveAndBelow };
