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
        question: "In Dragon Ball, who does Son Goku train alongside under the tutelage of Master Roshi?",
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


console.log(quiz[indexArray]);
// Here I need to clear the intial html once the user clicks the start quiz button
// I then need to create and append the questionOne object's data to the viewport
// the question will need to be in a p tag
// the choices will need to be an ul of buttons


document.getElementById("start-quiz").addEventListener("click", function(){
    
    document.getElementById("db-quiz").classList.add("hidden")
    document.getElementById("questions").classList.remove("hidden")

    console.log("Hello");
})

function questions (){
    var h1El = document.createElement("h1")
    h1El.textContent = quiz[indexArray].question
    document.getElementById("questions").appendChild(h1El)
    
    for (let i = 0; i < quiz[indexArray].choices.length; i++) {
        
        var buttonEl = document.createElement("button")
        buttonEl.textContent = quiz[indexArray].choices[i]
        document.getElementById("questions").appendChild(buttonEl);
       
    }
    console.log(quiz[indexArray]);
}

questions()
indexArray++
// I then need to repeat this process for the remaining 4 objects in the quiz array until the user can navigate through all 5 questions and reach the score keeper page