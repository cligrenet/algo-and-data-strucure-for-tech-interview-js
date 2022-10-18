//// Selection Sort
// similar to bubble sort, it selects the smallest value and puts it to the start of the array

/*
Write a function called selectionSort. Store teh first element as the smallest value.
Compare this item to the next item in the array util find a smaller number.
If a smaller number is found, designate that smaller number to be the new minimum and 
continue until the end of the array. If the minimum is not the value (index) initially began with, 
swap the two values. Repeat this with the next element until the array is sorted. 
*/
// Time O(n*n)
const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) {
			// swap
			[arr[min], arr[i]] = [arr[i], arr[min]];
		}
	}
	return arr;
};

console.log(selectionSort([34, 22, 10, 19, 17])); //-> [10, 17, 19, 22, 34]
console.log(selectionSort([5, 3, 4, 1, 2])); //-> [1, 2, 3, 4, 5]
console.log(selectionSort([37, 45, 29, 8])); //-> [8, 29, 37, 45]
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7])); //-> [1, 2, 3, 4, 5, 6, 7, 8]
