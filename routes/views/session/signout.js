/**
 * Created by leo on 2016/12/29.
 */
var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
			locals = res.locals;

	locals.section = 'session';

	keystone.session.signout(req, res, function() {
		res.redirect('/');
	});

};
