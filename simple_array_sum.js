process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	console.log(processData(_input));
});

function processData(input) {
	var buffer = input.split("\n");
	var data = buffer[1].split(" ");
	return sum(data);
}

function sum(data) {
	var sumResult = 0;
	for (var i = 0; i < data.length; i++) {
		sumResult += parseInt(data[i]);
	}
	return sumResult;
}
