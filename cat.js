const fs = require('fs');

module.exports = function (filename) {
	fs.readFile(, (err, data) => {
		if (err) {
			throw err;
		} else {
			console.log(data);
		}
	});
};
