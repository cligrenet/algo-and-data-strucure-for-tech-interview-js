/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/
//// My solution
// const capitalizeWords = (words) => {
// 	if (words.length === 0) return [];

// 	let res = [];
// 	if (words.length === 1) {
// 		res = [words[0].toUpperCase()];
// 	} else {
// 		res = [words[0].toUpperCase(), ...capitalizeWords(words.slice(1))];
// 	}

// 	return res;
// };

//// Official solution
const capitalizeWords = (words) => {
	if (words.length === 1) return [words[0].toUpperCase()];

	const res = capitalizeWords(words.slice(0, -1));
	const str = words[words.length - 1].toUpperCase();
	// const str = words.slice(words.length - 1)[0].toUpperCase();
	res.push(str);
	return res;
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
