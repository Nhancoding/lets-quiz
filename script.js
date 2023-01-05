var startButton = document.getElementById("js-start-btn")
var questionContainer = document.getElementById("js-question-container")
var countdownEl = document.getElementById("js-countdown")
var questionTextEl = document.getElementById("js-question-text")
var questionChoicesEl = document.getElementById("js-question-choices")

//create an array of objects that represent questions and their answers

startButton.addEventListener("click", function () {
    console.log("Quiz start")
    //display question container by removing is-hidden class 
    questionContainer.classList.remove("is-hidden")
    startButton.classList.add("is-hidden")
    //create function that starts a timer countdown, and call it inside here
    startTimer()

})
var timerInterval;
var countdownTimer = 10
function startTimer() {
    timerInterval = setInterval(function () {
        
        countdownTimer--;
        countdownEl.textContent = countdownTimer
        if(countdownTimer === 0){
            clearInterval(timerInterval)
            //write code to run after game ends here

        }

        console.log(countdownTimer)

    }, 1000)

}

//global variables
//var questions = ["what is 2 + 2", "fsdfsdf"]
// var answers = [["2,3,4,5"], ["china", "costa rica," "canada", "chile"]]
// var correct = [2, 0]
// var timeLeft = 120
// var currentQuestion = 0

//function startGame()
// initialize first question
// start timer

// function checkAnswer()
// called when answer selected
//checkes if right or wrong
//deducts from timer if wrong
// maybe indicate to user if wrong
// call nextQuestion


// function next Question
// loads next question

// function endGame()
// triggered by last question being answeres or timer hit zero
// prompts for initials
// saves high score
//shows high scores
// play again button

