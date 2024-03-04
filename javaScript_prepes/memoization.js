const memoise = {};

function factorial(num) {
  if (num === 1) return 1;

  if (memoise[num !== undefined]) {
    return memoise[num];
  }

  const stored = num * factorial(num - 1);
  memoise[num] = stored;

  return stored;
}

// console.log(factorial(3));

for (const key in memoise) {
  delete memoise[key];
}

// console.log(factorial(3));

// Another better approach can be creating a common memoize function

const memoizeFactory = (CBfunction) => {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = CBfunction(...args);
      console.log(cache);
    }
    return cache[key];
  };
};

const factorialNumber = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

const memoizedFactorial = memoizeFactory(factorialNumber);
console.log(memoizedFactorial(5));
