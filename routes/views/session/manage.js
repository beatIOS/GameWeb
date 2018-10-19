/**
 * Created by leo.ye on 2016/12/29.
 */
var keystone = require('keystone');
var User = keystone.list('User');
var isGameiom = require('../../tools');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	console.log('req ', req.user.name.first);
	locals.user.name.first =  req.user.name.first;
	view.on('post', function(next) {
		console.log('updateAccount ', req.body.name);
	});

	if(isGameiom(req)){
		locals.gameiomAddress = true;
		locals.title = 'Gameiom';
	}else{
		locals.gameiomAddress = true;
	}

	view.query('UserInfoData', User.model.find())
		.then(function (err, results, next) {
			if (err) return next(err);
			console.log(results);
			next();
		});
	
	// view.on('render',function (next) {
	// 	User.model.find().exec(function(err, result) {
	// 		// console.log('localsData', result);
	// 		locals.UserInfoData = result;
	// 		return next();
	// 	})
	// });

	view.render('session/manage');
}
