'use strict';

const inquirer = require('inquirer');
const { generateMenuQuestions } = require('./menu.js');
const { teamMembers, generateTeamMemebrs } = require('./teamMembers.js');
const generateEngineerInfo = () => {
	return inquirer
		.prompt([
			{
				type: 'Input',
				name: 'name',
				message: 'Cuál el nombre del ingeniero?',
			},
			{
				type: 'Input',
				name: 'id',
				message: 'Cuál es tu ID del empleado?',
			},
			{
				type: 'Input',
				name: 'email',
				message: 'Cuál es su email?',
			},
			{
				type: 'Input',
				name: 'officeNumber',
				message: 'Cuál es el número de su oficina?',
			},
			{
				type: 'Input',
				name: 'github',
				message: 'Cuál es el usuario de su Github?',
			},
			generateMenuQuestions(),
		])
		.then((answers) => {
			generateTeamMemebrs(answers);
			const { menuOpt } = answers;

			switch (menuOpt) {
				case '0':
					console.log(teamMembers);
					break;
				case '1':
					generateEngineerInfo();
					break;
				case '2':
					generateInternInfo();
					break;
			}
		});
};
const generateInternInfo = () => {
	return inquirer
		.prompt([
			{
				type: 'Input',
				name: 'name',
				message: 'Cuál el nombre del pasante?',
			},
			{
				type: 'Input',
				name: 'id',
				message: 'Cuál es tu ID del empleado?',
			},
			{
				type: 'Input',
				name: 'email',
				message: 'Cuál es su email?',
			},
			{
				type: 'Input',
				name: 'schoolName',
				message: 'Cuál es el nombre de su escuela?',
			},
			generateMenuQuestions(),
		])
		.then((answers) => {
			generateTeamMemebrs(answers);
			const { menuOpt } = answers;

			switch (menuOpt) {
				case '0':
					console.log(teamMembers);
					break;
				case '1':
					generateEngineerInfo();
					break;
				case '2':
					generateInternInfo();
					break;
			}
		});
};

module.exports = {
	generateEngineerInfo,
	generateInternInfo,
};
