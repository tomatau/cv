import { spawn } from 'bun'

const server = spawn(['bun', 'start'])

// Wait for server to be ready
await Bun.sleep(2000)

const response = await fetch('http://localhost:9001')
const html = await response.text()

await Bun.write('dist/index.html', html)

server.kill()
