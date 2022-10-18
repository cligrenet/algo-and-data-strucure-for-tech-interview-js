// 1-Frequency Counter (objects/sets)

// ====================================
/*
Write a function called same, which accepts 2 arrays. The function should return 
true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same.
*/

//// My solution: O(n^2)
// const same = (arr1, arr2) => {
// 	for (let num of arr1) {
// 		const el = num * num;
// 		if (arr2.includes(el)) {
// 			arr2.splice(arr2.indexOf(el), 1);
// 		} else {
// 			return false;
// 		}
// 	}

// 	return arr2.length === 0;
// };

//// Naive solution: O(n^2)
// const same = (arr1, arr2) => {
// 	if (arr1.length !== arr2.length) return false;
// 	for (let num of arr1) {
// 		let correctIndex = arr2.indexOf(num ** 2);
// 		if (correctIndex === -1) return false;
// 		arr2.splice(correctIndex, 1);
// 	}
// 	return true;
// };

//// Refactored solution: O(n)
const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	let freqCounter1 = {};
	let freqCounter2 = {};

	for (let val of arr1) {
		freqCounter1[val] = (freqCounter1[val] || 0) + 1;
	}

	for (let val of arr2) {
		freqCounter2[val] = (freqCounter2[val] || 0) + 1;
	}

	for (let key in freqCounter1) {
		if (!(key ** 2 in freqCounter2)) return false;
		if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
	}
	return true;
};

// console.log(same([1, 2, 3], [4, 1, 9])); // -> true
// console.log(same([1, 2, 3], [4, 9])); // -> false
// console.log(same([1, 2, 3], [4, 4, 1])); // -> false (must be same frequency)

// ====================================
/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of anohter, such as cinema, 
formed from iceman.
You can assum only lower case letters and only alpha-numeric letters.
*/

//// My solution: O(n)
// const validAnagram = (str1, str2) => {
// 	if (str1.length !== str2.length) return false;

// 	let map1 = {};
// 	let map2 = {};

// 	for (let char of str1) {
// 		map1[char] = (map1[char] || 0) + 1;
// 	}

// 	for (let char of str2) {
// 		map2[char] = (map2[char] || 0) + 1;
// 	}

// 	for (let key in map1) {
// 		if (!map2[key]) return false;
// 		if (map1[key] !== map2[key]) return false;
// 	}

// 	return true;
// };

//// Officiel solution: O(n)
const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	const loopup = {};

	for (let letter of str1) {
		loopup[letter] ? (loopup[letter] += 1) : (loopup[letter] = 1);
	}

	for (let letter of str2) {
		if (!loopup[letter]) {
			return false;
		} else {
			loopup[letter] -= 1;
		}
	}

	return true;
};

// console.log(validAnagram('', '')); //-> true
// console.log(validAnagram('aaz', 'zza')); //-> false
// console.log(validAnagram('anagram', 'nagaram')); //-> true
// console.log(validAnagram('rat', 'cat')); //-> false
// console.log(validAnagram('awesome', 'awesom')); //-> false
// console.log(validAnagram('qwerty', 'qeywrt')); //-> true
// console.log(validAnagram('texttwisttime', 'timetwisttext')); //-> true

// ====================================
/*
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities: Time: O(N)
*/

//// My solution
// const sameFrequency = (num1, num2) => {
// 	let str1 = num1.toString();
// 	let str2 = num2.toString();

// 	if (str1.length !== str2.length) return false;

// 	let lookup = {};
// 	for (let digit of str1) {
// 		lookup[digit] ? (lookup[digit] += 1) : (lookup[digit] = 1);
// 	}

// 	for (let digit of str2) {
// 		if (!(digit in lookup)) {
// 			return false;
// 		} else {
// 			lookup[digit] -= 1;
// 		}
// 	}
// 	return true;
// };

const sameFrequency = (num1, num2) => {
	let str1 = num1.toString();
	let str2 = num2.toString();

	if (str1.length !== str2.length) return false;

	let countNum1 = {};
	let countNum2 = {};

	for (let digit of str1) {
		countNum1[digit] = (countNum1[digit] || 0) + 1;
	}

	for (let digit of str2) {
		countNum2[digit] = (countNum2[digit] || 0) + 1;
	}

	for (let key in countNum1) {
		if (countNum1[key] !== countNum2[key]) return false;
	}

	return true;
};

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

// ====================================
/*
Implement a function called areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)
*/
//// My solution
// const areThereDuplicates = (arguments) => {
// 	return new Set(arguments).size !== arguments.length;
// };

//// Solution frequency counter
const areThereDuplicates = (arguments) => {
	const lookup = {};
	for (let el of arguments) {
		lookup[el] ? (lookup[el] += 1) : (lookup[el] = 1);
	}

	for (key in lookup) {
		if (lookup[key] > 1) return true;
	}
	return false;
};

//// Solution multiple pointers (Not sure about data type of the arguments, I don't think this a good solution...)
// const areThereDuplicates = (arguments) => {
// 	arguments.sort((a, b) => a - b);

// 	let start = 0;
// 	let next = 1;
// 	while (next < arguments.length) {
// 		if (arguments[next] === arguments[start]) {
// 			return true;
// 		}
// 		start++;
// 		next++;
// 	}
// 	return false;
// };

console.log(areThereDuplicates([1, 2, 3])); // false
console.log(areThereDuplicates([1, 2, 2])); // true
console.log(areThereDuplicates(['a', 'b', 'c', 'a'])); // true
