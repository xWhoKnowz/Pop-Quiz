var quiz = [
    {
        question: "In Dragon Ball, which of the Dragon Balls did Grandpa Gohan leave to Goku as a momento?",
        choices: ["Two Star Ball", "Four Star Ball", "Five Star Ball", "Seven Star Ball"],
        correctAnswer: "Four Star Ball"

    },

    {
        question: "In Dragon Ball, what iconic move does Goku learn after bringing Master Roshi to Fire Mountain?",
        choices: ["Afterimage Technique", "Solar Flare", "Kamehameha Wave", "Thunder Shock Surprise"],
        correctAnswer: "Kamehameha Wave"
    },

    {
        question: "In Dragon Ball, who does Goku train alongside under the tutelage of Master Roshi?",
        choices: ["Yamcha", "Krillin", "Tien Shienhan", "Chiaotzu"],
        correctAnswer: "Krillin"
    },

    {
        question: "In Dragon Ball, which member of the notorious Red Ribbon Army does Goku befriend?",
        choices: ["Geneneral Blue", "Colonel Silver", "General White", "Eighter the Android"],
        correctAnswer: "Eighter the Android"
    },

    {
        question: "In Dragon Ball, what move is used by Master Mutaito to defeat Demon King Piccolo",
        choices: ["Kamehameha Wave", "Dodon Ray", "Evil Containment Wave", "Wolf Fang Fist"],
        correctAnswer: "Evil Containment Wave"

    }
]

var indexArray = 0
var timer = document.getElementById('score-keeper')
var timerQuant = 60



console.log(quiz[indexArray]);
// Here I need to clear the intial html once the user clicks the start quiz button
// I then need to create and append the questionOne object's data to the viewport
// the question will need to be in a p tag
// the choices will need to be an ul of buttons

// * selects the start-quiz id which is tied to the "start quiz" button then adds a click event listener with a corresponding anon function

document.getElementById("start-quiz").addEventListener("click", function () {

    // * the anon function on click of the "start quiz" button adds below the hidden class to the intial section of the html which houses the start page. Then it removes the hidden class from the section tied to the "questions" id so that the elements created below will appear in that section after being appended"

    document.getElementById("db-quiz").classList.add("hidden")

    document.getElementById("questions").classList.remove("hidden")

    // *calls the questions function upon inital click to start the quiz
    quizTimer()
    questions()
})

timer.textContent = timerQuant + " seconds left."

function quizTimer() {
    var scoreInterval = setInterval(function () {
        timerQuant--;
        timer.textContent = timerQuant + " seconds left.";

        if (timerQuant === 0 || indexArray >= 5) {
            clearInterval(scoreInterval)
        }

    }, 1000)
}


function questions() {

    // * function starts by clearing the the html created in the below variables to make room for newly created/appended elements 

    document.getElementById("questions").innerHTML = ("")

    // * creates variables housing the h3 / ul elements to hold the question text as well as a container for the li buttons created in the below for loop

    var h3El = document.createElement("h3")
    var ulEl = document.createElement("ul")

    // * creates/sets the class of choices to the ulEl so we can target it with an id selector

    ulEl.setAttribute("class", "choices")

    // * sets the text content of of the h3El to the questions property of the quiz arrays current index represented by the indexArray variable which by default is 0 representing the intial object of the quiz array. Later the index array will iterate to to the later indices of the quiz array

    h3El.textContent = quiz[indexArray].question
    // * targets the questions id and appends the h3El to section the id belongs too

    document.getElementById("questions").appendChild(h3El)

    //  * for loop itterates over the the choices properties found in the different indices of the quiz array. the index array variable below is currently set to the 0 index but will later be iterated over so every time the questions function is run on click it will move down the indices

    for (let i = 0; i < quiz[indexArray].choices.length; i++) {

        // * below is the execution block for the above for loop; it creates a variable that houses the button elements, and creates text content based on the choices property of the current index of the quiz array, then appends the buttons to the ulEl

        var buttonEl = document.createElement("button")
        buttonEl.textContent = quiz[indexArray].choices[i]
        ulEl.appendChild(buttonEl);

    }
    // * after the buttons are created and appended tp the ulEl in the above for loop the below appends the ulEl to the section for the quiz question and answers by targeting the questions id tied to that section

    document.getElementById("questions").appendChild(ulEl)

    // *below uses a query selector to target the choices class then adds a click event listener with a corresponding event function. the function uses the target property with the matches method on the vent param to make sure that the logic that follows only runs if a button is clicked 

    document.querySelector(".choices").addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            console.log(event.target.textContent);

            indexArray++
            questions()
        } if (event.target.textContent !== quiz[indexArray].correctAnswer.textContent) {
            timerQuant -= 10
            timer.textContent = timerQuant + " seconds left.";
        }

        // Todo Check right vs wrong answers
        console.log(quiz[indexArray]);
        console.log(quiz[indexArray].correctAnswer);


        // else {
        //     document.getElementById("questions").innerHTML = ("")

        // }
    })


    // todo add logic for score/initial to be stored to local storage

}

// I then need to repeat this process for the remaining 4 objects in the quiz array until the user can navigate through all 5 questions and reach the score keeper page