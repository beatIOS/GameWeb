/**
 * Created by leo on 2017/1/23.
 */

var keystone = require('keystone');
var User = keystone.list('User');
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	User.model.findById({'email':req.body.email})
	.remove(function(error) {
		if (error) {
			console.log('Error:' + error);
		} else {
			res.redirect('/manage');
		}
	});
}
