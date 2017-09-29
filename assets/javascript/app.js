//trivia game
// var intervalId;
//problem with hiding answer choices/emptying answer blurb for next Q

var game = {
  questions: [
    {
      title: '1. Which Sailor Scout is super brainy and hopes to be a doctor someday?',
      answers: [
        " A. Sailor Mars — Rei Hino",
        " B. Sailor Mercury — Ami Mizuno",
        " C. Sailor Jupiter — Makoto Kino",
        " D. Sailor Venus — Minako Aino"
      ],
      image: "<img src='assets/images/answer0img.png' width='200px'>",
      screen: "Sailor Mercury (Ami) wants to be a doctor like her mother. She loves to read, study, and play chess.",
      correct: 1
    },
    {
      title: "2. In the '90s English dub of Sailor Moon, what is Nephrite's human-disguise alter ego's name?",
      answers: [
        " A. Macaulay Culkin",
        " B. Maxfield Stanton",
        " C. Maxwell Caulfield",
        " D. Holden Caulfield"
      ],
      image: "<img src='assets/images/answer1img.jpg' width='200px'>",
      screen: "It's Maxfield Stanton. Yeah. I know. What the hell.",
      correct: 1
    },
    {
      title: "3. What is the name of the evil queen in the first season story arc?",
      answers: [
        " A. Queen Barrell",
        " B. Queen Emerald",
        " C. Queen Beryl",
        " D. Queen Barra"
      ],
      image: "<img src='assets/images/answer2img.jpg' width='200px'>",
      screen: "Beryl, like the gem, not Barra as my ignorant 7-year-old ears understood it.",
      correct: 2
    },
    {
      title: "4. Usagi, Sailor Moon's normal-teenage-girl name, means what in Japanese?",
      answers: [
        " A. Bunny",
        " B. Kitten",
        " C. Moon",
        " D. Cupcake"
      ],
      image: "<img src='assets/images/answer3img.jpg' width='200px'>",
      screen: "She likes to eat cupcakes, and she has a cat, and her alias is Sailor Moon/The Moon Princess, but her name means Bunny!",
      correct: 0
    },
    {
      title: "5. What is Rei Hino's (Sailor Mars) job?",
      answers: [
        " A. lifeguard",
        " B. waitress",
        " C. video game store clerk",
        " D. shrine maiden"
      ],
      image: "<img src='assets/images/answer4img.jpg' width='200px'>",
      screen: "Rei is a beautiful and mysterious shrine maiden at a Shinto shrine in Tokyo.",
      correct: 3
    },
    {
      title: "6. Cooking is a hobby of which Sailor Scout?",
      answers: [
        " A. Sailor Moon — Usagi Tsukino",
        " B. Sailor Venus — Minako Aino",
        " C. Sailor Mercury — Ami Mizuno",
        " D. Sailor Jupiter — Makoto Kino"
      ],
      image: "<img src='assets/images/answer5img.jpg' width='200px'>",
      screen: 'Makoto\'s favorite hobby is cooking and she\'s really good at it!',
      correct: 3
    },
    {
      title: "7. Before becoming Sailor Venus, Minako Aino was out fighting crime solo as:",
      answers: [
        " A. Sailor V",
        " B. Sailor M",
        " C. Sailor Earth",
        " D. Sailor Z"
      ],
      image: "<img src='assets/images/answer6img.png' width='200px'>",
      screen: "She\'s quite famous in the series before becoming Sailor Venus — there\'s even an arcade game that happens to be one of Usagi\'s favorites!",
      correct: 0
    },
    {
      title: "8. What is the name of Sailor Moon's heroic love interest?",
      answers: [
        " A. Tuxedo Man",
        " B. Tuxedo Maiden",
        " C. Tuxedo Mask",
        " D. Tuxedo Mormont"
      ],
      image: "<img src='assets/images/answer7img.jpg' width='200px'>",
      screen: "One of the weirdest hero names ever. But masks are sexy, I mean right??",
      correct: 2
    },
    {
      title: "9. Which is one of Luna's (Usagi/Sailor Moon's cat) computer passwords?",
      answers: [
        " A. I like tuna fish and field mouse pudding.",
        " B. I like crabby patties and jellyfish jelly",
        " C. I like salmon cakes and cricket soup",
        " D. I like tortillas and gluten free pizza"
      ],
      image: "<img src='assets/images/answer8img.jpg' width='200px'>",
      screen: "IN THE \'90s DUB, OK?! This one's really silly, sorry.",
      correct: 0
    },
    {
      title: "10. What is the Negaverse after?",
      answers: [
        " A. RICHESSSSS",
        " B. POWERRRRRR",
        " C. TACOSSSSSS",
        " D. ENERGYYYYY"
      ],
      image: "<img src='assets/images/answer9img.png' width='200px'>",
      screen: '"HUMANS expend VAST amounts of ENERGYYYYY doing _______!" is said in basically every monster-of-the-week episode.',
      correct: 3
    }
  ], //end questions array
  intervalId: 0,
  numberNormal: 30000 / 1000,
  currentQuestion: -1,
  numbers: [1, 2, 3, 4],

  //begin countdown
  initialize: function() {
    intervalId = setInterval(this.decrement, 1000);
  },

  decrement: function() {
  	console.log("decrementing");
    $("#time").html(game.numberNormal);
    game.numberNormal--;
    if (game.numberNormal === 0) {
      game.loser();
    }
  },

  loser: function() {
    clearInterval(intervalId);
    $("#question").empty().append(game.questions[game.currentQuestion].image);
    $("#question").empty().append('Sorry! ' + game.questions[game.currentQuestion].screen);
    console.log("nooooo");
    game.next();
  },

  winner: function() {
    clearInterval(intervalId);
    $("#question").empty().append(game.questions[game.currentQuestion].image);

    for (var i = 0; i < game.numbers.length + 1; i++) {
      $(".num" + game.numbers[i]).empty();
    }

    var blurb = $("<div>");
    blurb.appendTo($(".choices")).html('Great job! ' + game.questions[game.currentQuestion].screen);
    console.log("yippee");
    game.next();
  },

  next: function() {
    intervalId = setTimeout(game.render, 5000);
  },

  render: function() {
    game.currentQuestion++;
    if (game.currentQuestion > 0) {
      game.numberNormal = 30000 / 1000;
      game.initialize();
      console.log("initialized");
    }

    $(".blurb").empty();
    $("#time").html(game.numberNormal);

    var c = game.questions[game.currentQuestion].correct;
    game.questions[game.currentQuestion].answers[c];
    console.log(c + "HELLA");

    $(".radio" + c).addClass("correct");
    $("#question").html(game.questions[game.currentQuestion].title);

    $("#choice1").append(game.questions[game.currentQuestion].answers[0]);
    console.log(game.questions[game.currentQuestion].answers[0]);
    console.log(game.currentQuestion + "NO DOUBT");
    $("#choice2").append(game.questions[game.currentQuestion].answers[1]);
    $("#choice3").append(game.questions[game.currentQuestion].answers[2]);
    $("#choice4").append(game.questions[game.currentQuestion].answers[3]);
  }
} //end object

//click functions
//if correct answer chosen run winner
$("input").on("click", function () {
  if ($(":radio.correct").is(":checked")) {
    console.log("yay");
    game.winner();
  }
});

//if incorrect answer chosen run loser
$("input").on("click", function () {
  if (($(":radio").not(".correct")).is(":checked")) {
    console.log("newp");
    game.loser();
  }
});

game.initialize();
game.render();

