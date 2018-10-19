/**
 * Created by leo.ye on 2016/12/30.
 */

var keystone = require('keystone');
var User = keystone.list('User');
exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res;
	console.log('updateAccount ', req.params.email);
	User.model.update({'email':req.params.email},{$set:{'testAccount':req.body.testAccount,'portalLink':req.body.portalLink}}, function(error, result) {
		if (error) {
			console.log('Error:' + error);
		} else {
			console.log(result);
			res.redirect('/manage');
		}
	});

}
