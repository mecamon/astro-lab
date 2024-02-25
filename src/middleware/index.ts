import { defineMiddleware } from "astro:middleware";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware((context, next) => {
  console.log("HELLO WORLD!");
  if (context.url.pathname === "/astro-lab/about/") {
    return Response.redirect(new URL("/astro-lab/", context.url), 302);
    // return context.redirect("/");
  }
  return next();
});
