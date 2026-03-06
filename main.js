import { createApp } from "./src/app.js";

const main = () => {
  const quiz = {
    question: "What is the longest River?",
    options: ["Ganga", "Nile", "Amazon"],
    questionNumber: 1
  }
  const app = createApp(quiz);
  Deno.serve({ port: 8080 }, app.fetch)
}

main();