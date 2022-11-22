'use strict';

const generateMenuQuestions = () => {
	return {
		type: 'list',
		name: 'menuOpt',
		message: 'Qué desea hacer?',
		choices: [
			{ value: '1', name: '1. Agregar un ingeniero' },
			{ value: '2', name: '2. Agregar un pasante' },
			{ value: '0', name: '0. Terminar la app' },
		],
	};
};

module.exports = {
	generateMenuQuestions,
};
