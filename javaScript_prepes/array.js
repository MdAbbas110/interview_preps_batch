// Filter Even Numbers: Write a program that takes an array of numbers as input and uses the filter method to return a new array containing only the even numbers.

const number = [1, 3, 4, 5, 6, 8, 12, 38, 13, 20, 17, 27];

const even = number.filter((num) => {
  return num % 2 === 0;
});
// console.log(even);

// Map String Lengths: Create a program that takes an array of strings as input and uses the map method to create a new array that consists of the lengths of each string.

const string = ['abbas', 'ali', 'nikunj', 'harsh', 'tiger', 'elephant'];

const strLength = string.map((str) => {
  return str.length;
});

// console.log(strLength);

//Find Specific Object: Write a program that takes an array of objects representing books with title and author properties and a target title. Use the find method to locate and return the book object with the matching title.

const library = [
  { title: 'war', author: 'json' },
  { title: 'fire', author: 'brad' },
  { title: 'war', author: 'someName' },
  { title: 'politic', author: 'random' },
];

const title = library.find((book) => {
  return book.title === 'war';
});

// console.log(title);

//Filter and Map People Data: Create a program that takes an array of people objects with name and age properties. Use filter to create a new array of people who are older than a specified age and then use map to create an array containing only their names.

const people = [
  { age: 14, name: 'json' },
  { age: 20, name: 'brad' },
  { age: 17, name: 'someName' },
  { age: 29, name: 'random' },
  { age: 37, name: 'some' },
];

const specific = people
  .filter((each) => {
    return each.age >= 18;
  })
  .map((people) => people);

console.log(specific);
