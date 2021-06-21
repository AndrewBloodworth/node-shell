const fs = require('fs');

module.exports = fs.readdir('/', 'utf8', (err, files) => {
	if (err) {
		throw err;
	} else {
		process.stdin.write(files.join('\n'));
	}
});
