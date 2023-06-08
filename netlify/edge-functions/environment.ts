import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const value = Netlify.env.has("MY_IMPORTANT_VARIABLE");
  const value2 = Netlify.env.has("MY_FAKE_VARIABLE");

  return new Response(`Variable MY_IMPORTANT_VARIABLE exists? "${value}". ariable MY_FAKE_VARIABLE exists? "${value2}".`, {
    headers: { "content-type": "text/html" },
  });
};
