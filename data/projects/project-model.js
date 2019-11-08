const db = require('../db-config');

module.exports = {
	//exports here
	getProjects,
	getResources,
	getTasks
};

function getProjects() {
	return db('projects');
}

function getResources() {
	return db('resources');
}

function getTasks() {
	return db('tasks');
}
