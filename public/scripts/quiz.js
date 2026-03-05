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
  return []
}

const addQuestions = (container) => {
  const questionTemplate = [
    ARTICLE, {},
    [
      FORM, {},
      [
        FIELDSET, {},
        [LEGEND, {}, "1. What is the longest River?"],
        [
          DIV, { class: "option" },
          [
            INPUT, { type: "radio", name: "response", id: "option-1", value: "Ganga" }
          ],
          [LABLE, { for: "option-1" }, "Ganga"]
        ],
        [
          DIV, { class: "option" },
          [
            INPUT, { type: "radio", name: "response", id: "option-2", value: "Nile" }
          ],
          [LABLE, { for: "option-2" }, "Nile"]
        ],
        [BUTTON, {}, "NEXT"],
      ]
    ]
  ];

  container.append(createFragment(...questionTemplate))
}

const renderQuestion = (question) => {
  const main = document.querySelector("main");
  addQuestions(main);
}

window.onload = () => {
  fetchQuestion().then(renderQuestion())
}