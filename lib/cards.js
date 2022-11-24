'use strict';

const cardManager = (name, role, id, email, office) => {
	const markUpManager = `<div id="team" class="p-3 mb-2 bg-secondary text-white">
      <div class="card" style="width: 18rem">
		    <div class="card-body">
			    <h5 class="card-title text-dark">${name}</h5>
			    <h6 class="card-subtitle mb-2 text-secondary">👨‍💼 ${role}</h6>
			    <ul class="text-dark">
				    <li>Id:${id}</li>
				    <li>Email:<a href="#" class="card-link">${email}</a></li>
				    <li>No Oficina:<a href="#" class="card-link">${office}</a></li>
			    </ul>
		    </div>
    </div>`;
	addCard(markUpManager);
};
const cardEngineer = (name, role, id, email, github) => {
	const markUpEnginner = `<div id="team" class="p-3 mb-2 bg-secondary text-white">
      <div class="card" style="width: 18rem">
		    <div class="card-body">
			    <h5 class="card-title text-dark">${name}</h5>
			    <h6 class="card-subtitle mb-2 text-secondary">👨‍💻 ${role}</h6>
			    <ul class="text-dark">
				    <li>Id:${id}</li>
				    <li>Email:<a href="#" class="card-link">${email}</a></li>
				    <li>Github:<a href="#" class="card-link">${github}</a></li>
			    </ul>
		    </div>
    </div>`;
	addCard(markUpEnginner);
};
const cardIntern = (name, role, id, email, school) => {
	const markUpIntern = `<div id="team" class="p-3 mb-2 bg-secondary text-white">
      <div class="card" style="width: 18rem">
		    <div class="card-body">
			    <h5 class="card-title text-dark">${name}</h5>
			    <h6 class="card-subtitle mb-2 text-secondary">🧑‍🏫 ${role}</h6>
			    <ul class="text-dark">
				    <li>Id:${id}</li>
				    <li>Email:<a href="#" class="card-link">${email}</a></li>
				    <li>Escuela:<a href="#" class="card-link">${school}</a></li>
			    </ul>
		    </div>
    </div>`;
	addCard(cardIntern);
};

module.exports = {
	cardManager,
	cardEngineer,
	cardIntern,
};
