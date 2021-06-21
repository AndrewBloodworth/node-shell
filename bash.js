const { pwd } = require('./pwd');
const { ls } = require('./ls');
const { cat } = require('./cat');
const { curl } = require('./curl');

// const done = () => {
// 	process.stdout.write('\nprompt > ');
// };

const done = (output = '') => {
	process.stdout.write(output);
	process.stdout.write('\nprompt > ');
};

done();
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();
	if (cmd === 'pwd') {
		pwd(done);
	} else if (cmd === 'ls') {
		ls(done);
	} else if (cmd.includes('cat')) {
		const filename = cmd.split(' ')[1];
		cat(filename, done);
	} else if (cmd.includes('curl')) {
		const url = cmd.split(' ')[1];
		curl(url, done);
	} else {
		process.stdout.write('You typed: ' + cmd);
		done();
	}
});
