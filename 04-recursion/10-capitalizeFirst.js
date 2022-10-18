/*
Write a recursive function called capitalizeFirst. Given an array of strings, 
capitalize the first letter of each string in the array.
*/
//// My solution
// const capitalizeFirst = (arr) => {
// 	if (arr.length === 0) return [];

// 	let res = [];
// 	if (arr.length === 1) {
// 		res = [arr[0][0].toUpperCase() + arr[0].slice(1)];
// 	} else {
// 		res = [arr[0][0].toUpperCase() + arr[0].slice(1), ...capitalizeFirst(arr.slice(1))];
// 	}

// 	return res;
// };

//// Official solution
const capitalizeFirst = (arr) => {
	if (arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].substr(1)];

	const res = capitalizeFirst(arr.slice(0, -1)); //QUESTION WHY???
	const str = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
	res.push(str);
	return res;
};

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car']));
