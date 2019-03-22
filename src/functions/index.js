import * as functions from 'firebase-functions'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

export const nextApp = functions.https.onRequest((request, response) => {
    // console.log('File: ' + request.originalUrl)
    // console.log('dev:', dev)
    // log the page.js file or resource being requested

    return app.prepare().then(() => handle(request, response))
})

export const get = functions.https.onRequest((request, response) => {
    return 'get data from mongo db ...'
})
