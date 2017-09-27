// var number = 31000
// var numberNormal = number / 1000;

//var qs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var intervalId;

// var possChoice;
// var possAnsA;
// var possAnsB;
// var possAnsC;
// var possAnsD;

// var grandpa;

// $("#stop").on("click", stop);

// $("#resume").on("click", run);

// function reset() {
//   number = 30000;
//   numberNormal = number / 1000;
//   $("#time").html(numberNormal);
//   run();
// }

//begin countdown
// function run() {
//   intervalId = setInterval(decrement, 1000);
// }

//number by which time counts down, runs stop at 0
// function decrement() {
//   numberNormal--;
//   $("#time").html(numberNormal);
//   if (numberNormal === 0) {
//     stop();
//     loser();
//   }
// }

//you lose message and image/answer populate when you lose
// function loser() {
//   $("#question").empty().append("<img src='assets/images/answer1img.png' width='200px'>");
//   $(".choices").empty().append('Sorry! ' + qAndA.screen.screen1);
//   console.log("nooooo");
//   stop();
//   next();
// }

//congrats messgae and image/answer populate when you win
// function winner() {
//   $("#question").empty().append("<img src='assets/images/answer1img.png' width='200px'>");
//   $(".choices").empty().append('Great job! ' + qAndA.screen.screen1);
//   console.log("yippee");
//   stop();
//   next();
// }

//begin subsequent question
// function next() {
//   intervalId = setTimeout(reset, 5000);

// }

//first question and set of answer choices appear
// function appear1() {
//   $("#question").html(qAndA.questions.question1);

//   $("#choice1").html(qAndA.answers.answer1.answer1a);
//   $("#choice2").html(qAndA.answers.answer1.answer1b);
//   $("#choice3").html(qAndA.answers.answer1.answer1c);
//   $("#choice4").html(qAndA.answers.answer1.answer1d);

//   $(".radio2").attr("class", "correct");
// }

//if correct answer chosen run winner
// $("input").on("click", function () {
//   if ($(":radio.correct").is(":checked")) {
//     console.log("yay");
//     winner();
//   }
// });

// //if incorrect answer chosen run loser
// $("input").on("click", function () {
//   if (($(":radio").not(".correct")).is(":checked")) {
//     console.log("newp");
//     loser();
//   }
// });

//stop countdown -- now in new object
// function stop() {
//   clearInterval(intervalId);
// }

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
      screen: "",
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
      screen: "",
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
      screen: "",
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
      screen: "",
      correct: 3
    },
    {
      title: "6. Cooking and gardening are hobbies of which Sailor Scout?",
      answers: [
        " A. Sailor Moon — Usagi Tsukino",
        " B. Sailor Venus — Minako Aino",
        " C. Sailor Mercury — Ami Mizuno",
        " D. Sailor Jupiter — Makoto Kino"
      ],
      screen: "",
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
      screen: "",
      correct: 0
    },
    {
      title: "8. What is Sailor Moon's heroic love interest?",
      answers: [
        " A. Tuxedo Man",
        " B. Tuxedo Maiden",
        " C. Tudedo Mask",
        " D. Tuxedo Mormont"
      ],
      screen: "",
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
      screen: "",
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
      screen: "",
      correct: 3
    }
  ], //end questions array

  //number: 31000,
  numberNormal: 10000 / 1000,
  // intervalId: 0,
  currentQuestion: 0,
  intervalId: setInterval(this.decrement, 1000),

  // reset: function() {
  //   this.number = 30000;
  //   $("#time").html(game.numberNormal);
  //   game.run();
  // },

  //begin countdown
  run: function() {
    intervalId = setInterval(this.decrement, 1000);
  },

  //stop countdown
  stop: function() {
    clearInterval(game.intervalId);
    console.log(game.numberNormal);
  },

  decrement: function() {
    $("#time").text(game.numberNormal);
    // console.log(game.numberNormal);
    game.numberNormal--;
    if (game.numberNormal === 0) {
      game.stop();
      game.loser();
    }
  },

  loser: function() {
    $("#question").empty().append("<img src='assets/images/answer1img.png' width='200px'>");
    $(".choices").empty().append('Sorry! ' + game.questions[0].screen);
    console.log("nooooo");
    // game.stop();
    game.next();
  },

  winner: function() {
    $("#question").empty().append("<img src='assets/images/answer1img.png' width='200px'>");
    $(".choices").empty().append('Great job! ' + game.questions[0].screen);
    console.log("yippee");
    game.stop();
    // game.next();
  },

  next: function() {
    this.intervalId = setTimeout(game.reset, 5000);
  },

  changeQuestion: function() {
    if (this.currentQuestion === this.questions.length) {
      //game over
    } else {
      this.currentQuestion++;
    }
  },

  appear: function() {
    $("#question").html(game.questions[0].title);

    $("#choice1").html(game.questions[0].answers[0]);
    $("#choice2").html(game.questions[0].answers[1]);
    $("#choice3").html(game.questions[0].answers[2]);
    $("#choice4").html(game.questions[0].answers[3]);
  }

} //end object

//some notes
//gameObject.startGame(document.getElementById('app'));
//render, utilities, aggregate functions

game.run();
game.appear();

