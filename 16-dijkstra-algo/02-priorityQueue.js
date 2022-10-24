// V1 naive version --> V2 binary heap priority queue
class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		this.values.push({ val, priority });
		this.sort();
	}
	dequeue() {
		return this.values.shift();
	}
	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	}
}

// sort => O(N*log(N))

let q = new PriorityQueue();
q.enqueue('B', 3);
q.enqueue('C', 5);
q.enqueue('D', 2);
q.enqueue('Q', 20);
console.log(q.values);
/* 
[
  { val: 'D', priority: 2 },
  { val: 'B', priority: 3 },
  { val: 'C', priority: 5 },
  { val: 'Q', priority: 20 }
]
*/
console.log(q.dequeue()); //{ val: 'D', priority: 2 }
