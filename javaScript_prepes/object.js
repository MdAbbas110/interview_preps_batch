//1 Object Property Sum: Write a program that takes an object representing expenses, where the keys are expense categories (e.g., "food," "rent") and the values are amounts spent in each category. Calculate the total sum of expenses.

const expenses = {
  food: 1250,
  rent: 5000,
  travel: 700,
  other: 1500,
};

const val = Object.values(expenses).reduce((acc, crr) => acc + crr, 0);
// console.log(val);

//2 Nested Object Search: Create a program that takes a nested object representing a file system directory structure. Implement a function that recursively searches for a file by name and returns its full path if found.

// 3 Object Property Modification: Write a program that takes an object representing a user profile with username, email, and age properties. Modify the object to add a new property called isActive and set it to true.

const user = {
  age: 10,
  email: 'abbas110',
  number: 83883,
};

user.isActive = true;
// console.log(user);

//4 Object Property Filtering: Given an object with properties representing different types of fruits and their quantities, write a program to filter out fruits with quantities below a certain threshold.

const bucket = {
  apple: 12,
  banana: 23,
  kiwi: 54,
  papaya: 21,
};

//NOTE: Object.entries return a array [] which is consist of arrays of all the key values present in the object

const entries = Object.entries(bucket);
console.log(entries);
for (const [key, value] of entries) {
  if (value > 20) {
    return [value, key];
  }
}

// 6 Object Sorting: Write a program that takes an array of objects representing products with name and price properties. Sort the products by price in ascending order.

const productsBuy = [
  { name: 'gas', price: 699 },
  { name: 'pipe', price: 2330 },
  { name: 'camera', price: 5500 },
  { name: 'mouse', price: 1400 },
  { name: 'specs', price: 488 },
  { name: 'keyboard', price: 849 },
];

const highestBuy = productsBuy.filter((item) => {
  return item.price;
});
