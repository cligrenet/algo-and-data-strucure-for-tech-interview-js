// 3-Sliding window

// ====================================
/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
*/

//// My solution: O(n^2)
// const maxSubarraySum = (arr, n) => {
// 	if (n > arr.length) return null;

// 	let maxSum = -Infinity;
// 	for (let i = 0; i < arr.length; i++) {
// 		let subArr = arr.slice(i, i + n);
// 		let sum = subArr.reduce((acc, cur) => acc + cur, 0);
// 		maxSum = Math.max(sum, maxSum);
// 	}
// 	return maxSum;
// };

//// Naive solution: O(n^2)
// const maxSubarraySum = (arr, n) => {
// 	if (n > arr.length) return null;

// 	let maxSum = -Infinity;
// 	for (let i = 0; i < arr.length - n + 1; i++) {
// 		let temp = 0;
// 		for (let j = 0; j < n; j++) {
// 			temp += arr[i + j];
// 		}
// 		if (temp > maxSum) {
// 			maxSum = temp;
// 		}
// 	}
// 	return maxSum;
// };

//// Refactored solution: O(n)
const maxSubarraySum = (arr, n) => {
	let maxSum = 0;
	let tempSum = 0;

	if (arr.length < n) return null;

	for (let i = 0; i < n; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;

	for (let i = n; i < arr.length; i++) {
		tempSum = tempSum - arr[i - n] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return maxSum;
};

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //-> 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //-> 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); //-> 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //-> 13
// console.log(maxSubarraySum([], 4)); //-> null

// ====================================
/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

Constraints:
Time Complexity - O(N)
Space Complexity - O(1)
*/

const maxSubarraySum1 = (arr, num) => {
	if (arr.length < num) return null;

	let maxSum = arr.slice(0, num).reduce((acc, cur) => acc + cur, 0);
	let tempSum = maxSum;

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	return maxSum;
};

// console.log(maxSubarraySum1([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum1([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum1([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum1([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum1([2, 3], 3)); // null

// ====================================
// NOTE Hard
/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Time Complexity - O(n)
Space Complexity - O(1)
*/

const minSubArrayLen = (arr, sum) => {
	let start = 0;
	let end = 0;
	let total = 0;
	let minLen = Infinity;

	while (start < arr.length) {
		// if current window does not add up to the given sum -> continue moving end point to the right
		if (total < sum && end < arr.length) {
			total += arr[end];
			end++;
		}
		// if current window adds up to at least the given sum -> shrink the window
		else if (total >= sum) {
			minLen = Math.min(minLen, end - start);
			total -= arr[start];
			start++;
		}
		// current total less than required, reach the array end -> stop the loop
		else {
			break;
		}
	}

	return minLen === Infinity ? 0 : minLen;
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// ====================================
// NOTE Hard
/*
Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.
Time Complexity - O(n)
*/

const findLongestSubstring = (str) => {
	let start = 0;
	let seen = {};
	let maxLen = 0;

	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (char in seen) {
			start = Math.max(start, seen[char]);
		}
		maxLen = Math.max(maxLen, i - start + 1); // to include current in count
		seen[char] = i + 1; //store the index of the next char so as to not double count
	}

	return maxLen;
};

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6 // seen={ t: 1, h: 2, i: 5, s: 10, a: 7, w: 8, e: 13, o: 11, m: 12 }
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
