//// Radix sort
// Special sorting algo, works on lists of numbers (binary numbers)
// Does not make direct comparisons between elements
// It exploits the fact that information about the size of a number is encoded in the number of digits.

// n : # of numbers
// k : # of digits (word size, length of the numbers)
// Complexity : time O(nk),space O(n+k)

// Helpers
/*
getDigit(num, place) - returns the digit in num at the given place value (counting from the right).
*/
const getDigit = (num, i) => {
	// number / 10^1 => res1
	// floor res1 => res2
	// modulo res2
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

/*
digitCount(num) - returns the number of digits in num
*/
const digitCount = (num) => {
	if (num === 0) return 1;
	// log10(num) => res1
	// floor res1 => res2
	// res2 + 1
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};

/*
mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
*/
const mostDigits = (nums) => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]));
	}
	return maxDigits;
};

// Radix Sort
/*
Define a function that accepts list of numbers.
Figure out how many digits the largest number has.
Loop from k=0 up to this largest number of digits.
For each iteration of the loop, create buckets for each digit(0 to 9),
place each number in the corresponding bucket based on its kth digit.
Replace our existing array with values in the buckets, starting with 0 
and going up to 9.
Return list at the end.
*/
const radixSort = (nums) => {
	const maxDigitCount = mostDigits(nums);
	// console.log(maxDigitCount); // 4

	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: 10 }, () => []); // Prepare an array of 10 slots
		for (let i = 0; i < nums.length; i++) {
			let digit = getDigit(nums[i], k);
			digitBuckets[digit].push(nums[i]);
		}
		// console.log(digitBuckets);
		nums = [].concat(...digitBuckets); // preserve the order
	}

	return nums;
};

console.log(radixSort([23, 345, 5467, 12, 2345, 9852])); //[ 12, 23, 345, 2345, 5467, 9852 ]
