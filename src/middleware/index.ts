import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  console.log("HELLO WORLD!");
  await Promise.resolve();
  if (context.url.pathname === "/astro-lab/about/") {
    return context.redirect("/");
  }
  return next();
});
