// Data Structures
// collections of values, the relationships among them
// and the functions or operations that can be applied to the data

// Class
// A blueprint for creating objects with pre-defined properties and methods
// Abstraction, Encapsulation, Polymorphism
// Instance Methods -> Inside all of our instance methods and constructor, the keyword "this" refers to the object created from that class(known as an instance)
// Class Methods (not very often)

class Student {
	// The constructor function is a special function that gets run when the class is instantiated
	constructor(firstName, lastName) {
		this.firstName = firstName; // "this" refers to the individual instance of the class
		this.lastName = lastName;
	}
	// Instance Methods
	fullName() {
		return `Your full name is ${this.firstName} ${this.lastName}.`; // "this" refers to the individual instance of the class
	}
	// Class Methods (utility function, not relavent to an individual instance)
	static enrollStudents(...students) {
		return 'Enrolled!';
	}
}

let firstStudent = new Student('Alice', 'Bob');
console.log(firstStudent);
console.log(firstStudent.fullName());
console.log(Student.enrollStudents());
// console.log(firstStudent.enrollStudents());
