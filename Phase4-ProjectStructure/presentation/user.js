const express = require('express');
const router = express.Router();

const userDomain = require('../domain/user');

router.get('/', async function(req, res) {
	const users = await userDomain.getAllUsers();
	res.status(200).status(200).json(users);
});
router.get('/create', async function(req, res) {
	// const userData = {
	// 	username: req.body.username,
	// 	password: req.password,
	// 	name: req.body.name,
	// 	email: req.body.email
	// };
	const user = await userDomain.createUser();
	res.status(200).json(user);
});
router.get('/:userId', async function(req, res) {
	const user = await userDomain.getUser(req.params.userId);
	if (user) {
		res.status(200).json({user: user});	
	} else {
		res.status(404);
	}
});



module.exports = router;