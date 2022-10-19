// Strategies for dealing with collisions:
// 1- Separate chaining: at each index in our array, we store values using a more sophisticated data structure (store multiple key-value pairs at the same index);
// 2- Linear probing: only store one piece of data in one position, when we find a collision, we search through the array to find the next empty slot.

// Separate chaining
class HashTable {
	//                 ⬇️ random number
	constructor(size = 53) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}
	/* Set
        1- accepts a key and a value
        2- hashes the key
        3- stores the key-value pair in the hash table array via separate chaining (in a nested structure)
    */
	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}
	/* Get
        1- accepts a key
        2- hashes the key
        3- retrieves the key-value pair in the hash table
        4- if the key is not found, returns undefined
    */
	get(key) {
		let index = this._hash(key);
		if (this.keyMap[index]) {
			for (let element of this.keyMap[index]) {
				if (element[0] === key) {
					return element[1];
				}
			}
		}
		return undefined;
	}
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');

// console.log(ht);
console.log(ht.get('yellow'));
console.log(ht.get('plum'));
console.log(ht.get('green'));
