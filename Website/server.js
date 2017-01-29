let Conn = require('./modules/connections');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');

let app = express();
let uuid = require('uuid/v4');

/*
passport.use(
 new LocalStrategy(
 function (email, password, done) {
 User.getUser(email, function (err, user) {
 if (err) {
 return done(err)
 }
 if (!user || !user.validPassword(password)) {
 return done(null, false, {message: 'Bad credentials'});
 }
 return done(null, user);
 });
 }
 ));

Conn.createNewUser("Chase Haddleton", "chase@cool.ca", "testPassword", "124 Long Ct", "Chase Haddleton",
	"908761213", "981", function (err, user) {
		if (err) {
			console.log(err);
		}
	});
 Conn.createNewUser("Nayef Ahmed", "nayef@cool.ca", "testPassword", "1029 New Ave", "Nayef Ahmed",
	"908761213", "981", function (err, user) {
		if (err) {
			console.log(err);
		}
	});
 Conn.createNewUser("Ali Toyserkani", "ali@cool.ca", "testPassword", "111 Evans Crest", "Ali Toyserkani",
	"908761213", "981", function (err, user) {
		if (err) {
			console.log(err);
		}
	});
 Conn.createNewUser("Jack Xu", "jack@cool.ca", "testPassword", "748 Universe Ave", "Jack Xu",
	"908761213", "981", function (err, user) {
		if (err) {
			console.log(err);
		}
	});


 console.log(User.getUser("chase@chasehaddleton.com"));


Conn.createNewRestaurant("Bob's Burgers", "987 The Stree Ave", [])*/


app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});