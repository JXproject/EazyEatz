let User = require('./User');
let bcrypt = require('bcrypt');
let mongoose = require("mongoose");
let Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mchacks');

let paymentSchema = new Schema({
	nameOnCard: String,
	cardNumber: Number,
	ccv: Number,
});
let paymentModel = mongoose.model("Payment", paymentSchema);

let UserSchema = new Schema({
	userId: {type: String, unique: true, index: true},
	name: String,
	password: String,
	payment: {type: Schema.Types.ObjectId, ref: "Payment", default: null}
});
let userModel = mongoose.model("User", UserSchema);

/*let billSchema = new Schema({
 billId: {type: Number, unique: true, index: true},
 restaurant: RestaurantSchema,
 items: [ItemSchema],
 users: [UserSchema]
 });
 let billModel = mongoose.model('Bill', billSchema);*/

module.exports.createNewUser = function (name, email, password, callBack) {
	let newUser = new User();
	newUser.name = name;
	newUser.email = email;

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

module.exports.validateUser = function (email, password) {
	userModel.findOne({email: email});
}