import { CV } from '@/components/cv.component'
import { renderToReadableStream } from 'react-dom/server'

const ASSET_DIR = '/assets'

Bun.serve({
  port: 9001,
  routes: {
    '/': async () => {
      const stream = await renderToReadableStream(<CV />)

      return new Response(stream, {
        headers: { 'Content-Type': 'text/html' },
      })
    },
    [`${ASSET_DIR}/*`]: async req => {
      const url = new URL(req.url)

      if (url.pathname === `${ASSET_DIR}/client.js`) {
        await Bun.build({
          entrypoints: ['./src/client.tsx'],
          outdir: `.${ASSET_DIR}`,
          naming: '[name].js',
        })
      }

      const assetPath = url.pathname.replace(`${ASSET_DIR}/`, `.${ASSET_DIR}/`)
      const asset = await Bun.file(assetPath).arrayBuffer()
      return new Response(asset, {
        headers: {
          'Content-Type': url.pathname.endsWith('.js')
            ? 'text/javascript'
            : 'text/css',
        },
      })
    },
  },
})
