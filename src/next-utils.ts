import next from "next";

const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
  dev: process.env.NODE_ENV !== "production",
  port: PORT,
});

// This handler is used to self host nextjs. All the requests through routes are going to be forwarded  to nextjs using this handler.

export const nextHandler = nextApp.getRequestHandler();
