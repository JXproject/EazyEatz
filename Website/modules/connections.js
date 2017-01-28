let User = require('./User');
let bcrypt = require('bcrypt');
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mchacks');

let paymentSchema = new Schema({
	nameOnCard: String,
	address: String,
	cardNumber: Number,
	ccv: Number,
});

let UserSchema = new Schema({
	userId: {type: Number, unique: true, index: true},
	name: String,
	email: String,
	apikey: String,
	password: String,
	payment: {type: paymentSchema, default: null}
});
let userModel = mongoose.model("User", UserSchema);

let menuItemSchema = new Schema({
	menuId: {type: Number, unique: true, index: true},
	name: String,
	category: String,
	price: Number
});

let itemSchema = new Schema({
	itemId: {type: Number, unique: true, index: true},
	name: String,
	price: num,
	quantity: Number
});

let restaurantSchema = new Schema({
	restaurantId: {type: Number, unique: true, index: true},
	name: String,
	address: String,
	menu: [menuItemSchema]
});

let billSchema = new Schema({
	billId: {type: Number, unique: true, index: true},
	restaurant: restaurantSchema,
	items: [itemSchema],
	users: {type: Schema.Types.ObjectId, ref: "User"}
});
let billModel = mongoose.model('Bill', billSchema);

function getUser(email, callback) {
	userModel.findOne({email: email}, 'userId name email apikey address password payment', function (err, user) {
		if (err) {
			return callback(err);
		}

		let rUser = new User();
		rUser.name = user.name;
		rUser.apiKey = user.apiKey;
		rUser.email = user.email;

		return callback(null, rUser);
	});
}

module.exports.createNewUser = function (name, email, password, address, nameOnCard, cardNumber, ccv, callBack) {
	let newUser = new User();
	newUser.name = name;
	newUser.email = email;
	newUser.address = address;


	bcrypt.hash(password, 15).then(function (hash) {
			let userSchema = new userModel({
				userId: newUser.email,
				name: newUser.name,
				password: hash
			});

			userSchema.save(function (err) {
				if (err) {
					console.log(err);
				}
			});

			newUser.password = hash;

			return callBack(null, newUser);
		}
	);
};

module.exports.getUser = getUser();