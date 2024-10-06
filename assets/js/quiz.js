// Initial variables to keep track of quiz progress
let currentQuestion = 0;
let timeLeft = 20;
let timer;
let score = 0;
let questions = [
    {
      question: "ဘုရားဘယ်အရွယ်မှာတောထွက်တော်မူသနည်း။",
      options:  ["၁၉", '၃၀','၂၉'],
      answer: '၂၉'
    },
    {
      question: "အနတ္တလက္ခဏသုတ်ဟောကြားသောနေ့",
        options:  ["ဝါဆိုလပြည့်နေ့", 'ဝါဆိုလပြည့်ကျော် ၅ ရက်','ကဆုန်လပြည့်နေ့'],
        answer: 'ဝါဆိုလပြည့်ကျော် ၅ ရက်'
    },
    {
      question: "ကမ္ဘာ့မှာနိုင်ငံအပေါင်းဘယ်လောက်ရှိသလဲ?",
      options:  ["၁၉၃", '၁၅၃','၁၉၅'],
      answer: '၁၉၅'
    },
    {
      question: "သူလိုလူစာအုပ်ကိုမည်သူရေးသနည်း။",
      options: [
          "အကြည်တော်",
          "မြသန်းတင့်",
          "ဂျာနယ်ကျော်မမလေး",
          "ရွှေဥဒေါင်း"
      ],
      answer: "ဂျာနယ်ကျော်မမလေး"
    },
    {
      question: "၂၀၁၈ world cup အားမည်သည့်နိုင်ငံမှ ရရှိခဲ့သနည်း။",
      options: [
          "France",
          "Germany",
          "Poland",
          "Brazil"
      ],
      answer: "France"
    },
    {
      question: "အချစ်သာအမှန်တရားဖြစ်ရင် ကျွန်တော်မှားနေတာကြာပြီ စာအုပ်ကို ဘယ်သူရေးသနည်း။",
      options: ["ဂျူး" , "အောင်ချိမ့်", "အကြည်တော်", "မြသန်းတင့်"],
      answer: "အကြည်တော်"
    },
    {
      question: "ငရဲဆိုတာချိုနဲ့လာဗျို့ စာအုပ်ကို ဘယ်သူရေးသနည်း။",
      options: ["ဦးနု" , "အောင်ချိမ့်", "အကြည်တော်", "သိုးဆောင်း"],
      answer: "ဦးနု"
    },
    {
      question: "ဒေါ်အောင်ဆန်းစုကြည်သည် နိုဘယ်ဆုကို ဘယ်နှစ်ခုနှစ်တွင် ရရှိခဲ့ပါသလဲ?",
      options: ["၁၉၈၉", "၁၉၉၁", "၁၉၉၃", "၁၉၉၅"],
      answer: "၁၉၉၁"
    },
    {
      question: "ဆရာကြီးမင်းသုဝဏ်သည်မည်သည့်ဇာတိဖြစ်သနည်း?",
      options:  ["ကွမ်းခြံကုန်းမြို့", 'ဟင်္သာတမြို့','ရန်ကုန်မြို့'],
      answer: 'ကွမ်းခြံကုန်းမြို့'
    }
];

// Function to load questions from the HTML file
// function loadQuestions() {
//   const questionsData = document.getElementById("questions-data").textContent;
//   questions = JSON.parse(questionsData);
// }

// Function to start the quiz
function startQuiz() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  // Hide the start screen and show the quiz screen
  document.getElementById("start-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";



  // Shuffle the questions to randomize the quiz
  questions = shuffleArray(questions);

  // Display the first question
  displayQuestion();

  // Start the timer
  startTimer();
}

// Function to display a question and its options
function displayQuestion() {
  const questionContainer = document.getElementById("question");

  // Get the current question and its options
  const questionText = questions[currentQuestion].question;
  const options = questions[currentQuestion].options;

  // Create the HTML for the question and options
  const questionHtml = `
        <div class="question-number">Question ${currentQuestion + 1}:</div>
        <div class="question-text">${questionText}</div>
        <div class="options">
            ${options.map((option) => createOption(option)).join("")}
        </div>
    `;

  // Set the HTML inside the question container
  questionContainer.innerHTML = questionHtml;

  // Show the "Next" button after the question is displayed
  document.getElementById("next-question").style.display = "block";
}

// Function to create the HTML for an option
function createOption(option) {
  return `
        <div class="option">
            <input type="radio" name="answer" value="${option}"> ${option}
        </div>`;
}

// Function to start the countdown timer
function startTimer() {
  timer = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
    } else {
      clearInterval(timer);
      document.getElementById("time").textContent = "Time's up!";
      disableOptions();
      setTimeout(nextQuestion, 2000);
    }
  }, 1000);
}

// Function to check the selected answer
function checkAnswer() {
  clearInterval(timer); // Stop the timer
  const selectedAnswer = document.querySelector('input[name="answer"]:checked'); //option was already created, but added checked there for this answer
  const feedback = document.getElementById("feedback");

  if (!selectedAnswer) {
    feedback.textContent = "Please select an answer!";
    return;
  }

  const answer = selectedAnswer.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].answer}.`;
  }

  disableOptions();
  setTimeout(nextQuestion, 1000); // Move to the next question after a short delay
}

// Function to disable all options (used after the answer is selected or time runs out)
function disableOptions() {
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.disabled = true;
  });
}

// Function to move to the next question
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    timeLeft = 20; // Reset the timer
    displayQuestion(); // Show the next question
    startTimer(); // Start the timer again
    document.getElementById("feedback").textContent = "";
  } else {
    showResult(); // Show the result if the quiz is finished
  }
}

// Function to show the final result
function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  const username = document.getElementById("username").value;
  const percentage = (score / questions.length) * 100;

  let resultText;
  if (percentage >= 50) {
    resultText = `<span class="pass">You Pass!</span>`;
  } else {
    resultText = `<span class="fail">You Fail!</span>`;
  }

  document.getElementById("result").innerHTML = `
        ${username}, you scored ${score} out of ${questions.length}!<br>${resultText}`;
}

// Function to restart the quiz
function testAgain() {
  currentQuestion = 0;
  timeLeft = 20;
  score = 0;
  questions = shuffleArray(questions);

  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("feedback").textContent = "";

  displayQuestion();
  startTimer();
}

// Function to shuffle an array (used to randomize questions and options)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
