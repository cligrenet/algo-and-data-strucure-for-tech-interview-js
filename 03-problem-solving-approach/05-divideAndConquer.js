// 4-Divide and conquer
// Divide a data set into smaller chunks => repeat a process with a subset of data

// ====================================
/*
Given a sorted array of integers, write a function called search, that accepts a value and returns the 
index where the value passed to the function is located. If the value is not found, return -1.
*/

//// Naive solution: O(n) -> Linear search
// const search = (arr, value) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === value) return i;
// 	}
// 	return -1;
// };

//// Refactored solution: O(logn) -> Binary search
const search = (arr, value) => {
	let min = 0;
	let max = arr.length - 1;

	while (min <= max) {
		let middle = Math.floor((min + max) / 2);
		let currentEl = arr[middle];

		if (currentEl < value) {
			min = middle + 1;
		} else if (currentEl > value) {
			max = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); //-> 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); //-> 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //-> -1
