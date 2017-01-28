class User {
	constructor() {
		this.email = "";
		this.name = "";
		this.password = "";
	}

	get userName() {
		return this.name;
	}

	set userName(newName) {
		this.name = newName;
	}

	get userEmail() {
		return this.email;
	}

	set userEmail(newEmail) {
		this.email = newEmail;
	}
}

module.exports = User;