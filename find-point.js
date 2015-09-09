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

		var items = buffer[i].split(' ');

		var p = {
			'x': parseInt(items[0]),
			'y': parseInt(items[1])
		};
		
		var q = {
			'x': parseInt(items[2]),
			'y': parseInt(items[3])
		};

		var result = findPoint(p, q);
		console.log(result.x, result.y);
	}
}

// Given two points, p and q, return the symmetric point of point p about q.
function findPoint(p, q) {

	var deltaX = (q.x - p.x);
	var deltaY = (q.y - p.y);

	return {
		'x': q.x + deltaX,
		'y': q.y + deltaY
	};
}
