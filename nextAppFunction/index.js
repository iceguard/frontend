const next = require('next')

const dev = false
const app = next({ dev, conf: { distDir: 'nextAppFunction/__next' } })
const handle = app.getRequestHandler()

module.exports = async function(context, req) {
    return app.prepare().then(function() {
        return handle(req, context.res)
    })
}
