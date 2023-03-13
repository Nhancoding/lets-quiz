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
    showQuestion(0)
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

var question = [
    {
        text: "1+1",
        choices: ["1","2","3","4"],
        correct:"2"
    },
    {
        text: "1+2",
        choices: ["1","2","3","4"],
        correct:"3"
    }
]

const showQuestion = (ind)=>{
    questionTextEl.textContent=question[ind].text;
    question[ind].choices.forEach(function (ans){
        var btn = document.createElement("button")
        btn.textContent=ans
        questionChoicesEl.appendChild(btn)
    })
}