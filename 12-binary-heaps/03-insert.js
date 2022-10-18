// Adding to a MaxBinaryHeap:
// 1-Add to the end

//       41
//   39       33
//                ⬇️
// 18   27   12   55
//                          ⬇️
// -> [41, 39, 33, 18, 27, 12, 55]

// 2-Bubble up (compare, if added value is larger, swap with the older parent node)

//       41
//             ⬇️
//   39        55
// 18   27   12   33
//          ⬇️
// -> [41, 39, 55, 18, 27, 12, 33]

//       ⬇️
//       55
//   39        41
// 18   27   12   33
//  ⬇️
// -> [55, 39, 41, 18, 27, 12, 33]

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
heap.insert(55);
console.log(heap); //[55, 39, 41, 18, 27, 12, 33]
