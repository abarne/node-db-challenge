const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
	Projects.getProjects()
		.then((projects) => {
			res.status(200).json(projects);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).json({ message: 'There was an error getting the projects' });
		});
});
