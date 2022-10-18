//// Searching algos :
// Linear search on arrays -> indexOf, includes, find, findIndex // linear is the best we can do on an unsorted array
// Binary search on sorted arrays
// naive string searching
// KMP string searching

//// Linear Search
/*
Write a function which accepts an array and a value. Loop through the array
and check if the current array element is equal to the value. If it is,
return the index at which the element is found. If the value is never found,
return -1.
*/
// Time: Best O(1), Worst O(n) -> Average O(n)
const linearSearch = (arr, value) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) return i;
	}
	return -1;
};

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
// console.log(linearSearch([100], 200)); // -1

//// Binary Search
// Only works on SORTED arrays !
// Divide and conquer: 3 pointers -> start, mid, end
/*
Write a function accepts a sorted array and a value. Create a left pointer at the start 
of the array, and a right pointer at the end of the array. While the left pointer comes before 
the right pointer, create a pointer in the middle. If find the value wanted, return the index.
If the value is too small, move the left pointer up. If the value is too large, move the right
pointer down. If never find the value, return -1.
*/
// Time: Best O(1), Worst and Average O(logn) -> nearly as good as O(1)
const binarySearch = (sortedArr, value) => {
	let left = 0;
	let right = sortedArr.length - 1;
	let mid = Math.floor((right + left) / 2);

	while (sortedArr[mid] !== value && left <= right) {
		if (value < sortedArr[mid]) {
			right = mid - 1;
		} else if (value > sortedArr[mid]) {
			left = mid + 1;
		}
		mid = Math.floor((right + left) / 2);
	}

	return sortedArr[mid] === value ? mid : -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)); // 2
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)); // 16
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)); // -1

//// Naive String Search
// search for a pattern -> substring
/*
Define a function that takes two strings. Loop over the longer string,loop over the shorter string.
If the characters don't match, break out of the inner loop. If the characters do match. keep going.
If complete the innter loop and find a match, increment the count of matches.
Return the count in the end.
*/

const searchNaiveString = (long, short) => {
	let count = 0;

	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			// NOTE           tricky part
			if (short[j] !== long[i + j]) {
				break;
			}
			// reach the end of the short string, find a match, increment count
			if (j === short.length - 1) {
				count += 1;
			}
		}
	}
	return count;
};

console.log(searchNaiveString('lorie loled', 'lol')); // 1
console.log(searchNaiveString('lorie loled', 'lo')); // 2
console.log(searchNaiveString('lorie loled', 'pop')); // 0
