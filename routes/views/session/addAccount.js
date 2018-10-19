/**
 * Created by leo.ye on 2017/1/4.
 */

var keystone = require('keystone');
var User = keystone.list('User');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res;
	console.log('req',req);

	var userData = {
		name: {
			last: 'AG', 
			first: 'testUser'
		},
		portalLink: req.body.PortalLink,
		testAccount: req.body.TestAccount,
		password: req.body.password,
		email: req.body.email,
		isAdmin: false,
	};

	var userModel = User.model, 
			newUser = new userModel(userData);

	newUser.save(function(error) {
		if (error) {
			console.log('Error:' + error);
		} else {
			res.redirect('/manage');
		}
	});

}
