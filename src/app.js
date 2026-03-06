import { Hono } from "hono";
import { logger } from "hono/logger"
import { serveStatic } from "hono/deno";

export const createApp = () => {
  const app = new Hono();
  app.use(logger());
  const quiz = {
    question: "What is the longest River?",
    options: ["Ganga", "Nile", "Amazon"],
    questionNumber: 1
  }

  app.get("/quiz", (C) => C.json(quiz));

  app.get("*", serveStatic({ root: "public" }))

  return app;
}