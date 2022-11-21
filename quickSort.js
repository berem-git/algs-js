arr = []
for(i = 1890; i <= 2010; i++) arr.push(Math.floor(Math.random()*50000))
const array = [
  4, 5, 8, 6, 1, 4, 7, 45, 71, 35, 14, 98, -84, -551, -4, 25, -7, 0, 54, -74,
  -1, 67, 1, 0, 5,
];
let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}


console.log(quickSort(arr));
console.log(count);





const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(8));

const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};
console.log(fibonachi(8));
