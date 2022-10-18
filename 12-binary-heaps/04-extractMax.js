// Removing from a heap:
// 1-Remove the root
// 2-Replace with the most recently added
// 3-Adjust (sink down)

// NOTE Hard :
// Sink down?
// The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (aka: bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).

//       ⬇️
//       41
//   39       33
//           🔻
// 18   27   12

// -> [41, 39, 33, 18, 27, 12]

// Remove the root, replace it with the last element
//       🔻
//       12
//   39       33
// 18   27

// Removed: 41
// -> [12, 39, 33, 18, 27]

// Sink down (compare with left and right children, if child is larger -> swap with the largest child)
//       39
//   🔻
//   12       33
// 18   27
// -> [39, 12, 33, 18, 27]

// Sink down again
//       39
//   27       33
//      🔻
// 18   12
// -> [39, 27, 33, 18, 12]

class MaxBinaryHeap {
	constructor() {
		this.values = [];
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

	extractMax() {
		let max = this.values[0];
		let end = this.values.pop();

		if (this.values.lenth > 0) {
			this.values[0] = end;
			this.sinkDown();
		}

		return max;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null; // either the left child index or the right child index

			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChild];
				if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
					swap = rightChildIdx;
				}
			}
			if (swap === null) break;

			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap); // [55, 39, 41, 18, 27, 12, 33]
console.log(heap.extractMax()); // 55
