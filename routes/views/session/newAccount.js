
var keystone = require('keystone');
var isGameiom = require('../../tools');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	if(isGameiom(req)){
		locals.gameiomAddress = true;
		locals.title = 'Gameiom';
	}else{
		locals.gameiomAddress = false;
	}
	view.render('session/newAccount');
}
