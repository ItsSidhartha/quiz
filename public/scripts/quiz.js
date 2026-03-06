import { createFragment, ELEMENTS } from "./dom.js";

const {
  ARTICLE,
  FORM,
  FIELDSET,
  LEGEND,
  INPUT,
  LABLE,
  DIV,
  BUTTON,
} = ELEMENTS;

const fetchQuestion = () => {
  return fetch("/quiz").then((x) => x.json());
};

const createOption = (value, i) => {
  return [
    DIV,
    { class: "option" },
    [INPUT, { type: "radio", name: "response", id: `option-${i}`, value }],
    [LABLE, { for: `option-${i}` }, value],
  ];
};

const addQuestions = (container, { question, options, questionNumber }) => {
  const questionTemplate = [
    ARTICLE,
    {},
    [
      FORM,
      {},
      [
        FIELDSET,
        {},
        [LEGEND, {}, `${questionNumber}. ${question}`],
        ...options.map(createOption),
        [BUTTON, {}, "NEXT"],
      ],
    ],
  ];

  container.append(createFragment(...questionTemplate));
};

const addListeners = (container) => {
  console.log("listener");
  const form = container.querySelector("form");
  form.addEventListener("submit", (e) => {
    const formData = new FormData(form);
    e.preventDefault();
    fetch("/submit-response", { method: "post", body: formData })
      .then((x) => x.json())
      .then((x) => {
        const article = container.querySelector("article");
        article.removeChild(form);
        renderQuestion(container, x);
      });
  });
};

const renderQuestion = (container, question) => {
  addQuestions(container, question);
  addListeners(container);
};

window.onload = () => {
  const main = document.querySelector("main");
  fetchQuestion().then((x) => renderQuestion(main, x));
};
