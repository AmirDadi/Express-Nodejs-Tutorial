const User = require('../models').User;

const functions = {
	async createUser () {
		const user = await User.create({username: 'ali', email: 'a@b.c', password: '123'});
		console.log(user);
		return user;
	},
	async getAllUsers () {
		const users = await User.findAll({});
		return users;
	}
};

module.exports = functions;