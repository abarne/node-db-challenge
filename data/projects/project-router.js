const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

module.exports = router;

router.get('/projects', (req, res) => {
	Projects.getProjects()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error getting the projects' });
		});
});

router.get('/resources', (req, res) => {
	Projects.getResources()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error getting the resources' });
		});
});

router.get('/tasks', (req, res) => {
	Projects.getTasks()
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error getting the tasks' });
		});
});
