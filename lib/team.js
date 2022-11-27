'use strict';

import inquirer from 'inquirer';
import { generateMenuQuestions } from './menu.js';
import { teamMembers } from './teamMembers.js';
import Engineer from './Engineer.js';
import Intern from './Intern.js';
import { renderEngineerCard, renderInternCard, htmlGenerator } from './html.js';

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
			const { name, id, email, github } = answers;
			const myEngineer = new Engineer(name, id, email, github);
			renderEngineerCard(myEngineer);
			const { menuOpt } = answers;

			switch (menuOpt) {
				case '0':
					htmlGenerator(teamMembers);
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
			const { name, id, email, schoolName, menuOpt } = answers;
			const myIntern = new Intern(name, id, email, schoolName);
			renderInternCard(myIntern);

			switch (menuOpt) {
				case '0':
					htmlGenerator(teamMembers);
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

export { generateEngineerInfo, generateInternInfo };
