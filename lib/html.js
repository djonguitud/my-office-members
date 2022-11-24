'use strict';

const fs = require('fs');
const cheerio = require('cheerio');

fs.readFile('../dist/index.html', 'utf8', (err, html) => {
	if (err) {
		throw err;
	} else {
		let $ = cheerio.load(html);

		const team = $('#team');
		team.append(`<div id="team" class="p-3 mb-2 bg-secondary text-white">
      <div class="card" style="width: 18rem">
		    <div class="card-body">
			    <h5 class="card-title text-dark"></h5>
			    <h6 class="card-subtitle mb-2 text-secondary"></h6>
			    <ul class="text-dark">
				    <li>Id:</li>
				    <li>Email:<a href="#" class="card-link"></a></li>
				    <li>No Oficina:<a href="#" class="card-link"></a></li>
			    </ul>
		    </div>
    </div>`);
	}
	$.root().html();
});
