'use strict';

import { readFile, writeFile } from 'node:fs';
import { teamMembers } from './teamMembers.js';

const renderManagerCard = (member) => {
	const { name, id, email, officeNumber } = member;
	teamMembers.push(`<h5 class="card-title text-dark">${name}</h5>
			    <h6 class="card-subtitle mb-2 text-secondary">Manager 👨‍💼</h6>
			    <ul class="text-dark">
				    <li>Id:${id}</li>
				    <li>Email:<a href="#" class="card-link">${email}</a></li>
				    <li>No Oficina:<a href="#" class="card-link">${officeNumber}</a></li>
			    </ul>`);
};
const renderEngineerCard = (member) => {
	const { name, id, email, github } = member;
	teamMembers.push(`<h5 class="card-title text-dark">${name}</h5>
			    <h6 class="card-subtitle mb-2 text-secondary">Ingeniero 👨‍💻</h6>
			    <ul class="text-dark">
				    <li>Id:${id}</li>
				    <li>Email:<a href="#" class="card-link">${email}</a></li>
				    <li>Github:<a href="https://github.com/${github}" class="card-link">${github}</a></li>
			    </ul>`);
};
const renderInternCard = (member) => {
	const { name, id, email, school } = member;
	teamMembers.push(`<h5 class="card-title text-dark">${name}</h5>
			    <h6 class="card-subtitle mb-2 text-secondary">Pasante 🧑‍🏫</h6>
			    <ul class="text-dark">
				    <li>Id:${id}</li>
				    <li>Email:<a href="#" class="card-link">${email}</a></li>
				    <li>Escuela:${school}</li>
			    </ul>`);
};

const htmlGenerator = (array) => {
	const lastArray = array.forEach((members) => {
		return members;
	});
	const htmlMarkUp = `<!DOCTYPE html> 
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
			crossorigin="anonymous" />
		<link rel="stylesheet" href="./reset.css" />
		<link rel="stylesheet" href="./style.css" />
	</head>
	<body class="bg-dark">
		<div class="container p-3 mb-2 bg-dark text-white">
			<main>
				<nav class="p-3 mb-2 bg-primary text-white"><h1>My Team</h1></nav>
				<div id="team" class="p-3 mb-2 bg-secondary text-white">
					<div class="card" style="width: 18rem">
						<div class="card-body">${lastArray}</div> </div
				></div>
			</main>
		</div>
	</body>
</html>
`;

	return htmlMarkUp;
};

/* const renderHtmlContent = () => {
	readFile('../src/index.html', 'utf8', (err, data) => {
		if (err) throw err;

    writeFile('../src/index.html', 'utf8',  );

	});
};
 */

export { renderManagerCard, renderEngineerCard, renderInternCard, htmlGenerator };
