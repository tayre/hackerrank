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
	console.log(processData(_input));
});

// the main function: write to standard out the solution to the problem question, in the requested format
function processData(input) {
	var buffer = input.split('\n');
	var string = buffer[0].trim();
	return palindromePossible(string) ? 'YES' : 'NO';
}

// assuming lowercase chars in test cases
function palindromePossible(string) {

	var charCounts = { 'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0, 'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0, 'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0 };

	// get frequency counts
	for (var i = 0; i < string.length; i++) {
		charCounts[string[i]]++;
	}

	var numOdd = 0;

	// count the number of odd frequencies
	for (var key in charCounts) {
		if (charCounts[key] % 2 !== 0) {
			numOdd++;
		}
	}

	// return false if there is more than one odd frequency
	return numOdd > 1 ? false : true;
}
