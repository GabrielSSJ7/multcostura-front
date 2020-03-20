const { createServer } = require('http')
const next = require('next')
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handler = routes.getRequestHandler(app)

// app.prepare().then(() => {
//   createServer(handler).listen(port, err => {
//     if (err) throw err
//     	console.log(dev)
//     console.log(`> Ready on http://localhost:${port}`)
//   })
// })

// With express
const express = require('express')
app.prepare().then(() => {
  express().use(handler).listen(3000)
})