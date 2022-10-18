//// Bubble Sort
// swap, largest value bubbles up to the end of the array
// Time O(n*n) -> if nearly sorted, with a variable noSwaps, best O(n)

//Swaping
// ES5
function swap5(arr, idx1, idx2) {
	let temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
}
// ES2015(ES6)
const swap6 = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/*
Write a function called bubbleSort, start looping from the end of the array towards the start
with a variable called i. Start an inner loop with a variable j, from the beginning till i-1.
If arr[j] is greater than arr[j+1], swap those two values. 
Return the sorted array.
*/
//// Naive solution
// function bubbleSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// 			}
// 		}
// 	}
// 	return arr;
// }

//// Optimised solution
// function bubbleSort(arr) {
// 	for (let i = arr.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// }

//// Further optimised solution with noSwaps
function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([5, 3, 4, 1, 2])); //-> [1, 2, 3, 4, 5]
console.log(bubbleSort([37, 45, 29, 8])); //-> [8, 29, 37, 45]
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])); //-> [1, 2, 3, 4, 5, 6, 7, 8]
