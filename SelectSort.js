arr = []
for(i = 1890; i <= 2010; i++) arr.push(Math.floor(Math.random()*50000))
const array = [
  4, 5, 8, 6, 1, 4, 7, 45, 71, 35, 14, 98, -84, -551, -4, 25, -7, 0, 54, -74,
  -1, 67, 1, 0, 5,
];
let count = 0;
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}

console.log(selectionSort(arr))
console.log(count)