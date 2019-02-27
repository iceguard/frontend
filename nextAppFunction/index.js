const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

module.exports = async function(context, req) {
    return app.prepare().then(function() {
        return handle(req, context.res)
    })
}
