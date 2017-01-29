let Conn = require('./modules/connections');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let bodyParser = require('body-parser');

let app = express();

let   passport = require('passport')
    , connect =  require('connect')
    , util = require('util')
    , LocalStrategy = require('passport-localapikey').Strategy;


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

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    findById(id, function (err, user) {
        done(err, user);
    });
});

// Use the LocalStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.  In the real world, this would query a database;
//   however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(
    function(apikey, done) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // Find the user by username.  If there is no user with the given
            // username, or the password is not correct, set the user to `false` to
            // indicate failure and set a flash message.  Otherwise, return the
            // authenticated `user`.
            findByApiKey(apikey, function(err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false, { message: 'Unknown apikey : ' + apikey }); }
                if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
                return done(null, user);
            })
        });
    }
));

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(express.static(__dirname + '/../../public'));


app.get('/', function(req, res){
    res.json({ message: "Authenticated" })
});

app.get('/api/account', ensureAuthenticated, function(req, res){
    res.json({ message: "Authenticated" })
});

app.get('/api/unauthorized', function(req, res){
    res.json({ message: "Authentication Error" })
});

// POST /login
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.

app.post('/api/authenticate',
    passport.authenticate('localapikey', { failureRedirect: '/api/unauthorized', failureFlash: true }),
    function(req, res) {
        res.json({ message: "Authenticated" })
    });

// POST /login
//   This is an alternative implementation that uses a custom callback to
//   acheive the same functionality.

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});