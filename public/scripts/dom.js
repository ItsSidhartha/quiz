export const createFragment = (tag, attrbutes, ...contents) => {
  const element = document.createElement(tag);

  Object.entries(attrbutes).forEach(([attrbute, value]) => {
    element.setAttribute(attrbute, value);
  });

  if (contents.length === 1 && !Array.isArray(contents[0])) {
    element.textContent = contents[0];
    return element;
  }

  const children = contents.map((content) => createFragment(...content));
  element.append(...children);
  return element;
}

export const ELEMENTS = {
  ARTICLE: "article",
  FIELDSET: "fieldset",
  LEGEND: "legend",
  FORM: "form",
  INPUT: "input",
  LABLE: "lable",
  DIV: "div",
  BUTTON: "button",
}

