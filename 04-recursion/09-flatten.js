/*
Write a recursive function called flatten which accepts an array of arrays and 
returns a new array with all values flattened.
*/
//// My solution using stack
// const flatten = (arr) => {
// 	const stack = [...arr];
// 	const res = [];
// 	while (stack.length) {
// 		const next = stack.pop();
// 		if (Array.isArray(next)) {
// 			stack.push(...next);
// 		} else {
// 			res.push(next);
// 		}
// 	}
// 	return res.reverse();
// };
//// Recursion
const flatten = (arr) => {
	let res = [];
	for (let item of arr) {
		if (Array.isArray(item)) {
			res = res.concat(flatten(item));
		} else {
			res.push(item);
		}
	}
	return res;
};

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
