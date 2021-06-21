const fs = require('fs');


 fs.readdir('./', 'utf8', (err, files) => {
	if (err) {
		throw err;
	} else {
		process.stdin.write(files.join('\n'));
		module.exports.ls = files;
	}
});




