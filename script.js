const store = [
    questionNumberOne = {
    text: "Name the deceased bassist that was the original (and best ever) bass guitar player in the band Metallica:",
    correctAnswer: "Cliff Burton",
    wrongAnswerOne: "Geezer Butler",
    wrongAnswerTwo: "Lemmy Kilmister",
    wrongAnswerThree: "Jason Newsted"
  },
    questionNumberTwo = {
    text: "What Raggae artist was co-founder of the band The Wailers?",
    correctAnswer: "Bob Marley",
    wrongAnswerOne: "Barrington Levy",
    wrongAnswerTwo: "Rob Grill",
    wrongAnswerThree: "Billy Boyo"
  },
    questionNumberThree = {
    text: "The \'Big Four\' Thrash Metal bands that popularized the genre are Metallica, Megadeth, Anthrax and ________?",
    correctAnswer: "Slayer",
    wrongAnswerOne: "Venom",
    wrongAnswerTwo: "Mayhem",
    wrongAnswerThree: "Bathory"
  },
    questionNumberFour = {
    text: "What famous vocalist was fired from Black Sabbath in 1979 before starting his solo career?",
    correctAnswer: "Ozzy Osbourne",
    wrongAnswerOne: "Robert Plant",
    wrongAnswerTwo: "Peter Frampton",
    wrongAnswerThree: "Ted Nugent"
  },
    questionNumberFive = {
    text: "What band is largely credited with pioneering the Death Metal genre?",
    correctAnswer: "Death",
    wrongAnswerOne: "Possessed",
    wrongAnswerTwo: "Bolt Thrower",
    wrongAnswerThree: "Autopsy"
  },
    questionNumberSix = {
    text: "What is the most widely recognized nickname of the late lead guitarist Darrell Abbot of the band Pantera?",
    correctAnswer: "Dimebag",
    wrongAnswerOne: "Slash",
    wrongAnswerTwo: "Buckethead",
    wrongAnswerThree: "Diamond"
  },
    questionNumberSeven = {
    text: "With what band did famous singer Iggy Pop start his music career?",
    correctAnswer: "The Stooges",
    wrongAnswerOne: "Pink Floyd",
    wrongAnswerTwo: "The Animals",
    wrongAnswerThree: "Jefferson Airplane"
  },
    questionNumberEight = {
    text: "What prominent lead singer/lead guitarist duo came from the band Led Zeppelin?",
    correctAnswer: "Robert Plant and Jimmy Paige",
    wrongAnswerOne: "Bon Scott and Angus Young",
    wrongAnswerTwo: "Ozzy Osbourne and Tony Iommi",
    wrongAnswerThree: "Freddie Mercury and Brian May"
  },
    questionNumberNine = {
    text: "What vocalist pioneered his career in Heavy Metal after multiple attempts at leading Punk Rock bands such as The Misfits and Samhain?",
    correctAnswer: "Glenn Danzig",
    wrongAnswerOne: "James Hetfield",
    wrongAnswerTwo: "Phil Anselmo",
    wrongAnswerThree: "Max Cavalera"
  },
    questionNumberTen = {
    text: "What was the name of Jimi Hendrix' first band (hint: circa 1965)?",
    correctAnswer: "Jimmy James and the Blue Flames",
    wrongAnswerOne: "The Experience",
    wrongAnswerTwo: "The Who",
    wrongAnswerThree: "Velvet Underground"
  }
];

const nextButton = $('#next');
const startButton = $('#start');
const submitButton = $('#submit');
const introText = $('#introText');
const firstQuestion = $('#questionAnswerCard');
const scoreCard = $('#scoreCardVisibility');
let score = 0;
let currentQuestion = 1;

let questionNumber = 0;

function buttonSwitchStart() {
  startButton.addClass('invisible');
  submitButton.removeClass('invisible');
  introText.addClass('invisible');
  firstQuestion.removeClass('invisible');
  scoreCard.removeClass('invisible');
}

function buttonSwitchNext() {
  submitButton.addClass('invisible');
  nextButton.removeClass('invisible');
}

function buttonSwitchSubmit() {
  nextButton.addClass('invisible');
  submitButton.removeClass('invisible');
}

startButton.click(function(e) {
  e.preventDefault();
  buttonSwitchStart();
});

submitButton.click(function(e) {
  e.preventDefault();
  const correctAnswerPointer = store[questionNumber].correctAnswer;
  const greenAnswerTag = $('#greenCorrectAnswer');
  const redAnswerTag = $('#redWrongAnswer');
  const inputUserValue = $('input[name=chooseone]:checked').val();

  if (inputUserValue !== undefined) {
    buttonSwitchNext();
    if (inputUserValue === correctAnswerPointer) {
      greenAnswerTag.removeClass('invisible');
      score++;
      $('#score').replaceWith(`
        <div class="score" id="score">
        <h2>Score: ${score}/10</h2>
        </div>
      `);
    } else {
      redAnswerTag.removeClass('invisible');
    }
  } else {
    alert('Choose an answer before you click submit, Wastoid!');
  }
  
  console.log(inputUserValue);
  console.log(correctAnswerPointer);
});

nextButton.click(function(e) {
  e.preventDefault();
  buttonSwitchSubmit();
  questionNumber++;
  console.log(questionNumber);
  if (questionNumber === 10) {
    score = score * 10;
    $('#scoreCardVisibility').addClass('invisible');
    $('#questionAnswerCard').addClass('invisible');
    $('#introText').replaceWith(`
        <h1>Thanks for playing!<h1>
        <h1>Your Score: ${score}%</h1>
    `);
    $('#tryAgain').removeClass('invisible');
    $('#submit').addClass('invisible');
    $('#tryAgain').click(function(e) {
      e.preventDefault();
      location.reload();
    });
  }
  $('#question').replaceWith(`<div id="question"><h3>${store[questionNumber].text}</h3></div>`);
  
  const correctAnswerPointer = store[questionNumber].correctAnswer;
  const wrongAnswerOnePointer = store[questionNumber].wrongAnswerOne;
  const wrongAnswerTwoPointer = store[questionNumber].wrongAnswerTwo;
  const wrongAnswerThreePointer = store[questionNumber].wrongAnswerThree;

  currentQuestion++;
    $('#currentQuestion').replaceWith(`
      <div class="question-Number" id="currentQuestion">
      <h2>Question: ${currentQuestion}/10</h2>
      </div>
    `);

  if (questionNumber === 2 || questionNumber === 7 || questionNumber === 9) {
    $('#multipleChoice').replaceWith(`
    <div class="select-answer" id="multipleChoice">
      <input type="radio" name="chooseone" value="${wrongAnswerThreePointer}"><label for="${wrongAnswerThreePointer}">${wrongAnswerThreePointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerTwoPointer}"><label for="${wrongAnswerTwoPointer}">${wrongAnswerTwoPointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerOnePointer}"><label for="${wrongAnswerOnePointer}">${wrongAnswerOnePointer}</label><br>
      <input type="radio" name="chooseone" value="${correctAnswerPointer}"><label for="${correctAnswerPointer}">${correctAnswerPointer}</label>
    </div>
  `);
  } else if (questionNumber === 4 || questionNumber === 6) {
    $('#multipleChoice').replaceWith(`
    <div class="select-answer" id="multipleChoice">
    <input type="radio" name="chooseone" value="${correctAnswerPointer}"><label for="${correctAnswerPointer}">${correctAnswerPointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerThreePointer}"><label for="${wrongAnswerThreePointer}">${wrongAnswerThreePointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerTwoPointer}"><label for="${wrongAnswerTwoPointer}">${wrongAnswerTwoPointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerOnePointer}"><label for="${wrongAnswerOnePointer}">${wrongAnswerOnePointer}</label>
    </div>
  `);
  } else if (questionNumber === 1 || questionNumber === 8 || questionNumber === 3) {
    $('#multipleChoice').replaceWith(`
    <div class="select-answer" id="multipleChoice">
      <input type="radio" name="chooseone" value="${wrongAnswerThreePointer}"><label for="${wrongAnswerThreePointer}">${wrongAnswerThreePointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerTwoPointer}"><label for="${wrongAnswerTwoPointer}">${wrongAnswerTwoPointer}</label><br>
      <input type="radio" name="chooseone" value="${correctAnswerPointer}"><label for="${correctAnswerPointer}">${correctAnswerPointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerOnePointer}"><label for="${wrongAnswerOnePointer}">${wrongAnswerOnePointer}</label>
    </div>
    `);
  } else {
    $('#multipleChoice').replaceWith(`
    <div class="select-answer" id="multipleChoice">
      <input type="radio" name="chooseone" value="${wrongAnswerOnePointer}"><label for="${wrongAnswerOnePointer}">${wrongAnswerOnePointer}</label><br>
      <input type="radio" name="chooseone" value="${correctAnswerPointer}"><label for="${correctAnswerPointer}">${correctAnswerPointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerTwoPointer}"><label for="${wrongAnswerTwoPointer}">${wrongAnswerTwoPointer}</label><br>
      <input type="radio" name="chooseone" value="${wrongAnswerThreePointer}"><label for="${wrongAnswerThreePointer}">${wrongAnswerThreePointer}</label>
    </div>
  `);
  }
  $('#greenCorrectAnswer').addClass('invisible');
  $('#redWrongAnswer').addClass('invisible');
  return questionNumber;
});
