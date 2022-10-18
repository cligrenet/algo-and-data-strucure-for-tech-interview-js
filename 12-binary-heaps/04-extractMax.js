// Removing from a heap:
// 1-Remove the root
// 2-Replace with the most recently added
// 3-Adjust (sink down)

//       41
//   39       33
// 18   27   12

// -> [41, 39, 33, 18, 27, 12]

class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}
	bubbleUp() {
		let index = this.values.length - 1;
		let element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];

			if (element <= parent) break;

			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex; // update index, avoid infinite loop
		}
	}
}

let heap = new MaxBinaryHeap();
//[41, 39, 33, 18, 27, 12]
//  0   1   2   3   4   5

console.log(heap); //
