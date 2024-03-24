//creating an array called ages//
let ages = ["3", "9", "23", "64", "2", "8", "28", "93"];
console.log(ages);
//subtracting first value from the last value in the element//
let minusAge = ages[ages.length - 1] - ages[ages.length - ages.length];
console.log(minusAge);
//creating a new array, repeating step a//
let newAge = ["3", "9", "23", "64", "2", "8", "28", "93"];
console.log(newAge);

//creating a loop to calculate age//
let average = 0;
for (let i = 0; i < ages.length; i++) {
  average += ages[i];
}
console.log(average / ages.length);

//2. creating an array called names//
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);

//2a. calculating the average number of letters per name//
// stuck on this part a. and b.
let namesLength = [];
for (let i = 0; i < names.length; i++) {
  namesLength.push(names[i].length);
}

//2b. creating a loop to iterate through the array agian and concatenate all the names together, separated by spaces.

//3. How to access the last element of an array?//
// There are 2 mothods that can be used to access the last element of an array.//
// one: the last item can be accessed by its index.//
//two: element[element.length-1]; depending on what's going on in the array.//

//4. How do you access the first element of any array?//
// To access the first element of any array, I would use the Array.find()
//5.
let namesLength = [];
for (let i = 0; i < names.length; i++) {
  namesLength.push(names[i].length);
}

//6.
let sum = 0;
for (let i = 0; i < namesLength.length; i++) {
  sum += nameLengths[i];
}
console.log(sum);

//7.
function greeting(hello, number) {
  return hello + "" + number;
}

//8. writing a function that takes two parameters
function createFullName(firstName, lastName) {
  console.log(firstName + "" + lastName);
}
createFullName("Dani", "Lozano");

//9-13 I struggled, and need help!
