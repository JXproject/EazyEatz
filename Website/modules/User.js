class User {
	constructor() {
		this.email = "";
		this.name = "";
		this.password = "";

	}

	static createNewUser(name, email, password) {
		let newUser = new User();
		newUser.name = name;
		newUser.email = email
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