/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
//// My solution
// const reverse = (str) => {
// 	return str
// 		.split('')
// 		.reverse((a, b) => b - a)
// 		.join('');
// };

//// Recursion
const reverse = (str) => {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
};

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
