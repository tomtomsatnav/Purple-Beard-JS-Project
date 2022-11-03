const Questions = [
  {
    x: 0,
    q: "What year did Atlas by Parkway Drive come out?",
    a: [
      { text: "2011", isCorrect: false },
      { text: "2010", isCorrect: false },
      { text: "2012", isCorrect: true },
      { text: "2009", isCorrect: false },
    ],
  },
  {
    x: 1,
    q: "What is the lead singer of Bring Me The Horizons name?",
    a: [
      { text: "James Hetfield", isCorrect: false },
      { text: "Corey Taylor", isCorrect: false },
      { text: "Lars Ulrich", isCorrect: false },
      { text: "Oli Sykes", isCorrect: true },
    ],
  },
  {
    x: 2,
    q: "Which of the following bands does not have a self titled album?",
    a: [
      { text: "Rammstein", isCorrect: false },
      { text: "Slipknot", isCorrect: false },
      { text: "Testament", isCorrect: true },
      { text: "Deftones", isCorrect: false },
    ],
  },
];

start = true;

function iterate(x) {
  result = document.getElementsByClassName("result");
  result[0].innerText = "";
  score = document.getElementsByClassName("score");
  score[0].innerText = "Score: " + i;

  const question = document.getElementById("question");
  question.innerText = Questions[x].q;

  const optionOne = document.getElementById("optionOne");
  const optionTwo = document.getElementById("optionTwo");
  const optionThree = document.getElementById("optionThree");
  const optionFour = document.getElementById("optionFour");

  optionOne.innerText = Questions[x].a[0].text;
  optionTwo.innerText = Questions[x].a[1].text;
  optionThree.innerText = Questions[x].a[2].text;
  optionFour.innerText = Questions[x].a[3].text;

  optionOne.value = Questions[x].a[0].isCorrect;
  optionTwo.value = Questions[x].a[1].isCorrect;
  optionThree.value = Questions[x].a[2].isCorrect;
  optionFour.value = Questions[x].a[3].isCorrect;

  selected = "";

  optionOne.addEventListener("click", () => {
    optionOne.style.backgroundColor = "rgb(9, 11, 167)";
    optionTwo.style.backgroundColor = "rgb(7, 37, 56)";
    optionThree.style.backgroundColor = "rgb(7, 37, 56)";
    optionFour.style.backgroundColor = "rgb(7, 37, 56)";
    selected = optionOne.value;
  });

  optionTwo.addEventListener("click", () => {
    optionOne.style.backgroundColor = "rgb(7, 37, 56)";
    optionTwo.style.backgroundColor = "rgb(9, 11, 167)";
    optionThree.style.backgroundColor = "rgb(7, 37, 56)";
    optionFour.style.backgroundColor = "rgb(7, 37, 56)";
    selected = optionTwo.value;
  });

  optionThree.addEventListener("click", () => {
    optionOne.style.backgroundColor = "rgb(7, 37, 56)";
    optionTwo.style.backgroundColor = "rgb(7, 37, 56)";
    optionThree.style.backgroundColor = "rgb(9, 11, 167)";
    optionFour.style.backgroundColor = "rgb(7, 37, 56)";
    selected = optionThree.value;
  });

  optionFour.addEventListener("click", () => {
    optionOne.style.backgroundColor = "rgb(7, 37, 56)";
    optionTwo.style.backgroundColor = "rgb(7, 37, 56)";
    optionThree.style.backgroundColor = "rgb(7, 37, 56)";
    optionFour.style.backgroundColor = "rgb(9, 11, 167)";
    selected = optionFour.value;
  });

  const checkAnswer = document.getElementsByClassName("checkAnswer");

  checkAnswer[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

i = 0;

const nextCheck = document.getElementsByClassName("next");
nextCheck[0].addEventListener("click", () => {
    if (selected == "true") {
        i++;
    }
})

if (start) {
  iterate("0");
}

const next = document.getElementsByClassName("next")[0];

x = 0;

next.addEventListener("click", () => {
  start = false;

  if (x <= 1) {
    x++;
    iterate(x);
    console.log(x);
  } else if (x == 2) {
    window.location.href = "highScores.html";
  }
});
