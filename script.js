// Selectors
const optionsList = document.querySelector('#optionsList');
const nextBtn = document.querySelector('#nextBtn');
const questionBox = document.querySelector('#questionBox');
const questionText = document.querySelector('#questionText');
const ruleCard = document.querySelector('#ruleCard');
const startBtn = document.querySelector('#startBtn');
const timer = document.querySelector('#timer');

// Event Listeners
startBtn.addEventListener('click', startQuiz)

nextBtn.addEventListener('click', () => {
    queIndex++;
    nextQue();
})

// Functions to:

// randomize question order
let randomQue, queIndex;

// timer

setInterval(updateTimer, 1000);

const startingMinutes = 2.5; //2 min 30 seconds

let time = startingMinutes * 60; // 60 seconds

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${minutes}: ${seconds}`;
    time--;
}

// Subtract 20 seconds from timer
function subtractTime() {

}

// startQuiz
function startQuiz() {
    startBtn.classList.add('hide')
    ruleCard.classList.add('hide')
    randomQue = questions.sort(() => Math.random() - 0.5)
    queIndex = 0;
    questionBox.classList.remove('hide')
    nextQue()
    updateTimer()
}

// nextQue
function nextQue() {
    clearQuestionBox()
    displayQuestion(randomQue[queIndex])
}

// Displays the question into the questionText
function displayQuestion(questions) {
    questionText.innerText = questions.question
    questions.options.forEach(options => {
        const button = document.createElement('button');
        button.innerText = options.option;
        // console.log(options.option)
        button.classList.add('btn')
        if (options.correct) {
            button.dataset.correct = options.option.correct
        }
        button.addEventListener('click', selectOption)
        optionsList.appendChild(button)
    });
}

// Selection an option for the question being asked
function selectOption(e) {
    const desiredOption = e.target;
    const correct = desiredOption.dataset.correct;
    answerCheck(document.body, correct)
    Array.from(optionsList.children).forEach(button => answerCheck(button, button.dataset.correct))
    if (randomQue.length > queIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart';
    }
}

function answerCheck(element, correct) {
    clearClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearClass(element) {
    nextBtn.classList.add('hide')
    // clearClass()
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

//gets rid of default QuestionBox buttons and replaces with new.
function clearQuestionBox() {
    clearClass(document.body)
    nextBtn.classList.add('hide')
    while (optionsList.firstChild) {
        optionsList.removeChild(optionsList.firstChild)
    }
}


const questions = [{
        num: 1,
        question: ' Where is the correct location to insert javascript into the HTML ',
        options: [{
                option: `body section`,
                correct: false
            },
            {
                option: `head section`,
                correct: false
            },
            {
                option: `With the html tag`,
                correct: false
            },
            {
                option: `Both the head and body are correct`,
                correct: true
            }
        ]
    },

    {
        num: 2,
        question: ' How is "Hello World" written to be displayed in an alert box? ',
        options: [{
                option: `alertBox="Hello World"`,
                correct: false
            },
            {
                option: `alertBox("Hello World")`,
                correct: false
            },
            {
                option: `msgBox("Hello World")`,
                correct: false
            },
            {
                option: `alert("Hello World")`,
                correct: true
            }
        ]
    },
    {
        num: 3,
        question: ` Which is not a valid operator?`,
        options: [{
                option: '+=',
                correct: false
            },
            {
                option: `++`,
                correct: false
            },
            {
                option: `==`,
                correct: false
            },
            {
                option: `=+`,
                correct: true
            }
        ],
    },
    {
        num: 4,
        question: `How does a "for" loop start?`,
        options: [{
                option: `for (i <= 5; i++)`,
                correct: false
            },
            {
                option: `for (i = 0; i <= 5; i++)`,
                correct: true
            },
            {
                option: `for (i = 0; i <= 5)`,
                correct: false
            },
            {
                option: `for (i <= 5; i++)`,
                correct: false
            }
        ]
    },
    {
        num: 5,
        question: `How do you call a function named "myFunction"?`,
        options: [{
                option: `call function myFunction`,
                correct: false
            },
            {
                option: `call.myFunction()`,
                correct: false
            },
            {
                option: `myFunction()`,
                correct: true
            },
            {
                option: `call myFunction()`,
                correct: false
            }
        ]
    },
    {
        num: 6,
        question: `The majority of a typical Web document will be found in:`,
        options: [{
                option: `title tag`,
                correct: false
            },
            {
                option: `head tag`,
                correct: false
            },
            {
                option: `comment tag`,
                correct: false
            },
            {
                option: `body tag`,
                correct: true
            }
        ]
    },
    {
        num: 7,
        question: ` In JavaScript, which of the following is a logical operator?`,
        options: [{
                option: `&&`,
                correct: true
            },
            {
                option: `|`,
                correct: false
            },
            {
                option: `%`,
                correct: false
            },
            {
                option: `/`,
                correct: false
            }
        ],
        answer: `&&`
    },
    {
        num: 8,
        question: `When you want to use JavaScript to manipulate the currently displayed Web page, the Web page's JavaScript object name is:`,
        options: [{
                option: `Frame`,
                correct: false
            },
            {
                option: `Window`,
                correct: false
            },
            {
                option: `Document`,
                correct: true
            },
            {
                option: `browser_window`,
                correct: false
            }
        ]
    },
    {
        num: 9,
        question: `In a form, if you want users to select only one option out of many, use:`,
        options: [{
                option: `Text Boxes`,
                correct: false
            },
            {
                option: `Check Boxes`,
                correct: false
            },
            {
                option: `Radio Buttons`,
                correct: true
            },
            {
                option: `Either A or B`,
                correct: false
            }
        ]
    },
    {
        num: 10,
        question: `How do you write a conditional statement for executing some statements only if "i" is NOT equal to 5?`,
        options: [{
                option: `if (i != 5)`,
                correct: true
            },
            {
                option: `if <>5`,
                correct: false
            },
            {
                option: `if (i <> 5)`,
                correct: false
            },
            {
                option: `if =! 5 then`,
                correct: false
            }
        ]
    }
];