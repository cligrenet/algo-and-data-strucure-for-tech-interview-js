//// Insertion Sort
// Similar to bubble and selection sort
// It keeps one side of the array sorted, keeps taking an element and insert it in the correct spot
// No need to have the entire array ready at once -> works well when data is coming in live/streaming

/*
Write a function called insertionSort, start by picking the second element in the array.
Compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted 
portion (ie. the left side) to place the element in the correct place.
Repeat until the array is sorted.
*/
// NOTE Hard!

// i moves right, j moves left
// if arr[j] > cur, move arr[j] forward to its next position

//                j   i
//      [2, 1, 9, 76, 4] ---> cur=arr[i]=4
//               j
//     [2, 1, 9, 76, 76]
//            j
//     [2, 1, 9, 9, 76]
//         j
//     [2, 1, 4, 9, 76] <--- insert 4 (cur) to the right position

// Time O(n*n)
const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			// move j forward
			arr[j + 1] = arr[j];
		}
		// when arr[j] < cur, insert currentVal right after j -> at position
		arr[j + 1] = currentVal;
	}
	return arr;
};

console.log(insertionSort([34, 22, 10, 19, 17])); //-> [10, 17, 19, 22, 34]
console.log(insertionSort([5, 3, 4, 1, 2])); //-> [1, 2, 3, 4, 5]
console.log(insertionSort([37, 45, 29, 8])); //-> [8, 29, 37, 45]
console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7])); //-> [1, 2, 3, 4, 5, 6, 7, 8]
