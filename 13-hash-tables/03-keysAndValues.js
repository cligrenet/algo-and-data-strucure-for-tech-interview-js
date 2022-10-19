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
	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
	}
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
	/*
    Keys:
     loops through the hash table array and returns an array of keys in the table    
    */
	keys() {
		let keysArr = [];
		for (let element of this.keyMap) {
			if (element) {
				for (let item of element) {
					// handle duplicate values
					if (!keysArr.includes(item)) {
						keysArr.push(item[0]);
					}
				}
			}
		}
		return keysArr;
	}
	/*
    Values:
     loops through the hash table array and returns an array of values in the table
    */
	values() {
		let valuesArr = [];
		for (let element of this.keyMap) {
			if (element) {
				for (let item of element) {
					// handle duplicate values
					if (!valuesArr.includes(item)) {
						valuesArr.push(item[1]);
					}
				}
			}
		}
		return valuesArr;
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
ht.set('violet', '#DDA0DD');
ht.set('purple', '#DDA0DD');

// console.log(ht);
console.log(ht.keys());
console.log(ht.values());
