const btn__left = document.querySelector(".btn__left");
const btn__rigth = document.querySelector(".btn__rigth");
const showTranslation = document.querySelector(".showTranslation");
const correct__answer = document.querySelector(".correct__answer");
const btn__phrases = document.querySelector(".btn__switch__phrases");
const btn__words = document.querySelector(".btn__switch__words");
const btn__shuffle = document.querySelector(".btn__shuffle");

let userChoice = false;
let indexOfPhrases = 0;
let isPhrases = true;

let phrases = [
  {
    esp: "Quiero mejorar mi Espanol porque me gusta este idioma",
    rus: "Я хочу улучшить мой испанский, потому что мне нравится этот язык",
  },
  {
    esp: "Tengo mucho dinero porque tengo mucho trabajo",
    rus: "У меня много денег, потому что у меня много работы",
  },
  {
    esp: "Vivo en este país",
    rus: "Я живу в этой стране",
  },
  {
    esp: "Quiero comprar este libro",
    rus: "Хочу купить эту книгу",
  },
  {
    esp: "Puedo comprar este coche",
    rus: "Я могу купить эту машину",
  },
  {
    esp: "Puedo entenderte sim problemas",
    rus: "Я могу понимать тебя без проблем",
  },
  {
    esp: "Me gustaria saber dos idiomas extranjeros",
    rus: "Я бы хотел знать два иностранных языка",
  },
  {
    esp: "Te intendo muy bien",
    rus: "Я понимаю тебя очень хорошо",
  },
];

let words = [
  {
    esp: "Un coche",
    rus: "Машина",
  },
  {
    esp: "Un hotel",
    rus: "Отель",
  },
  {
    esp: "Vivir",
    rus: "Жить",
  },
  {
    esp: "Comprar",
    rus: "Покупать",
  },
  {
    esp: "Tener",
    rus: "Иметь",
  },
];

//Отвечает за прорировку фразы на исп и фразы на рус
function inputPhrasesAndTranslation() {
  correct__answer.classList.add("correct__answer");
  document.querySelector(
    ".text__espanol"
  ).innerHTML = `${phrases[indexOfPhrases].esp}`;
  document.querySelector(
    ".correct__answer"
  ).innerHTML = `${phrases[indexOfPhrases].rus}`;
}

function inputWordsAndTranslation() {
  correct__answer.classList.add("correct__answer");
  document.querySelector(
    ".text__espanol"
  ).innerHTML = `${words[indexOfPhrases].esp}`;
  document.querySelector(
    ".correct__answer"
  ).innerHTML = `${words[indexOfPhrases].rus}`;
}

// Прорисовка фразы или слова
function phrases_or_words() {
  isPhrases ? inputPhrasesAndTranslation() : inputWordsAndTranslation();
}

//Показывает и скрывает перевод
function ShowOrHideRightAnswer() {
  showTranslation.addEventListener("click", () => {
    if (correct__answer.classList.contains("correct__answer")) {
      correct__answer.classList.remove("correct__answer");
    } else {
      correct__answer.classList.add("correct__answer");
    }
  });
}

// Логика переключения карточки назад
function pastCard() {
  btn__left.addEventListener("click", () => {
    if (indexOfPhrases < 1) {
      return;
    } else {
      indexOfPhrases--;
      phrases_or_words();
    }
  });
}

//Логика переключения карточки вперед
function nextCard() {
  btn__rigth.addEventListener("click", () => {
    if (indexOfPhrases > phrases.length - 2) {
      return;
    } else {
      indexOfPhrases++;
      phrases_or_words();
    }
  });
}

//Логика кнопки Shuffle
function btn_shuffle() {
  btn__shuffle.addEventListener("click", () => {
    shuffle(phrases);
    phrases_or_words();
  });
}
// Логика кнопки Phrases
function btn_switch__phrases() {
  btn__phrases.addEventListener("click", () => {
    isPhrases = true;
    renderColorBtn();
    inputPhrasesAndTranslation();
  });
}
// Логика кнопки Words
function btn_switch__words() {
  btn__words.addEventListener("click", () => {
    isPhrases = false;
    renderColorBtn();
    inputWordsAndTranslation();
  });
}

// Перемешивает последовательность фраз или слов
function shuffle() {
  isPhrases
    ? (phrases.sort(() => Math.random() - 0.5), (indexOfPhrases = 0))
    : (words.sort(() => Math.random() - 0.5), (indexOfPhrases = 0));
}

function renderColorBtn() {
  if (isPhrases) {
    btn__words.classList.remove("btn__switch__words__active");
    btn__words.classList.add("btn__switch__words");

    btn__phrases.classList.remove("btn__switch__phrases");
    btn__phrases.classList.add("btn__switch__phrases__active");
  } else {
    btn__phrases.classList.remove("btn__switch__phrases__active");
    btn__phrases.classList.add("btn__switch__phrases");

    btn__words.classList.remove("btn__switch__words");
    btn__words.classList.add("btn__switch__words__active");
  }
}

renderColorBtn();
shuffle();
ShowOrHideRightAnswer();
phrases_or_words();
nextCard();
pastCard();
btn_shuffle();
btn_switch__phrases();
btn_switch__words();
