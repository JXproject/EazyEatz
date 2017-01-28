/*let mongoose = require('mongoose');
mongoose.connect('localhost:27017');
let Schema = mongoose.Schema;
let MenuItem = require('./MenuItemSchema');

let restaurantSchema = new Schema({
	restaurantId: {type: Number, unique: true, index: true},
	name: String,
	address: String,
	menu: [MenuItem]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);*/