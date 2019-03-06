const routes = require('next-routes')

module.exports = routes()
.add('index', '/')
.add('bloghome', '/blog')
.add('blogpost', '/blog/:uid')
.add('notfound', '/*')
