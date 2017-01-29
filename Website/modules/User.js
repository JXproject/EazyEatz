let bcrypt = require('bcrypt');
let Payment = require('./Payment');

class User {
	constructor() {
		this._email = "";
		this._name = "";
		this._password = "";
		this._apiKey = "";
		this._payment = new Payment();
	}

	get email() {
		return this._email;
	}

	set email(value) {
		this._email = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get password() {
		return this._password;
	}

	set password(value) {
		this._password = value;
	}

	get apiKey() {
		return this._apiKey;
	}

	set apiKey(value) {
		this._apiKey = value;
	}

	validPassword(password) {
		bcrypt.compare(this._password, password).then(function (res) {
			return res;
		});
	}
}

module.exports = User;