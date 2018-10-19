/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 *
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	User: [
		{'name.first': 'admin', 'name.last': 'AG', 'testAccount': 'aspect_test1', 'email': 'webmaster@aspectgaming.com', 'password': 'ag28889961','user':'webmaster', 'portalLink': 'gameiom', 'isAdmin': true},
		{'name.first': 'Leo', 'name.last': 'Ye', 'testAccount': 'aspect_test2', 'email': 'leo.ye@aspectgaming.com', 'password': 'aspect','user':'leo.ye', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Will', 'name.last': 'Jiang', 'testAccount': 'aspect_test3', 'email': 'will.jiang@aspectgaming.com', 'password': 'aspect','user':'will.jiang', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'CC', 'name.last': 'Xu', 'testAccount': 'aspect_test4', 'email': 'cc.xu@aspectgaming.com', 'password': 'aspect','user':'cc.xu', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Ligang', 'name.last': 'Yao', 'testAccount': 'aspect_test5', 'email': 'ligang.yao@aspectgaming.com', 'password': 'aspect','user':'ligang.yao', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Yi', 'name.last': 'Yang', 'testAccount': 'aspect_test6', 'email': 'yi.yang@aspectgaming.com', 'password': 'aspect','user':'yi.yang', 'portalLink': 'gameiom', 'isAdmin': false},

		{'name.first': 'George', 'name.last': 'Zaloom', 'testAccount': 'aspect_demo8', 'email': 'george@goldenratstudios.com', 'password': 'zaloom', 'user':'george','portalLink': 'aspect', 'isAdmin': false},

		{'name.first': 'Will', 'name.last': 'Mathieson', 'testAccount': 'aspect_demo10', 'email': 'william.mathieson@williamhill.com', 'password': 'williamhill','user':'william.mathieson', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Heather', 'name.last': 'Faulkner', 'testAccount': 'aspect_demo11', 'email': 'heather.faulkner@williamhill.com', 'password': 'williamhill', 'user':'heather.faulkner','portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Vlad', 'name.last': 'Modorcea', 'testAccount': 'aspect_demo12', 'email': 'Vlad.Modorcea@betvictor.com', 'password': 'betvictor','user':'Vlad.Modorcea', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Christian', 'name.last': 'Bogstrand', 'testAccount': 'aspect_demo23', 'email': 'chab@bet365.com', 'password': 'bet365', 'user':'chab','portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Paul', 'name.last': 'Malt', 'testAccount': 'aspect_demo14', 'email': 'Paul.Malt@betssongroup.com', 'password': 'betssongroup','user':'Paul.Malt', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Nicola', 'name.last': 'Fitton', 'testAccount': 'aspect_demo15', 'email': 'Nicola.Fitton@betssongroup.com', 'password': 'betssongroup','user':'Nicola.Fitton', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Andy', 'name.last': 'Braithwaite', 'testAccount': 'aspect_demo16', 'email': 'andy.braithwaite@betssongroup.com', 'password': 'betssongroup','user':'andy.braithwaite', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Gavin', 'name.last': 'Grimes', 'testAccount': 'aspect_demo17', 'email': 'gavin.grimes@lottoland.com', 'password': 'lottoland','user':'gavin.grimes', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Robert', 'name.last': 'Lenzhofer', 'testAccount': 'aspect_demo18', 'email': 'robert.lenzhofer@gluckgames.com', 'password': 'gluckgames','user':'robert.lenzhofer', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Bhotesh', 'name.last': 'Maheshwari', 'testAccount': 'aspect_demo19', 'email': 'bhotesh.maheshwari@rank.com', 'password': 'rank','user':'bhotesh.maheshwari', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Rich', 'name.last': 'Barr', 'testAccount': 'aspect_demo20', 'email': 'richard.barr@ladbrokescoral.com', 'password': 'ladbrokescoral','user':'richard.barr', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'James', 'name.last': 'Watson', 'testAccount': 'aspect_demo21', 'email': 'james.w@gen-game.com', 'password': 'gen-game','user':'james.w', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Dave', 'name.last': 'Hammond', 'testAccount': 'aspect_demo22', 'email': 'dave.hammond@paddypowerbetfair.com', 'password': 'paddypowerbetfair','user':'dave.hammond', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Ian', 'name.last': 'Gallagher', 'testAccount': 'aspect_demo23', 'email': 'Ian.Gallagher@paddypowerbetfair.com', 'password': 'paddypowerbetfair','user':'Ian.Gallagher', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Robert', 'name.last': 'Proctor', 'testAccount': 'aspect_demo24', 'email': 'robert.proctor@skybettingandgaming.com', 'password': 'skybettingandgaming','user':'robert.proctor', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Julian', 'name.last': 'Beck', 'testAccount': 'aspect_demo25', 'email': 'julian.beck@skybettingandgaming.com', 'password': 'skybettingandgaming','user':'julian.beck', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Samuel', 'name.last': 'Downey', 'testAccount': 'aspect_demo26', 'email': 'samuel.downey@skybettingandgaming.com', 'password': 'skybettingandgaming','user':'samuel.downey', 'portalLink': 'gameiom', 'isAdmin': false},

		{'name.first': 'Microgaming', 'name.last': 'Demo', 'testAccount': 'aspect_demo27', 'email': 'microgaming', 'password': 'microgaming','user':'microgaming', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'GVC', 'name.last': 'Demo', 'testAccount': 'aspect_demo28', 'email': 'gvc', 'password': 'gvc','user':'gvc', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Steve', 'name.last': 'Calvert', 'testAccount': 'aspect_demo29', 'email': 'steve.calvert@gameiom.com', 'password': 'gameiom','user':'steve.calvert', 'portalLink': 'gameiom', 'isAdmin': false},
		
		{'name.first': 'Andrew', 'name.last': 'Whitworth', 'testAccount': 'aspect_demo30', 'email': 'Andrew.Whitworth@bwinparty.com', 'password': 'bwinparty','user':'Andrew.Whitworth', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Andy', 'name.last': 'H', 'testAccount': 'aspect_demo31', 'email': 'andyh@microgaming.co.uk', 'password': 'microgaming','user':'andyh', 'portalLink': 'gameiom', 'isAdmin': false},
		{'name.first': 'Tony', 'name.last': 'Payne', 'testAccount': 'aspect_demo32', 'email': 'tony.payne@aspectgaming.com', 'password': 'aspect','user':'tony.payne', 'portalLink': 'gameiom', 'isAdmin': false}		
	]
};

/*

 // This is the long-hand version of the functionality above:

 var keystone = require('keystone');
 var async = require('async');
 var User = keystone.list('User');

 var admins = [
 { email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
 ];

 function createAdmin (admin, done) {

 var newAdmin = new User.model(admin);

 newAdmin.isAdmin = true;
 newAdmin.save(function (err) {
 if (err) {
 console.error('Error adding admin ' + admin.email + ' to the database:');
 console.error(err);
 } else {
 console.log('Added admin ' + admin.email + ' to the database.');
 }
 done(err);
 });

 }

 exports = module.exports = function (done) {
 async.forEach(admins, createAdmin, done);
 };

 */
