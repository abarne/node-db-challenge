const db = require('../db-config');

module.exports = {
	//exports here
	getProjects
};

function getProjects() {
	return db('Projects');
}
