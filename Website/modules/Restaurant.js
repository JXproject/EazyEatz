class Restaurant {
	constructor() {
		this._address = "";
		this._nameOnCard = "";
		this._cardNumber = "";
		this._ccv = "";
	}

	get address() {
		return this._address;
	}

	set address(value) {
		this._address = value;
	}

	get nameOnCard() {
		return this._nameOnCard;
	}

	set nameOnCard(value) {
		this._nameOnCard = value;
	}

	get cardNumber() {
		return this._cardNumber;
	}

	set cardNumber(value) {
		this._cardNumber = value;
	}

	get ccv() {
		return this._ccv;
	}

	set ccv(value) {
		this._ccv = value;
	}
}

module.exports = Restaurant;