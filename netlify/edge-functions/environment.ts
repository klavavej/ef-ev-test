import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const value = Netlify.env.has("MY_IMPORTANT_VARIABLE");

  return new Response(`Variable MY_IMPORTANT_VARIABLE exists? "${value}".`, {
    headers: { "content-type": "text/html" },
  });
};
