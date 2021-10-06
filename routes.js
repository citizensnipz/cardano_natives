const routes = require('next-routes')();

routes
	.add('/projects/new', 'projects/new')
	.add('/projects/show/:id', '/projects/display')
	.add('/projects/:pagenum', 'projects');


module.exports = routes;