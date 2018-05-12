const rootRoutes = require('./root');
const userRoutes = require('./user');
const contactRoutes = require('./contact');


module.exports = function(app) {
	app.use('', rootRoutes);
	app.use('/user', userRoutes);
	// app.use('/contact', contactRoutes);
};