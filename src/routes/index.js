
const sitesRouter = require('./sites');
const accountRouter = require('./account');

function routes(app) {
    app.use('/account', accountRouter);
    app.use('/', sitesRouter);
};

module.exports = routes;