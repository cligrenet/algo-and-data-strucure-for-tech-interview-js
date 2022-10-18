//// Quick sort // NOTE Hard
// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element called the 'pivot' and finding the index where the pivot should end up in teh sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
// Complexity : time O(nlogn),space O(n)
// -> O(logn) decompositions, O(n) comparisons per decomposition

[5, 2, 1, 8, 4, 7, 6, 3];
// pick a random element, ie: 5
// move all the nums smaller than 5 to its left, bigger than 5 to its right
// then recursively solve the problem on the left side and on the right side

// Pivot helper
/*
Given an array, the pivot should rearrange elements in the array so that all values less than 
the pivot are moved to the left of the pivot, and all values greater than the pivot are moved
to the right of the pivot. This helper function should do this in place. It should not create
a new array. It should return the index of the pivot.

The function accepts three arguments: an array, a start index, an end index. 
Grab the pivot from the start of the array, store the current pivot index in a variable. 
Loop through the array from the start till the end, if the pivot > current element, 
increment pivot index variable and then swap the current element with the element at the pivot index. 
Swap the starting element with the pivot index. 
Return the pivot index.
*/

const pivot = (arr, start = 0, end = arr.length - 1) => {
	const swap = (array, i, j) => {
		// let temp = array[i];
		// array[i] = array[j];
		// array[j] = temp;
		//// ES2015 version
		[array[i], array[j]] = [array[j], array[i]];
	};

	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
		}
	}
	swap(arr, start, swapIndex);
	return swapIndex;
};

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3 // sortedArr = [1, 2, 3, 4, 5, 6, 7, 8]

// Quick sort
/* 
Call the pivot helper on the array.
When the helper returns to you the updated pivot index,
recursively vall the pivot helper on the subarray to the left of that index 
and the subarray to the right of that index. 
Base case: a subarray with less than 2 elements.

*/
const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right); // 3
		// left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3])); // [1, 2, 3, 4, 5, 6, 7, 8]
