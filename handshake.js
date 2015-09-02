// start reading from standard input
process.stdin.resume();

// convert bytes to UTF-8 characters.
process.stdin.setEncoding("utf8");

// Listen for data events, which allows us to get the data out of the stream as soon as possible
var _input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

// there is no more data to read, so we can now process the input
process.stdin.on("end", function() {
	processData(_input);
});

// the main function: write to standard out the solution to the problem question, in the requested format
function processData(input) {
	var buffer = input.split('\n');
	var n = parseInt(buffer[0].trim());

	for (var i = 1; i <= n; i++) {
		var input = parseInt(buffer[i]);
		console.log(numHandShakes(input));
	}

}

function numHandShakes(p) {
	if (p <= 1) return 0;
	return p * (p - 1) / 2;
}
