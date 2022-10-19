// Hash function
// convert keys into valid array indices

// ----------------------------------
// Works on strings only
// Complexity not constant, linear in key length
// Can be a little more random

// function hash(key, arrayLen) {
// 	let total = 0;
// 	for (let char of key) {
// 		let val = char.charCodeAt(0) - 96;
// 		total = (total + val) % arrayLen;
// 	}
// 	return total;
// }

// ----------------------------------
// Hashing revisited
function hash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31; // helps on reducing collisions, helpful in spreading out the keys more uniformly and in case the array has a prime length
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let val = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + val) % arrayLen;
	}
	return total;
}

console.log(hash('pink', 10)); // 0
console.log(hash('orangered', 10)); // 7
console.log(hash('cyan', 10)); // 3
console.log(hash('blue', 10)); // 0
console.log(hash('orange', 10)); // 0
