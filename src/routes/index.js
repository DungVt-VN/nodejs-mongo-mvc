const newsRoute = require('./news');
const homeRoute = require('./home');
const searchRoute = require('./search');
function route(app) {
    app.use('/search', searchRoute);
    app.use('/news', newsRoute);
    app.use('/', homeRoute);
}

module.exports = route;
