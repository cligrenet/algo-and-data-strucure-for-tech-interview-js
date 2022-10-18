//// Merge Sort
// 1948 year of invention
// combine merging and sorting, divide and conquer
// Complexity : time O(nlogn),space O(n)
// -> O(logn) decompositions, O(n) comparisons per decomposition

/*
Write a function called merge. Given two arrays which are sorted, create a new array which is also sorted 
and consists of all of the elements in to two input arrays.

Create an empty array, take a look at the smallest values in each input array.
while there are still values we haven't looked at, if the value in teh first array is smaller than the value
in the second array, push the value in the first array into our results and move on to the next value in the 
first array. If the value in the first array is larger than the value in the second array, push the value in 
the second array into our results and move on to the next value in the second array.
Once exhaust one array, push in all remaining values from the other array.

This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it.
*/
//// Helper function for mergeSort()
function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	let res = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] >= arr2[j]) {
			res.push(arr2[j]);
			j++;
		} else {
			res.push(arr1[i]);
			i++;
		}
	}

	// if arr2 reaches its end
	while (i < arr1.length) {
		res.push(arr1[i]);
		i++;
	}
	// if arr1 reaches its end
	while (j < arr2.length) {
		res.push(arr2[j]);
		j++;
	}
	return res;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
// console.log(merge([], [1, 3])); // [1, 3]
// console.log(merge([100], [1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 100]

/*
MergeSort pseudocode: recursion
Break up the array into halves until you have arrays that are empty or have one element. (slice)
Call mergeSort again on each half, recursively. Base case: arr.length <= 1.
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are 
back at the full length of the array. 
Once the array has been merged back together, return the merged(and sorted) array.
*/

function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const midArr = Math.floor(arr.length / 2);
	let leftArr = mergeSort(arr.slice(0, midArr));
	let rightArr = mergeSort(arr.slice(midArr));

	return merge(leftArr, rightArr);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1, 9, 10, 24, 72, 73, 76]
console.log(mergeSort([])); // []

/*
example: [10, 24, 76, 73]

                mergeSort([10, 24, 76, 73])
                [10, 24]             [73, 76]
        mergeSort([10, 24])      mergeSort([76, 73])
    [10]      merge     [24]              [76]    merge    [73]
mergeSort([10])   mergeSort([24])   mergeSort([76])    mergeSort([73])

*/
