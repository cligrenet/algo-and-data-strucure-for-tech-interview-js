// Recursion: a function that calls itself

// It's Everywhere!
// 1-JSON.parse, JSON.stringify are recursive functions
// 2-document.getElementById and DOM traversal algo
// 3-Object traversal(tree, graph...)
// 4-cleaner alternative to iteration

// JavaScript use the call stack as tool to manage function invocations.

// Essentials in recursion:
// 1-base case
// 2-different input

// Base case : [!IMPORTANT!]
// Invoke the same function with a different input until reach a base case
// The condition when the recursion ends

// ----------------------------------
// Example
const countDown = (num) => {
	// 1-Base case
	if (num <= 0) {
		console.log('All done!');
		return;
	}
	console.log(num);
	// 2-Different input
	num--;
	countDown(num);
};

// countDown(5);

// Example
const sumRange = (num) => {
	// 1-Base case
	if (num === 1) return 1;
	//           2-Different input
	return num + sumRange(num - 1);
};

// console.log(sumRange(5)); // -> 15

// Example
const calcFactorial = (num) => {
	// 1-Base case
	if (num === 1) return 1;
	//           2-Different input
	return num * calcFactorial(num - 1);
};

// console.log(calcFactorial(5)); // -> 120
// ----------------------------------

// Common recursion pitfalls :
// 1-No base case -> keep going, no ending -> "Error: Maximum call stack size exceeded" -> Stack overflow :)
// 2-Forgetting to return or returning the wrong thing

// Design pattern :
// 1-Helper method recursion
// 2-Pure recursion

// ----------------------------------
// Example
const outer = (input) => {
	let outerScopedVariable = [];
	helper(input);
	return outerScopedVariable;
};

const helper = (helperInput) => {
	helper(helperInput--);
};

// Example - helper function recursion
const collectOddValues = (arr) => {
	let result = [];

	const helper1 = (helperInput) => {
		// 1-base case
		if (helperInput.length === 0) return;

		if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
		// 2-different input
		helper1(helperInput.slice(1));
	};

	helper1(arr);

	return result;
};
// console.log(collectOddValues([1, 2, 3, 4, 5])); //-> [1, 3, 5]

// Example - pure recursion
const collectOddValues1 = (arr) => {
	let result = [];

	if (arr.length === 0) return result;

	if (arr[0] % 2 !== 0) result.push(arr[0]);

	result = result.concat(collectOddValues1(arr.slice(1)));
	// result = [...result, ...collectOddValues1(arr.slice(1))];

	return result;
};

console.log(collectOddValues1([1, 2, 3, 4, 5])); //-> [1, 3, 5]
// ----------------------------------

// Pure recursion tips :
// 1-Arrays, use methods like slice, spread operator, concat that make copies of arrays, do not mutate them
// 2-Strings are immutable, need to use methods like slice, substr, substring to make copies of strings
// 3-Objects, use methods like Object.assign, spread operator to make copies of objects
