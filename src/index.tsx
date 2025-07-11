import { renderToReadableStream } from 'react-dom/server'
import { CV } from './components/cv'

Bun.serve({
  port: 9001,
  routes: {
    '/': async () => {
      const stream = await renderToReadableStream(<CV />)

      return new Response(stream, {
        headers: { 'Content-Type': 'text/html' },
      })
    },
    '/assets/*': async req => {
      const url = new URL(req.url)
      const assetPath = url.pathname.replace('/assets/', './assets/')
      const asset = await Bun.file(assetPath).arrayBuffer()
      return new Response(asset, {
        headers: { 'Content-Type': 'text/css' },
      })
    },
  },
})
