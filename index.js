const rlSync = require('readline-sync');
const chk = require('chalk');
const log = (console.log);
var score=0;

function welcomeMsg(){
  log(chk.bgCyan("************HTML Quiz Game************"));
  var goodName = rlSync.question("What is your  name? ");
  log(chk.bold.underline.green("Welcome "+ goodName + " to the Frontend Quiz Game!!!"))
  log(chk.red("Note: select the answer type the options from the question"))
  console.log("Lets Start the Quiz!!!");
  log(chk.green("-------------------------"))
}


function play(question,answer){
  var userAnswer = rlSync.question(question)

  if(userAnswer===answer){
    log(chk.bgGreen.black("Congratulations! correct answer..."));
    score++;
  }
  else{
    log(chk.bgRed.black("Ohh no that's the wrong answer..."));
  }
  log(chk.cyan("Current Score: " + score));
  log(chk.green("-------------------------"))
}



var questions = [

  
  
  {
    question: "What is the full form of UI ? \na) User Inheritance \nb) User Interface \nc) User Image\nAnswer:-",
    answer: "b",
  },
{
    question: "What does HTML stands for? \na) Hypertext Machine language \nb) Hypertext and links markup language \nc) Hypertext Markup Language\nAnswer:-",
    answer: "c",
  },
  {
    question: "What is the full form of UX ? \na) User Experience \nb) User Xerox \nc) User x \nAnswer:-",
    answer: "a",
  },  

  { 
    question: "How many heading tags are there in HTML5? \na) 2 \nb) 5 \nc) 6 \nAnswer:-",
    answer: "c",
  },

  {
    question: "Which of the following attributes is used to add link to any element? \na) link \nb) href \nc) ref \nAnswer:-",
    answer: "b",
  },

  {
    question: "What is the purpose of using div tags in HTML? \na) For creating Different styles \nb) For creating different sections. \nc) For adding headings. \nAnswer:-",
    answer: "b",
  }, 
  
  {
    question: 'Which among the following is correct HTML code for making a checkbox? \na) <input type="checkbox"> \nb) <checkbox> \nc) <input type="check">. \nAnswer:-',
    answer: "a",
  },

  {
    question: "Which of the following tags is used to add a line-break in HTML? \na) <break> \nb) <br> \nc) </br>. \nAnswer:-",
    answer: "b",
  },

  {
    question: "What is the correct sequence of HTML tags for starting a webpage? \na) Head, Title, HTML \nb) Title, Head, HTML \nc) HTML, Head, Title \nAnswer:-",
    answer: "c",
  },
  {
    question: "Choose the correct HTML tag for the largest heading. \na) H1 \nb) Heading \nc) H6 \nAnswer:-",
    answer: "a",
  },
]

function game(){
  for(var i=0;i<questions.length;i++){

    play(questions[i].question,questions[i].answer)
  }
}



var highScore = [
  {
    name: "Ram",
    score: "10"
  },
  {
    name: "Shyam",
    score: "9"
  }
]

function leaderBoard(){
  log(chk.cyan("Highest Scores"))
  highScore.map(score => log(score.name, " : ", score.score))
  log(chk.green("-------------------------"))
  log(chk.red("Check out the high scores, if you should be there ping me and I'll update it"));
  log(chk.green("-------------------------"))
  log(chk.bgCyan.bold("Yor Final Score Of The Quiz is "+score+"."));
  log(chk.green("Thanks For Playing!"))  

}

welcomeMsg();
game();
leaderBoard();


