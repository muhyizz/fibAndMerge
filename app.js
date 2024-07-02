#!/usr/bin/node

let array = [];

let n = 0;

function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    const result = fib(n - 1) + fib(n - 2);
    return result;
  }
}

for (let i = 0; i <= n; i++) {
  array.push(fib(i));
}

console.log(array); // Output: [1, 1, 2, 3, 5, 8, 13, 21]

function loopFib(n) {
  let arrayFib = [];
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    arrayFib = [0, 1];
    for (let i = 2; i <= n; i++) {
      arrayFib.push(arrayFib[i - 2] + arrayFib[i - 1]);
    }
  }

  return arrayFib;
}

let loop = loopFib(n);
console.log(loop);
