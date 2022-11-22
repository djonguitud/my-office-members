'use strict';

const {
	generateEngineerInfo: engineerInfo,
	generateInternInfo: internInfo,
} = require('./team.js');

const generateAnswers = async (answers) => {
	let { menuOpt } = answers;

	switch (menuOpt) {
		case 'Terminar la app':
			return;
		case 'Agregar un ingeniero':
			return await engineerInfo();
		case 'Agregar un pasante':
			return await internInfo();
	}
};

module.exports = {
	generateAnswers,
};

/* 

console.log(answers);

			const { menuOpt } = answers;

			switch (menuOpt) {
				case 'Terminar la app':
					return;
				case 'Agregar un ingeniero':
					engineerInfo();
					break;
				case 'Agregar un pasante':
					internInfo();
					break;
			}
		});
 */
