/**
 * Created by leo.ye on 2017/1/4.
 */

var keystone = require('keystone');
var isGameiom = require('../../tools');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	console.log('req',req);

	if(isGameiom(req)){
		locals.gameiomAddress = true;
		locals.title = 'Gameiom';
	}else{
		locals.gameiomAddress = false;
	}
	var userInfo = req.user;
	if(userInfo){
		// locals.gameUrl = 'http://demo.aspectgaming.com.s3.amazonaws.com/games_gameiom.html?username='+userInfo.testAccount;
		locals.gameUrl = 'https://d392bdifzsgdpb.cloudfront.net/games_gameiom.html?username='+userInfo.testAccount;
		view.render('game/gameView');
	}else{
		res.redirect('/signin');
	}

	// locals.SCwidth = screen.width;
	// locals.SCheight = screen.height;

}
