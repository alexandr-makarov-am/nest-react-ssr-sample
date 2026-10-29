import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
  app.use(/.*$/, async (req, res) => {
    const url = req.originalUrl
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const appHtml = await render(url);
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        res.status(500).end(e.stack);
      } else {
        res.status(500).end(String(e));
      }
    }
  });
  return app;
}

createServer().then((app) => {
  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  });
})
