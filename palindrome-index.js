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
		console.log(palindromeIndex(buffer[i]));
	}

}
// Return -1 if str is a palindrome. Otherwise return the index of the character to remove, in order to make str a palindrome.
function palindromeIndex(str) {

	// Early check to see if input is a palindrome.
	if (isPalindrome(str)) return -1;

	// Maintain pointers to either end of string, str[i] and str[j]. If there is a character mismatch, see if str[i,j-1] is a palindrome: If it is, return j. Otherwise str[i+1, j] is a palindrome, and return i.
	for (var i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++, j--) {
		if (str[i] !== str[j]) {

			if (isPalindrome(str.substring(i, j))) {
				return j;
			}
			else {
				return i;
			}
		}
	}
}

// Linear check to see if str is a palindrome
function isPalindrome(str) {

	for (var i = 0, j = str.length - 1; i < Math.floor(str.length / 2); i++, j--) {
		if (str[i] !== str[j]) {
			return false;
		}
	}

	return true;
}
