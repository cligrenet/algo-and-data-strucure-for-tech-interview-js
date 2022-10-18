// 2-Multiple pointers

// ====================================
/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exist.
*/

//// Naive solution: time O(n^2), space O(1)
// const sumZero = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === 0) {
// 				return [arr[i], arr[j]];
// 			}
// 		}
// 	}
// };

//// Refactored solution: time O(n), space O(1)
const sumZero = (arr) => {
	let p1 = 0;
	let p2 = arr.length - 1;

	while (arr[p1] < arr[p2]) {
		let sum = arr[p1] + arr[p2];
		if (sum === 0) {
			return [arr[p1], arr[p2]];
		} else if (sum > 0) {
			p2--;
		} else {
			p1++;
		}
	}
};

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //-> [-3,3]
// console.log(sumZero([-2, 0, 1, 3])); //-> undefined
// console.log(sumZero([1, 2, 3])); //-> undefined

// ====================================
/*
Implement a function called countUniqueValues, which accepts a sorted array, 
and counts the unique values in the array. There can be negative numbers in the array, 
but it will always be sorted.
*/

//// My solution 1
// const countUniqueValues = (arr) => {
// 	if (arr.length === 0) return 0;

// 	const uniqArr = new Set(arr);
// 	return uniqArr.size;
// };

//// My solution 2
// const countUniqueValues = (arr) => {
// 	let res = [];
// 	for (let num of arr) {
// 		if (!res.includes(num)) {
// 			res.push(num);
// 		} else {
// 			continue;
// 		}
// 	}
// 	return res.length;
// };

//// Multiple pointers: O(n)
const countUniqueValues = (arr) => {
	if (arr.length === 0) return 0;

	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
};

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //-> 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //-> 7
// console.log(countUniqueValues([])); //-> 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); //-> 4

// ====================================
/*Write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals 
the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
*/
const averagePair = (arr, targetAve) => {
	if (arr.length === 0) return false;

	let p1 = 0;
	let p2 = arr.length - 1;
	while (p1 <= p2) {
		let ave = (arr[p1] + arr[p2]) / 2;
		if (ave === targetAve) {
			return true;
		} else if (ave < targetAve) {
			p1++;
		} else {
			p2--;
		}
	}
	return false;
};

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// ====================================
/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
Your solution MUST have AT LEAST the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

//// Iterative
// const isSubsequence = (str1, str2) => {
// 	let i = 0;
// 	let j = 0;

// 	if (!str1) return true;

// 	while (j < str2.length) {
// 		if (str1[i] === str2[j]) i++;
// 		if (i === str1.length) return true;
// 		j++;
// 	}
// 	return false;
// };

//// Recursive (not O(1) space)
const isSubsequence = (str1, str2) => {
	if (str1.length === 0) return true;
	if (str2.length === 0) return false;

	if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
	return isSubsequence(str1, str2.slice(1));
};

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
