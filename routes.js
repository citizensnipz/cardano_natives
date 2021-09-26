const routes = require('next-routes')();

routes
	.add('/projects/new', 'projects/new')
	.add('/projects/:id', '/projects/display');


module.exports = routes;