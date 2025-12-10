// Basic while-loop example
function whileLoopExample(limit) {
	if (typeof limit !== 'number' || limit <= 0) {
		return '';
	}
	let i = 0;
	const result = [];
	while (i < limit) {
		result.push(i);
		i++;
	}
	return result.join(', ');
}

// Example usage (uncomment to test in the browser console)
// console.log(whileLoopExample(5)); // "0, 1, 2, 3, 4"