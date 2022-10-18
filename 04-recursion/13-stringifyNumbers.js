/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
*/
//// My solution
// const stringifyNumbers = (obj, res = {}) => {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
// 			res[key] = stringifyNumbers(obj[key]);
// 		} else if (typeof obj[key] === 'number') {
// 			res[key] = String(obj[key]);
// 		} else {
// 			res[key] = obj[key];
// 		}
// 	}
// 	return res;
// };

//// Official solution
const stringifyNumbers = (obj) => {
	let res = {};
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			res[key] = String(obj[key]);
		} else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
			res[key] = stringifyNumbers(obj[key]);
		} else {
			res[key] = obj[key];
		}
	}
	return res;
};

let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66,
		},
	},
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
