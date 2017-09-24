//id time
//id question
//id question1–4

var number = 31000
var numberNormal = number / 1000;

var qs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var intervalId;

var possChoice;
var possAnsA;
var possAnsB;
var possAnsC;
var possAnsD;

$("#stop").on("click", stop);

$("#resume").on("click", run);

//begin countdown
function run() {
  intervalId = setInterval(decrement, 1000);
}

//number by which time counts down, runs stop at 0
function decrement() {
  numberNormal--;
  $("#time").html(numberNormal);
  if (numberNormal === 0) {
    stop();
    loser();
    //add img/answer reveal, next button
  }
}

//you lose message and image/answer populate when you lose
function loser() {
  
}

//congrats messgae and image/answer populate when you win
function winner() {
  $("#question").empty();
  console.log("yippee");
}

//stop countdown
function stop() {
  clearInterval(intervalId);
}

//first question and set of answer choices appear
function appear1() {
  $("#question").html(qAndA.questions.question1);

  $("#choice1").html(qAndA.answers.answer1.answer1a);
  $("#choice2").html(qAndA.answers.answer1.answer1b);
  $(".radio2").attr("class", "correct");
  $("#choice3").html(qAndA.answers.answer1.answer1c);
  $("#choice4").html(qAndA.answers.answer1.answer1d);
}

// click next button to continue
// $("#next").on("click", function() {
  
// }

//if correct answer chosen run winner
$("input").on("click", function () {
  if ($(":radio.correct").is(":checked")) {
    console.log("yay");
    winner();
  } else {
 }
});

//big object
var qAndA = {
	questions: {
		question1: 'Which Sailor Scout was named "Blue" in the Dic pitch video for dubbing and broadcasting Sailor Moon in the United States?',
		question2: "2. In the Dic dub of Sailor Moon, what is Nephlite's human-disguise alter ego's name?",
		question3: "3. What is the name of the evil queen in the first season story arc?",
		question4: "4. Usagi, Sailor Moon's normal-teenage-girl name, means what in Japanese?",
		question5: "",
		question6: "",
		question7: "",
		question8: "",
		question9: "",
		question10: ""
	},
	answers: {
		answer1: {
			answer1a: " A. Sailor Mars",
			answer1b: " B. Sailor Mercury",
			answer1c: " C. Sailor Jupiter",
			answer1d: " D. Sailor Venus"
		},
		answer2: {
			answer2a: " A. Macaulay Culkin",
			answer2b: " B. Maxfield Stanton",
			answer2c: " C. Maxwell Caulfield",
			answer2d: " D. Holden Caulfield"
		},
		answer3: {
			answer3a: " A. Queen Barrell",
			answer3b: " B. Queen Emerald",
			answer3c: " C. Queen Beryl",
			answer3d: " D. Queen Barra"
		},
		answer4: {
			answer4a: " A. Bunny",
			answer4b: " B. Kitten",
			answer4c: " C. Moon",
			answer4d: " D. Cupcake"
		},
		answer5: {
			answer5a: " A. ",
			answer5b: " B. ",
			answer5c: " C. ",
			answer5d: " D. "
		},
		answer6: {
			answer6a: " A. ",
			answer6b: " B. ",
			answer6c: " C. ",
			answer6d: " D. "
		},
		answer7: {
			answer7a: " A. ",
			answer7b: " B. ",
			answer7c: " C. ",
			answer7d: " D. "
		},
		answer8: {
			answer8a: " A. ",
			answer8b: " B. ",
			answer8c: " C. ",
			answer8d: " D. "
		},
		answer9: {
			answer9a: " A. ",
			answer9b: " B. ",
			answer9c: " C. ",
			answer9d: " D. "
		},
		answer10: {
			answer10a: " A. ",
			answer10b: " B. ",
			answer10c: " C. ",
			answer10d: " D. "
		}
	}
}//end qAndA object

run();
appear1();
