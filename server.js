// server.js
const next = require('next');
const routes = require('./router/routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
    app.render(req, res, route.page, query)
})

const { createServer } = require('http');
app.prepare().then(() => {
    createServer(handler).listen(3000);
});
