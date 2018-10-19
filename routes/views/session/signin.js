/**
 * Created by leo.ye on 2016/12/27.
 */
var keystone = require('keystone');
var utils    = require('keystone-utils');
var isGameiom = require('../../tools');

exports = module.exports = function (req, res) {

	var view       = new keystone.View(req, res);
	var locals     = res.locals;
	locals.section = 'session';
	locals.form    = req.body;
	var userInfo   = req.user;
	console.log(req.connection.remoteAddress);

	if(isGameiom(req)){
		locals.gameiomAddress = true;
		locals.title          = 'Gameiom';
	} else {
		locals.gameiomAddress = false;
	}

	// req.connection.remoteAddress;
	if (userInfo) {
		if (userInfo.isAdmin) {
			// locals.user.btnValue = 'Go Manager';
			// locals.user.actionValue = '/manage';
			res.redirect('/keystone');
		} else {
			// locals.user.btnValue = 'Go Game';
			// locals.user.actionValue = '/game';
			res.redirect('/gameManage');
		}
	}

	view.on('post', function (next) {

		if (!req.body.password) {
			req.flash('error', 'Please enter your username and password.');
			return next();
		}

		var onSuccess = function (reqdata, resdata) {
			// req.flash('Success', 'Your username or password were incorrect, please try again.');
			console.log('localsData ', reqdata);
			if (reqdata.isAdmin) {
				// res.redirect('/manage');
				res.redirect('/keystone');
			} else {
				//login 游戏界面
				res.redirect('/gameManage');
				// res.redirect('http://demo.aspectgaming.com.s3.amazonaws.com/games_gameiom.html?username=' + reqdata.testAccount);
			}
		}

		var onFail = function () {
			req.flash('error', 'Wrong username or password.');
			return next();
		}

		var loginCondition;
		if (req.body.email.indexOf('@') >= 0) {
			loginCondition = {email: req.body.email, password: req.body.password};
		} else {
			loginCondition = {user: req.body.email, password: req.body.password};
		}

		// keystone.session.signin(loginCondition, req, res, onSuccess, onFail);
		signin(loginCondition, req, res, onSuccess, onFail);
	});

	view.render('session/signin');
}

var postHookedSigninWithUser = function (user, req, res, onSuccess, onFail) {
	keystone.callHook(user, 'post:signin', function (err) {
		if (err) {
			return onFail(err);
		}
		keystone.session.signinWithUser(user, req, res, onSuccess, onFail);
	});
};

var doSignin = function (lookup, req, res, onSuccess, onFail) {

	if (!lookup) {
		return onFail(new Error('session.signin requires a User ID or Object as the first argument'));
	}

	var User = keystone.list(keystone.get('user model'));

	if (typeof lookup.user === 'string' && typeof lookup.password === 'string') {
		// create regex for email lookup with special characters escaped
		var userRegExp = new RegExp('^' + utils.escapeRegExp(lookup.user) + '$', 'i');

		// match email address and password
		User.model.findOne({user: userRegExp}).exec(function (err, user) {
			if (user) {
				user._.password.compare(lookup.password, function (err, isMatch) {
					if (!err && isMatch) {
						postHookedSigninWithUser(user, req, res, onSuccess, onFail);
					} else {
						onFail(err || new Error('Incorrect username or password'));
					}
				});
			} else {
				onFail(err);
			}
		});

	} else if (typeof lookup.email === 'string' && typeof lookup.password === 'string') {
		// ensure that it is an email, we don't want people being able to sign in by just using "\." and a haphazardly correct password.
		if (!utils.isEmail(lookup.email)) {
			return onFail(new Error('Incorrect email or password'));
		}

		// create regex for email lookup with special characters escaped
		var emailRegExp = new RegExp('^' + utils.escapeRegExp(lookup.email) + '$', 'i');

		// match email address and password
		User.model.findOne({email: emailRegExp}).exec(function (err, user) {
			if (user) {
				user._.password.compare(lookup.password, function (err, isMatch) {
					if (!err && isMatch) {
						postHookedSigninWithUser(user, req, res, onSuccess, onFail);
					} else {
						onFail(err || new Error('Incorrect email or password'));
					}
				});
			} else {
				onFail(err);
			}
		});

	} else {
		lookup = '' + lookup;
		// match the userId, with optional password check

		var userId = (lookup.indexOf(':') > 0) ? lookup.substr(0, lookup.indexOf(':')) : lookup;
		var passwordCheck = (lookup.indexOf(':') > 0) ? lookup.substr(lookup.indexOf(':') + 1) : false;

		User.model.findById(userId).exec(function (err, user) {
			if (user && (!passwordCheck || scmp(passwordCheck, hash(user.password)))) {
				postHookedSigninWithUser(user, req, res, onSuccess, onFail);
			} else {
				onFail(err || new Error('Incorrect user or password'));
			}
		});
	}
};

var signin = function (lookup, req, res, onSuccess, onFail) {
	keystone.callHook({}, 'pre:signin', function (err) {
		if (err) {
			return onFail(err);
		}
		doSignin(lookup, req, res, onSuccess, onFail);
	});
};
