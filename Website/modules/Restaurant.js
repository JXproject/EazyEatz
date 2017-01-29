class Restaurant {
	constructor() {
		this._address = "";
		this._menu = [];
		this._beacons = [];
		this._name = "";
	}

	get address() {
		return this._address;
	}

	set address(value) {
		this._address = value;
	}

	get menu() {
		return this._menu;
	}

	set menu(value) {
		this._menu = value;
	}

	get beacons() {
		return this._beacons;
	}

	set beacons(value) {
		this._beacons = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}

module.exports = Restaurant;