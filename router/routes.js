const routes = require('next-routes');

module.exports = routes()
    .add({
        pattern: '/',
        page: 'index'
    })
    .add({
        pattern: '/photos',
        page: 'photos'
    })
    .add({
        pattern: '/photo/:id',
        page: 'photo'
    })
