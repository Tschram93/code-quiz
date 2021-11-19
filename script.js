// Selectors
const options = document.querySelector('#options');
const nextBtn = document.querySelector('#nextBtn');
const questionBox = document.querySelector('#questionBox');
const questionText = document.querySelector('#questionText');
const startBtn = document.querySelector('#startBtn');

// Event Listeners
startBtn.addEventListener('click', startQuiz)


// Functions to:

// startQuiz
function startQuiz() {
    startBtn.classList.add('hide')
    questionBox.classList.remove('hide')
    nextQue()
}

// nextQue
function nextQue() {

}

// Selection an option for the question being asked
function selectOption() {

}

//

let questions = [{
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
        ],
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