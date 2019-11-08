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

router.post('/', (req, res) => {
	const newProject = req.body;
	Projects.addProject(newProject)
		.then((resp) => {
			res.status(200).json({ message: 'Project added', project: newProject });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error adding the project' });
		});
});

router.post('/task', (req, res) => {
	const newTask = req.body;

	if (!req.body.project_id) {
		res.status(404).json({ message: 'project_id is required' });
	}

	Projects.addTask(newTask)
		.then((resp) => {
			res.status(200).json({ message: 'Task added', task: newTask });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Error adding the task' });
		});
});

router.post('/resource', (req, res) => {
	const newResource = req.body;

	if (!req.body.project_id) {
		res.status(404).json({ message: 'project_id is required' });
	}

	Projects.addResource(newResource)
		.then((resp) => {
			res.status(200).json({ message: 'Resource added', resource: newResource });
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'Error adding the resource' });
		});
});

router.get('/:id/tasks', (req, res) => {
	const id = req.params.id;

	Projects.getTasksAndProjects(id)
		.then((tasks) => {
			res.status(200).json(tasks);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error getting the tasks' });
		});
});
