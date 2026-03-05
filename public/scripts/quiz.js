import { createFragment, ELEMENTS } from "./dom.js"

const {
  ARTICLE,
  FORM,
  FIELDSET,
  LEGEND,
  INPUT,
  LABLE,
  DIV,
  BUTTON
} = ELEMENTS

const fetchQuestion = async () => {
  return {
    question: "1. What is the longest River?",
    options: ["Ganga", "Nile", "Amazon"],
    questionNumber: 1
  }
}

const createOption = (value, i) => {
  return [
    DIV, { class: "option" },
    [
      INPUT, { type: "radio", name: "response", id: `option-${i}`, value }
    ],
    [LABLE, { for: `option-${i}` }, value]
  ]
}

const addQuestions = (container, { question, options, questionNumber }) => {
  const questionTemplate = [
    ARTICLE, {},
    [
      FORM, {},
      [
        FIELDSET, {},
        [LEGEND, {}, `${questionNumber}. ${question}`],
        ...options.map(createOption),
        [BUTTON, {}, "NEXT"],
      ]
    ]
  ];

  container.append(createFragment(...questionTemplate))
}

const renderQuestion = (question) => {
  const main = document.querySelector("main");
  addQuestions(main, question);
}

window.onload = () => {
  fetchQuestion().then(renderQuestion)
}