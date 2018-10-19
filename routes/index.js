var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {

	// Views
	app.get('/', routes.views.session.signin);
	app.all('/contact', routes.views.contact);

	//session /addAccount
	app.all('/addAccount',routes.views.session.addAccount);
	app.all('/registerAccount',routes.views.session.newAccount);
	app.all('/signin',routes.views.session.signin);
	app.get('/signout', routes.views.session.signout);
	app.get('/manage',routes.views.session.manage);
	app.all('/updateTestAccount/:email?',routes.views.session.updateAccount);
	app.all('/deleteAccount/:email?',routes.views.session.deleteAccount);

	//game
	app.all('/gameManage',routes.views.game.gameViewManage);
};
