import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";

export const createApp = (quiz) => {
  const app = new Hono();
  app.use(logger());

  app.post("/submit-response", async (c) => {
    // const res = await c.req.json();
    // console.log(res);
    return c.json(quiz);
  });

  app.get("/quiz", (c) => c.json(quiz));

  app.get("*", serveStatic({ root: "public" }));

  return app;
};
