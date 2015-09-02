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
	var n = parseInt(buffer[0].trim());
	var inputstring = buffer[1].trim();
	var k = parseInt(buffer[2].trim());

	var encodedString = encode(inputstring, k);

	return encodedString;
}

function encode(inputstring, k) {

	var result = [];
	var charcode = 0;
	for (var i = 0; i < inputstring.length; i++) {
		charcode = inputstring[i].charCodeAt(0);

		if (charcode >= 65 && charcode <= 90) {
			charcode = ((charcode - 65 + k) % 26) + 65;
		}

		if (charcode >= 97 && charcode <= 122) {
			charcode = ((charcode - 97 + k) % 26) + 97;
		}

		result.push(String.fromCharCode(charcode));
	}

	return result.join('');
}
