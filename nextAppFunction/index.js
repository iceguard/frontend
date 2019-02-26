const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

module.exports = function(context, req) {
    return 'hello world!'
    // return app.prepare().then(function() {
    //     return handle(req, context.res)
    // })

    // context.log('JavaScript HTTP trigger function processed a request.')

    // if (req.query.name || (req.body && req.body.name)) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: 'Hello !! ' + (req.query.name || req.body.name),
    //     }
    // } else {
    //     context.res = {
    //         status: 400,
    //         body: 'Please pass a name on the query string or in the request body',
    //     }
    // }
}
