const db = require('../db-config');

module.exports = {
	//exports here
	getProjects,
	getResources,
	getTasks,
	addProject,
	addTask,
	addResource,
	getTasksAndProjects
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

function addProject(project) {
	return db('projects').insert(project);
}

function addTask(task) {
	return db('tasks').insert(task);
}

function addResource(resource) {
	return db('resources').insert(resource);
}
// select tasks.*, projects.name, projects.description
// from tasks
// join projects on tasks.project_id = projects.id;
function getTasksAndProjects(id) {
	return db
		.select('tasks.*', 'projects.name', 'projects.description')
		.from('tasks')
		.join('projects', 'tasks.project_id', '=', 'projects.id')
		.where('projects.id', id);
}
