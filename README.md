# An example of using Vercel AI SDK with Hono

This is a project to provide an example of using [Vercel AI SDK](https://sdk.vercel.ai/docs) with Hono.

## Features

- Minimal.
- Using React on both the server side and client side.
- Validating incoming values with Zod.
- Streaming Response.
- Develop with Vite in local. Deploy to Cloudflare Pages.

## How to try

Install:

```sh
npm i
```

Develop:

```sh
export OPENAI_API_KEY=your-openai-api-key
npm run dev
```

Deploy to Cloudflare Pages:

```sh
npm run deploy
```

Note: For production usage, you should add an environment value for `OPENAI_API_KEY` in your Cloudflare Dashboard.

## Author

Yusuke Wada

## License

MIT
