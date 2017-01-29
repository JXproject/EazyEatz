let User = require('./User');
let Payment = require('./Payment');
let Restaurant = require('./Restaurant');
let uuidv1 = require('uuid/v1');
let uuidv4 = require('uuid/v4');
let bcrypt = require('bcrypt');
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mchacks');

let paymentSchema = new Schema({
	nameOnCard: String,
	address: String,
	cardNumber: String,
	ccv: Number
});

let UserSchema = new Schema({
	name: String,
	email: {type: String, index: true},
	apikey: {type: String, default: uuidv4(), index: true},
	password: String,
	payment: {type: paymentSchema, default: null}
});
let userModel = mongoose.model("User", UserSchema);

let menuItemSchema = new Schema({
	name: String,
	category: String,
	price: Number
});

let itemSchema = new Schema({
	itemId: {type: Number, unique: true, index: true},
	name: String,
	price: Number,
	quantity: Number
});

let beaconSchema = new Schema({
	beaconId: {type: String, unique: true, index: true},
	location: String,
});

let restaurantSchema = new Schema({
	name: {type: String, unique: true, index: true},
	address: String,
	menu: [menuItemSchema],
	beacons: [{type: Schema.Types.ObjectId, ref: "Beacon"}]
});
let restaurantModel = mongoose.model('Restaurant', restaurantSchema);

let billSchema = new Schema({
	billId: {type: String, unique: true, index: true},
	restaurant: restaurantSchema,
	items: [itemSchema],
	users: [{type: Schema.Types.ObjectId, ref: "User"}]
});
let billModel = mongoose.model('Bill', billSchema);

module.exports.createNewUser = function (name, email, password, address, nameOnCard, cardNumber, ccv, callBack) {
	let newUser = new User();
	newUser.name = name;
	newUser.email = email;
	newUser.apiKey = uuidv4();
	let pay = new Payment();
	pay.address = address;
	pay.nameOnCard = nameOnCard;
	pay.cardNumber = cardNumber;
	pay.ccv = ccv;
	newUser.payment = pay;

	bcrypt.hash(password, 15).then(function (hash) {
			let userSchema = new userModel({
				email: newUser.email,
				name: newUser.name,
				apikey: newUser.apiKey,
				password: hash,
				payment: {
					nameOnCard: nameOnCard,
					cardNumber: cardNumber,
					ccv: ccv
				}
			});

			userSchema.save(function (err) {
				if (err) {
					console.log(err);
				}
			});

			return callBack(null, newUser);
		}
	);
};

module.exports.createNewRestaurant = function (name, address, menu, beacons, callBack) {
	let newRestaurant = new Restaurant();
	newRestaurant.name = name;
	newRestaurant.address = address;
	newRestaurant.menu = menu;

	let beacArr = [];
	for (let item in beacons) {
		beacArr.push(new beaconSchema({
			beaconId: item.id,
			location: item.location
		}))
	}

	let menuArr = [];
	for (let item in menu) {
		menuArr.push(new menuItemSchema({
			name: item.name,
			category: item.category,
			price: item.price
		}))
	}

	let userSchema = new restaurantSchema({
		name: name,
		address: address,
		menu: menu,
		beacons: beacArr
	});

	userSchema.save(function (err) {
		if (err) {
			console.log(err);
		}
	});

	return callBack(null, newRestaurant);
};

module.exports.restaurantByBeaconID = function (bID) {
	restaurantModel.findOne({beaconId: bID}, 'name address menu', function (err, restaurant) {
		if (err) {
			return err;
		}

		return restaurant;
	})
};

module.exports.validAPIKey = function (key, callback) {
	userModel.findOne({apikey: key}, 'name email apikey payment', function (err, user) {
		if (err) {
			return callback(err);
		}

		return callback(null, user);
	});
};

module.exports.getRestaurant = function (name) {
	restaurantModel.findOne({name: name}, 'name address menu', function (err, restaurant) {
		if (err) {
			return err;
		}

		return restaurant;
	})
};

module.exports.getUser = function (email) {
	userModel.findOne({email: email}, 'name email apikey password payment', function (err, user) {
		console.log(user);

		if (err) {
			return err;
		}

		return user;
	});
};

module.exports.getUserById = function (email, callback) {
	userModel.findOne({email: email}, 'name email apikey password payment', function (err, user) {
		console.log(user);

		if (err) {
			return callback(err);
		}

		return callback(null, user);
	});
};