function compact(arr) {
  return arr.filter((number, index) => arr.indexOf(number) === index);
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2);
