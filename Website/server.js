let User = require('./modules/connections');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

let app = express();

/*passport.use(
	new LocalStrategy(
		function (username, password, done) {
			User.getUser(username, function(err, user) {
				if (err) {
					return done(err)
				}
				if (!user) {
					return done(null, false, {message: 'Incorrect username.'});
				}
				if (!user.validPassword(password)) {
					return done(null, false, {message: 'Incorrect password.'});
				}
				return done(null, user);
			});
		}
	));
 */

User.createNewUser("Nayef Ahmed", "sdsdfasdfasdfas@yahoo.ca", "testPassword", function(err, user) {
	if (err) {
		console.log(err);
	}

	console.log(user);
});



app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});