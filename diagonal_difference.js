function processData(input) {
	var buffer = input.split('\n');
	var n = parseInt(buffer[0]);

	//var buffer[1] ... buffer[n] contain rows of space separated strings ['i', 'j', ... 'k']
	var sum1 = 0;
	var sum2 = 0;

	var matrix = [];

	for (var i = 0; i < n; i++) {
		matrix[i] = buffer[i + 1].split(' ');
	}

	//go top left to bottom right
	for (var i = 0; i < n; i++) {
		sum1 += parseInt(matrix[i][i]);
	}

	//go to tio right to bottom left
	for (var i = 0; i < n; i++) {
		sum2 += parseInt(matrix[i][n - 1 - i]);
	}

	return Math.abs(sum1 - sum2);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	console.log(processData(_input));
});
